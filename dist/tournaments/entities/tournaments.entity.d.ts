import { Player } from '../../players/entities/player.entity';
export declare class Tournament {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    players: Player[];
}
