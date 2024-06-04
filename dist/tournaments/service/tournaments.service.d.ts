import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { Player } from '../players/entities/player.entity';
export declare class TournamentsService {
    private tournamentsRepository;
    private playersRepository;
    constructor(tournamentsRepository: Repository<Tournament>, playersRepository: Repository<Player>);
    create(tournamentData: any): Promise<Tournament>;
    findAll(): Promise<Tournament[]>;
    findOne(id: number): Promise<Tournament>;
    update(id: number, tournamentData: any): Promise<Tournament>;
    remove(id: number): Promise<void>;
    addPlayer(tournamentId: number, playerId: number): Promise<Tournament>;
}
