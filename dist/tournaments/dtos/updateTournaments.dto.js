"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTournamentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createTournaments_dto_1 = require("./createTournaments.dto");
class UpdateTournamentDto extends (0, mapped_types_1.PartialType)(createTournaments_dto_1.CreateTournamentDto) {
}
exports.UpdateTournamentDto = UpdateTournamentDto;
//# sourceMappingURL=updateTournaments.dto.js.map