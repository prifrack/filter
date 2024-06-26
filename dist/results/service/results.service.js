"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tournament_entity_1 = require("./entities/tournament.entity");
const player_entity_1 = require("../players/entities/player.entity");
const results_entity_1 = require("../entities/results.entity");
let ResultsService = class ResultsService {
    constructor(tournamentsRepository, playersRepository, resultsRepository) {
        this.tournamentsRepository = tournamentsRepository;
        this.playersRepository = playersRepository;
        this.resultsRepository = resultsRepository;
    }
    create(resultsData) {
        const Result = this.resultsRepository.create(resultData);
        return this.resultRepository.save(result);
    }
    findAll() {
        return this.resultsRepository.find({ relations: ['players, tournament'] });
    }
    findOne(id) {
        return this.resultsRepository.findOne(id, { relations: ['players, tournament'] });
    }
    async update(id, resultData) {
        await this.resultsRepository.update(id, resultData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.resultsRepository.delete(id);
    }
    async addPlayer(tournamentId, playerId) {
        const tournament = await this.findOne(tournamentId);
        const player = await this.playersRepository.findOne(playerId);
        tournament.players.push(player);
        return this.resultsRepository.save(tournament);
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __param(1, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __param(2, (0, typeorm_1.InjectRepository)(results_entity_1.Result)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ResultsService);
//# sourceMappingURL=results.service.js.map