import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { Player } from '../players/entities/player.entity';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsRepository: Repository<Tournament>,
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  create(tournamentData): Promise<Tournament> {
    const tournament = this.tournamentsRepository.create(tournamentData);
    return this.tournamentsRepository.save(tournament);
  }

  findAll(): Promise<Tournament[]> {
    return this.tournamentsRepository.find({ relations: ['players'] });
  }

  findOne(id: number): Promise<Tournament> {
    return this.tournamentsRepository.findOne(id, { relations: ['players'] });
  }

  async update(id: number, tournamentData): Promise<Tournament> {
    await this.tournamentsRepository.update(id, tournamentData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tournamentsRepository.delete(id);
  }

  async addPlayer(tournamentId: number, playerId: number): Promise<Tournament> {
    const tournament = await this.findOne(tournamentId);
    const player = await this.playersRepository.findOne(playerId);
    tournament.players.push(player);
    return this.tournamentsRepository.save(tournament);
  }
}
