import { Component, OnInit } from "@angular/core";
import { PlaysService } from "src/app/services/plays.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  currentGame = [];
  board = [];
  rows = 10;
  columns = 10;
  idGame = null;
  idPlayer = null;
  status: boolean;

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

  startGame() {
    this.playsService.selectBoard(this.idGame, this.idPlayer, this.board);
    this.status = this.playsService.playerStatus(this.idGame, this.idPlayer);
    this.currentGame.push(this.playsService.getPlay(this.idGame));
    console.log(this.currentGame);
  }
  generateBoard(rows, columns) {
    for (let i = 0; i < rows; i++) {
      let row = [];
      this.board.push(row);
      for (let j = 0; j < columns; j++) {
        this.board[i].push(0);
      }
    }
  }
}
