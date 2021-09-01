import { observer } from 'mobx-react';
import React from 'react';

import { AppState, Screen } from './AppState';
import { GameScreen } from './screens/GameScreen';
import { StartScreen } from './screens/StartScreen';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    let page: JSX.Element;
    switch (this.appState.currentScreen) {
      case Screen.START:
        page = <StartScreen appState={this.appState} />;
        break;
      case Screen.GAME:
        page = <GameScreen appState={this.appState} />;
        break;
    }

    return <div>{page}</div>;
  }
}
