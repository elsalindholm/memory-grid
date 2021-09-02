import { action, observable } from 'mobx';

export class GameState {
  @observable public currentLevel: number = 10;
  @observable public lastLevel: number;
  @observable public highestLevel: number = 1;

  @observable public gridSize: number = 4;

  constructor() {
    this.setSizeOfGrid();
  }

  @action setSizeOfGrid() {
    const baseGrid = 4;
    const levelMultiplier = 3;
    const rowAndColumAdditions = Math.floor(this.currentLevel / levelMultiplier);

    this.gridSize = baseGrid + rowAndColumAdditions;
  }
}
