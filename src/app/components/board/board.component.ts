import { Component, OnInit } from "@angular/core";
import { PlaysService } from "src/app/services/plays.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  name = new FormControl("");
  currentGame: any = {};
  board = [];
  rows = 10;
  columns = 10;
  idGame = null;
  idPlayer = null;
  status: boolean;
  playBoard = [];
  playBoard2: any;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  finishGame: boolean;
  colorTile = [];
  changeColor = 0;

  constructor(private playsService: PlaysService) {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {
    let game = this.playsService.newGame();
    this.idGame = game.idGame;
    this.idPlayer = game.idPlayer;
    this.status = this.playsService.playerStatus(this.idGame, this.idPlayer);
  }

  selectTile(x, y) {
    this.board[x][y] = 1;
  }
  selectPlayBoard(x, y) {
    if (this.currentGame.player1.turn) {
      this.playsService.shot(x, y, this.idGame, this.currentGame.player1.id);
      this.scorePlayer1 = this.currentGame.player1.score;
      this.finishGame = this.currentGame.endGame;
    } else {
      this.playsService.shot(x, y, this.idGame, this.currentGame.player2.id);
      this.scorePlayer2 = this.currentGame.player2.score;
      this.finishGame = this.currentGame.endGame;
    }
  }

  startGame() {
    this.playsService.selectBoard(
      this.idGame,
      this.idPlayer,
      this.board,
      this.name.value
    );
    this.status = this.playsService.playerStatus(this.idGame, this.idPlayer);
    this.currentGame = this.playsService.getPlay(this.idGame);
    this.playBoard = this.currentGame.player1.playBoard;
    this.playBoard2 = this.currentGame.player2.playBoard;
    this.playerName();
  }
  playerName() {
    this.playsService.savePlayer(this.idPlayer, this.name.value, this.idGame);
  }
  generateBoard(rows, columns) {
    for (let i = 0; i < rows; i++) {
      let row = [];
      let probando = [];
      this.board.push(row);
      this.colorTile.push(probando);
      for (let j = 0; j < columns; j++) {
        this.board[i].push(0);
        if (this.changeColor == 0) {
          this.changeColor = 1;
        } else {
          this.changeColor = 0;
        }
        this.colorTile[i].push(this.changeColor);
      }
    }
  }
}
