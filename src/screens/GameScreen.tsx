import React from 'react';

import { AppState, Screen } from '../AppState';
import { GameGrid } from '../game/GameGrid';

import './game-screen.scss';

interface GameScreenProps {
  appState: AppState;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'game-screen'}>
        <div className={'navbar'}>
          <div>
            <button className={'exit-button'} onClick={() => appState.setScreen(Screen.START)}>
              Exit Game
            </button>
          </div>
          <div className={'page-title'}>Memory Grid</div>
        </div>
        <div className={'game-container'}>
          <div>Level counter</div>
          <GameGrid gameState={appState.gameState} />
        </div>
      </div>
    );
  }
}
