import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Player } from '../../players/entities/player.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tournament)
  tournament: Tournament;

  @ManyToOne(() => Player)
  winner: Player;

  @ManyToOne(() => Player)
  loser: Player;

  @Column()
  winnerScore: number;

  @Column()
  loserScore: number;
}