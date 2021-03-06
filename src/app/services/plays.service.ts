import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { interval, timer } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlaysService {
  private plays = [];
  private urlApi = "https://battlezombie-backend.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  getGameStatus(idGame, idPlayer, playerNumber) {
    return timer(0, 1000).pipe(
      flatMap(() => {
        return this.http.get(
          `${this.urlApi}/get-game/${idGame}/${idPlayer}/${playerNumber}`
        );
      })
    );
  }

  // Función para verificar si el disparo se hace al último zombie del tablero
  lastZombie(arrBoard) {
    let arrEndGame = [];
    arrBoard.forEach(element => {
      arrEndGame = arrEndGame.concat(element);
    });
    return arrEndGame.includes(1);
  }
  //Guarda el nombre de los jugadores
  savePlayer(idPlayer, name, idGame) {
    this.plays.forEach(play => {
      if (play.id === idGame) {
        if (play.player1.id === idPlayer) {
          play.player1.name = name;
          console.log(play.player1.name);
        } else if (play.player2.id === idPlayer) {
          play.player2.name = name;
          console.log(play.player2.name);
        }
      }
    });
  }

  //Función que genera un tablero según un número de columnas y filas dadas
  generateBoard(rows, columns) {
    let board = [];
    // this.playsservive.addGrid(rows, columns, "Nata");
    for (let i = 0; i < rows; i++) {
      let row = [];
      board.push(row);
      for (let j = 0; j < columns; j++) {
        board[i].push(0);
      }
    }
    return board;
  }

  // Función que genera el json de una nueva partida con todos los campos necesarios
  newGame(rows = 10, columns = 10) {
    let game = {
      id: this.getRandomId(),
      rows,
      columns,
      endGame: false,
      player1: {
        id: this.getRandomId(),
        name: "",
        score: 2,
        turnNumber: 1,
        ready: false,
        selectedBoard: [],
        turn: true,
        playBoard: this.generateBoard(rows, columns)
      },
      player2: {
        id: this.getRandomId(),
        name: "ROBOCOP",
        score: 2,
        turnNumber: 1,
        ready: false,
        selectedBoard: [
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
          [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
          [1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
        ],
        turn: false,
        playBoard: this.generateBoard(rows, columns)
      }
    };
    this.plays.push(game);
    console.log(this.plays);
    return { idGame: game.id, idPlayer: game.player1.id };
  }

  // Función que retorna un id aleatorio de 6 dígitos
  getRandomId() {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  }

  // Función que retorna una partida del json de partidas según un id de juego entregado
  getPlay(idGame) {
    let out = [];
    this.plays.forEach(play => {
      if (play.id === idGame) {
        out = play;
      }
    });
    return out;
  }

  //Función que guarda el tablero seleccionado por un jugador
  selectBoard(idGame, idPlayer, board, playerName) {
    return this.http.post(`${this.urlApi}/select-board`, { board, playerName });
  }

  sendShot(idGame, idPlayer, playerNumber, xPosition, yPosition) {
    return this.http.post(`${this.urlApi}/shot`, {
      idGame,
      idPlayer,
      playerNumber,
      xPosition,
      yPosition
    });
  }

  //Función que verifica el estatus de un jugador, si ya está listo o no para jugar.
  playerStatus(idGame, idPlayer) {
    let output = false;
    this.plays.forEach(play => {
      if (play.id === idGame && play.player1.id === idPlayer) {
        output = play.player1.ready;
      } else if (play.id === idGame && play.player2.id === idPlayer) {
        output = play.player2.ready;
      }
    });
    return output;
  }

  // Función que verifica el disparo de un jugador y sus distintas posibilidades.
  shot(x, y, idGame, idPlayer) {
    // Verificar juego y jugador y que sea su turno

    this.plays.forEach(play => {
      if (
        play.id === idGame &&
        play.player1.id === idPlayer &&
        play.player1.turn
      ) {
        if (play.player1.playBoard[x][y] === 0) {
          play.player1.playBoard[x][y] = 1;
          if (play.player2.selectedBoard[x][y] === 1) {
            play.player1.playBoard[x][y] = 2;
            play.player2.selectedBoard[x][y] = 2;

            // play.player1.score = Math.pow(
            //   play.player1.score,
            //   play.player1.turnNumber
            // );
            play.player1.score = play.player1.score * play.player1.turnNumber;
            play.player1.turnNumber++;
          } else {
            play.player2.selectedBoard[x][y] = -1;
            console.log("no acertaste al barco");
            play.player1.turnNumber = 1;
            play.player1.turn = false;
            play.player2.turn = true;
          }
        } else {
          alert("Ya pegaste en ese espacio");
        }
        if (!this.lastZombie(play.player2.selectedBoard)) {
          play.endGame = true;
          alert("La partida ha terminado");
        }
      } else if (
        play.id === idGame &&
        play.player2.id === idPlayer &&
        play.player2.turn
      ) {
        if (play.player2.playBoard[x][y] === 0) {
          play.player2.playBoard[x][y] = 1;
          if (play.player1.selectedBoard[x][y] === 1) {
            play.player2.playBoard[x][y] = 2;
            play.player1.selectedBoard[x][y] = 2;
            play.player2.score = play.player2.score * play.player2.turnNumber;
            play.player2.turnNumber++;
          } else {
            play.player1.selectedBoard[x][y] = -1;
            console.log("no acertaste al barco");
            play.player2.turnNumber = 1;
            play.player2.turn = false;
            play.player1.turn = true;
          }
        } else {
          alert("Ya pegaste en ese espacio");
        }
        if (!this.lastZombie(play.player1.selectedBoard)) {
          play.endGame = true;
          alert("La partida ha terminado");
        }
      }
    });
    // asignar al jugador su jugada y verificar si le dio a un barco del enemigo
    // retornar si fue 'hit' y mantener el turno en ese jugador
    console.log(this.plays);
  }
}
