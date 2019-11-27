import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  board = [];

  constructor() {
    this.generateBoard(4, 4);
  }

  ngOnInit() {}

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
