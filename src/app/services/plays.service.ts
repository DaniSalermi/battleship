import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlaysService {
  private plays = [];
  constructor() {}

  searchNewGame() {
    // validar si ya existe partida vacia

    // true
    this.assignPlayer2(10);

    // false
    this.newGame();
  }

  assignPlayer2(idGame) {
    // retornar el idGame y el player2 id de ese juego
  }

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

  newGame(rows = 10, columns = 10) {
    let game = {
      id: this.getRandomId(),
      rows,
      columns,
      player1: {
        id: this.getRandomId(),
        name: "",
        score: 0,
        ready: false,
        selectedBoard: [],
        playBoard: this.generateBoard(rows, columns)
      },
      player2: {
        id: this.getRandomId(),
        name: "",
        score: 0,
        ready: false,
        selectedBoard: [],
        playBoard: this.generateBoard(rows, columns)
      }
    };
    this.plays.push(game);
    console.log(this.plays);
    return { idGame: game.id, idPlayer: game.player1.id };
  }

  getRandomId() {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  }

  getPlay(id) {
    let out = [];
    this.plays.forEach(play => {
      if (play.id === id) {
        console.log(play.id);
        out = play;
      }
    });
    return out;
  }
  setPlay(id, x, y) {
    let out = [];
    this.plays.forEach(play => {
      if (play.id === id) {
        console.log();
        play.player1.selectedBoard.x.push(x);
        play.player1.selectedBoard.y.push(y);
      }
    });
  }
}
