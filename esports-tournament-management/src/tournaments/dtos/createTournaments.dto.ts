import { IsString, IsEmail } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;
}
