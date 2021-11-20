export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const GRID_SIZE = 100;

export function samePosition(p1: Position, p2: Position) {
  return p1.x === p2.x && p1.y === p2.y;
}

export interface Position {
  x: number;
  y: number;
}

export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT
}

export enum TeamType {
  OPPONENT,
  OUR,
}

export interface Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

export const initialBoardState: Piece[] = [
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 6,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/bishop_w.png`,
    position: {
      x: 2,
      y: 4,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/knight_w.png`,
    position: {
      x: 6,
      y: 1,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
];
