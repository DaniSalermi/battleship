import { Injectable } from "@angular/core";
import partidas from "../Models/partidas.json";

@Injectable({
  providedIn: "root"
})
export class PlaysService {
  private plays: any[] = partidas;
  constructor() {}
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
  addGrid(rows, columns, player) {
    this.plays.forEach(play => {
      if (play.player1.name === player) {
        for (let i = 0; i < rows; i++) {
          let row = [];
          play.player1.selectedBoard.push(row);
          for (let j = 0; j < columns; j++) {
            play.player1.selectedBoard[i].push("");
          }
        }
      }
    });
  }
}
