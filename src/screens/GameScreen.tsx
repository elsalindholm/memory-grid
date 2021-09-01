import React from 'react';

import { AppState, Screen } from '../AppState';

interface GameScreenProps {
  appState: AppState;
}

export class GameScreen extends React.PureComponent<GameScreenProps> {
  render() {
    const { appState } = this.props;

    return (
      <div>
        <div>
          <div>
            <button onClick={() => appState.setScreen(Screen.START)}>Exit Game</button>
          </div>
          <div>Memory Grid</div>
        </div>
      </div>
    );
  }
}
