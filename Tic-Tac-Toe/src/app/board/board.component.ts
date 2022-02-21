import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: any[];
  xIsNext: boolean | undefined
  winner: string | undefined

  constructor() { } // in here 

  ngOnInit(): void {
    this.newGame()
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = ''
    this.xIsNext = true
  
  }

  get player() {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) { // event handler 
      this.squares?.splice(idx, 1, this.player) // what is the index in the array that was clicked if it has been clicked = null  if not splice in the index 
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.calulateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a , b, c] = lines[i]
        if (
          this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]
        ) {
          return this.squares[a]
        }
      }
      return null
    }
  }

}
