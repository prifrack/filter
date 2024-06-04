import { IsString, IsEmail } from 'class-validator';

export class CreateResultDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;
}
