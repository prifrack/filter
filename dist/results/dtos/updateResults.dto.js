"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResultDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createResults_dto_1 = require("./createResults.dto");
class UpdateResultDto extends (0, mapped_types_1.PartialType)(createResults_dto_1.CreateResultDto) {
}
exports.UpdateResultDto = UpdateResultDto;
//# sourceMappingURL=updateResults.dto.js.map