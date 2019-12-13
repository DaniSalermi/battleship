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
  playerNumber = null;
  status: boolean;
  playBoard = [];
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  finishGame: boolean;
  colorTile = [];
  changeColor = 0;

  constructor(private playsService: PlaysService) {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {
    // this.status = this.playsService.playerStatus(this.idGame, this.idPlayer);
    // this.playsService.getGameStatus(564644, 977766, 1).subscribe(payload => {
    //   console.log(payload);
    // });
    // this.playsService.sendShot(564644, 977766, 1, 0, 0).subscribe(payload => {
    //   console.log(payload);
    // });
  }

  selectTile(x, y) {
    this.board[x][y] = 1;
  }
  selectPlayBoard(x, y) {
    this.playsService
      .sendShot(this.idGame, this.idPlayer, this.playerNumber, x, y)
      .subscribe(payload => {
        console.log(payload);
      });
  }

  getGame() {
    this.playsService
      .getGameStatus(this.idGame, this.idPlayer, this.playerNumber)
      .subscribe(payload => {
        console.log(payload);
        this.currentGame = payload;
        this.status = true;
      });
  }

  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

  startGame() {
    this.playsService
      .selectBoard(this.idGame, this.idPlayer, this.board, this.name.value)
      .subscribe((e: any) => {
        this.idGame = e.id;
        this.idPlayer = e.playerId;
        this.playerNumber = e.player;
        this.getGame();
      });
  }

  generateBoard(rows, columns) {
    for (let i = 0; i < rows; i++) {
      let row = [];
      let probando = [];
      this.board.push(row);
      this.colorTile.push(probando);
      if (this.changeColor == 0) {
        this.changeColor = 1;
      } else {
        this.changeColor = 0;
      }
      for (let j = 0; j < columns; j++) {
        this.board[i].push(0);
        this.colorTile[i].push(this.changeColor);
        if (this.changeColor == 0) {
          this.changeColor = 1;
        } else {
          this.changeColor = 0;
        }
      }
    }
  }
}
