import { IsString, IsEmail } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;
}
