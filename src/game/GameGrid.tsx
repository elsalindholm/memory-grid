import React from 'react';

import { GameState, SquareItem } from '../GameState';

import './game-grid.scss';
import { GameSquare } from './GameSquare';

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

    return (
      <div className={'game-grid'} style={gridStyle}>
        {this.renderSquares()}
      </div>
    );
  }

  private renderSquares() {
    const { gameState } = this.props;

    return gameState.squares.map((square: SquareItem, i: number) => (
      <GameSquare key={'gs-' + i} square={square} />
    ));
  }
}
