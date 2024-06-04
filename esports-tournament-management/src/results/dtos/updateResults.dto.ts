import { PartialType } from '@nestjs/mapped-types';
import { CreateResultDto } from './createResults.dto';

export class UpdateResultDto extends PartialType(CreateResultDto) {}