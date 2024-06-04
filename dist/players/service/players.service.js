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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./entities/player.entity");
let PlayersService = class PlayersService {
    constructor(playersRepository) {
        this.playersRepository = playersRepository;
    }
    async create(createPlayerDto) {
        const player = this.playersRepository.create(createPlayerDto);
        return await this.playersRepository.save(player);
    }
    async findAll() {
        return await this.playersRepository.find();
    }
    async findOne(id) {
        const player = await this.playersRepository.findOne(id);
        if (!player) {
            throw new common_1.NotFoundException(`Player with ID ${id} not found`);
        }
        return player;
    }
    async update(id, updatePlayerDto) {
        await this.playersRepository.update(id, updatePlayerDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.playersRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Player with ID ${id} not found`);
        }
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PlayersService);
//# sourceMappingURL=players.service.js.map