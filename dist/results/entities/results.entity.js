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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const typeorm_1 = require("typeorm");
const tournament_entity_1 = require("../../tournaments/entities/tournament.entity");
const player_entity_1 = require("../../players/entities/player.entity");
let Result = class Result {
};
exports.Result = Result;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Result.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_entity_1.Tournament),
    __metadata("design:type", typeof (_a = typeof tournament_entity_1.Tournament !== "undefined" && tournament_entity_1.Tournament) === "function" ? _a : Object)
], Result.prototype, "tournament", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player),
    __metadata("design:type", typeof (_b = typeof player_entity_1.Player !== "undefined" && player_entity_1.Player) === "function" ? _b : Object)
], Result.prototype, "winner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player),
    __metadata("design:type", typeof (_c = typeof player_entity_1.Player !== "undefined" && player_entity_1.Player) === "function" ? _c : Object)
], Result.prototype, "loser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Result.prototype, "winnerScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Result.prototype, "loserScore", void 0);
exports.Result = Result = __decorate([
    (0, typeorm_1.Entity)()
], Result);
//# sourceMappingURL=results.entity.js.map