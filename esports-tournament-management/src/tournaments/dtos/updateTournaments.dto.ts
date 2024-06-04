import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentDto } from './createTournaments.dto';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {}