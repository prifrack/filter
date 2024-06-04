"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleGuard = void 0;
const common_1 = require("@nestjs/common");
let SaleGuard = class SaleGuard {
    canActivate(context) {
        const currentHour = new Date().getHours();
        if (currentHour >= 18 || currentHour < 6) {
            throw new common_1.ForbiddenException('Sales cannot be processed between 6pm and 6am');
        }
        return true;
    }
};
exports.SaleGuard = SaleGuard;
exports.SaleGuard = SaleGuard = __decorate([
    (0, common_1.Injectable)()
], SaleGuard);
//# sourceMappingURL=sale-guard.guard.js.map