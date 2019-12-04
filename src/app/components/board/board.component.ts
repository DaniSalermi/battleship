import { Component, OnInit } from "@angular/core";
import { PlaysService } from "src/app/services/plays.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  board = [];
  rows = 8;
  columns = 8;
  idGame = null;
  idPlayer = null;

  constructor(private playsService: PlaysService) {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {
    let game = this.playsService.newGame();
    this.idGame = game.idGame;
    this.idPlayer = game.idPlayer;
  }

  selectTile(x, y) {
    alert(`Hiciste click en la posicion ${x} / ${y}`);
    this.playsService.setPlay(1, x, y);
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
