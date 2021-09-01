import { action, observable } from 'mobx';

export enum Screen {
  START = 'start',
  GAME = 'game',
}

export class AppState {
  @observable public currentScreen: Screen = Screen.START;

  @action setScreen(page: Screen) {
    this.currentScreen = page;
  }
}
