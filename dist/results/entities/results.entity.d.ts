import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Player } from '../../players/entities/player.entity';
export declare class Result {
    id: number;
    tournament: Tournament;
    winner: Player;
    loser: Player;
    winnerScore: number;
    loserScore: number;
}
