import { action, observable } from 'mobx';

export interface SquareItem {
  id: number;
  highlighted: boolean;
}

export class GameState {
  @observable public currentLevel: number = 10;
  @observable public lastLevel: number;
  @observable public highestLevel: number = 1;

  @observable public gridSize: number = 4;
  @observable public noOfSquares: number;
  @observable public squares: SquareItem[] = [];

  constructor() {
    this.setGridSize();
  }

  @action setGridSize() {
    const baseGrid = 4;
    const levelMultiplier = 3;
    const rowAndColumAdditions = Math.floor(this.currentLevel / levelMultiplier);

    this.gridSize = baseGrid + rowAndColumAdditions;
    this.noOfSquares = this.gridSize * this.gridSize;
  }

  @action createSquares() {
    for (let i = 0; i < this.noOfSquares; i++) {
      const square: SquareItem = {
        id: i,
        highlighted: false,
      };
      this.squares.push(square);
    }
  }
}
