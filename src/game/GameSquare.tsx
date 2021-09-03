import React from 'react';
import { SquareItem } from '../GameState';

import './game-square.scss';

interface GameSquareProps {
  square: SquareItem;
}

export class GameSquare extends React.PureComponent<GameSquareProps> {
  render() {
    return <div className={'game-square'}></div>;
  }
}
