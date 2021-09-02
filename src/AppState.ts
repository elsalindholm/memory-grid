import { action, observable } from 'mobx';
import { GameState } from './GameState';

export enum Screen {
  START = 'start',
  GAME = 'game',
}

export class AppState {
  public readonly gameState = new GameState();

  @observable public currentScreen: Screen = Screen.GAME;

  @action setScreen(page: Screen) {
    this.currentScreen = page;
  }
}
