import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './createPlayers.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {}