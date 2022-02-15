import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] | undefined
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

}
