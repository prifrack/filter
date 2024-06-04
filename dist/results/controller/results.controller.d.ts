import { ResultsService } from './results.service';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    create(createResultDto: any): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateResultDto: any): any;
    remove(id: number): any;
    addPlayer(resultId: number, playerId: number): any;
}
