"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createPlayers_dto_1 = require("./createPlayers.dto");
class UpdatePlayerDto extends (0, mapped_types_1.PartialType)(createPlayers_dto_1.CreatePlayerDto) {
}
exports.UpdatePlayerDto = UpdatePlayerDto;
//# sourceMappingURL=updatePlayers.dto.js.map