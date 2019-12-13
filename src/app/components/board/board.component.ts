import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PlaysService } from "src/app/services/plays.service";
import { FormControl } from "@angular/forms";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @ViewChild("winner", { static: false }) winner: ElementRef<any>;
  ZOMBIES_NEEDED = 2;
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

  constructor(
    private playsService: PlaysService,
    public modal: NgxSmartModalService
  ) {
    this.generateBoard(this.rows, this.columns);
  }

  ngOnInit() {}

  selectTile(x, y) {
    if (
      this.quantityOfZombies(this.board) < this.ZOMBIES_NEEDED ||
      this.board[x][y] === 1
    ) {
      this.board[x][y] = this.board[x][y] === 1 ? 0 : 1;
    }
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
        if (this.currentGame.endGame) {
          this.winner.nativeElement.click();
        }
      });
  }

  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

  startGame() {
    if (this.name.value === "") {
      alert("Necesitas colocar tu nombre");
    }
    if (this.quantityOfZombies(this.board) !== this.ZOMBIES_NEEDED) {
      alert(
        `necesitas al menos ${
          this.ZOMBIES_NEEDED
        } zombies y tienes ${this.quantityOfZombies(this.board)}`
      );
    }
    if (
      this.name.value !== "" &&
      this.quantityOfZombies(this.board) === this.ZOMBIES_NEEDED
    ) {
      this.playsService
        .selectBoard(this.idGame, this.idPlayer, this.board, this.name.value)
        .subscribe((e: any) => {
          this.idGame = e.id;
          this.idPlayer = e.playerId;
          this.playerNumber = e.player;
          this.getGame();
        });
    }
  }

  quantityOfZombies(board) {
    let count = 0;
    board.forEach(row => {
      row.forEach(tile => {
        if (tile === 1) {
          count++;
        }
      });
    });
    return count;
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
