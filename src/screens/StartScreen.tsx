import React from 'react';

import { AppState, Screen } from '../AppState';

import './start-screen.scss';

interface StartScreenProps {
  appState: AppState;
}

export class StartScreen extends React.PureComponent<StartScreenProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'start-screen'}>
        <div className={'title-cont'}>
          <h2>Memory Grid</h2>
        </div>
        <div className={'blurb-cont'}>
          <p>
            Test your memory with Memory Grid. Some of the squares of the grid are highlighted for a
            couple of seconds. Can you recall which squares were highlighted?
          </p>
          <p>Click on squares on the grid to see if you remembered their placement correctly.</p>
        </div>
        <div className={'button-cont'}>
          <button onClick={() => appState.setScreen(Screen.GAME)}>Play</button>
        </div>
      </div>
    );
  }
}
