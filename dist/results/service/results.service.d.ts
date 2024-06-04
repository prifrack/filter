import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { Player } from '../players/entities/player.entity';
import { Result } from '../entities/results.entity';
export declare class ResultsService {
    private tournamentsRepository;
    private playersRepository;
    private resultsRepository;
    constructor(tournamentsRepository: Repository<Tournament>, playersRepository: Repository<Player>, resultsRepository: Repository<Result>);
    create(resultsData: any): Promise<Result>;
    findAll(): Promise<Result[]>;
    findOne(id: number): Promise<Result>;
    update(id: number, resultData: any): Promise<Result>;
    remove(id: number): Promise<void>;
    addPlayer(tournamentId: number, playerId: number): Promise<Tournament>;
}
