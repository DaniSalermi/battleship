import { Component, OnInit } from "@angular/core";
import { Alert } from "selenium-webdriver";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  board = [];
  rows = 5;
  columns = 5;
  constructor() {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {}

  selectTile(x, y) {
    alert(`Hiciste click en la posicion ${x} / ${y}`);
  }

  generateBoard(rows, colums) {
    for (let i = 0; i < rows; i++) {
      let row = [];
      this.board.push(row);
      for (let j = 0; j < colums; j++) {
        this.board[i].push("");
      }
    }
  }
}
