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
  constructor(private playsservive: PlaysService) {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {}

  selectTile(x, y) {
    alert(`Hiciste click en la posicion ${x} / ${y}`);
  }

  generateBoard(rows, columns) {
    // this.playsservive.addGrid(rows, columns, "Nata");
    for (let i = 0; i < rows; i++) {
      let row = [];
      this.board.push(row);
      for (let j = 0; j < columns; j++) {
        this.board[i].push("");
      }
    }

    console.log(this.playsservive.getPlay(1));
  }
}
