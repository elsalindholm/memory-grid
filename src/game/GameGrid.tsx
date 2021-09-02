import React from 'react';

import { GameState } from '../GameState';

import './game-grid.scss';

interface GameGridProps {
  gameState: GameState;
}

export class GameGrid extends React.PureComponent<GameGridProps> {
  render() {
    const { gameState } = this.props;

    const gridStyle: React.CSSProperties = {
      gridTemplateColumns: `repeat(${gameState.gridSize}, 40px)`,
      gridTemplateRows: `repeat(${gameState.gridSize}, 40px)`,
    };

    return <div className={'game-grid'} style={gridStyle}></div>;
  }
}
