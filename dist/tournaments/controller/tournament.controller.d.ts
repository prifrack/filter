import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    create(createTournamentDto: any): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateTournamentDto: any): any;
    remove(id: number): any;
    addPlayer(tournamentId: number, playerId: number): any;
}
