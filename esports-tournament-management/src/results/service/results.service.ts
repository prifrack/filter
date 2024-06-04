import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { Player } from '../players/entities/player.entity';
import { Result } from '../entities/results.entity';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsRepository: Repository<Tournament>,
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
    @InjectRepository(Result)
    private resultsRepository: Repository<Result>,
  ) {}

  create(resultsData): Promise<Result> {
    const Result = this.resultsRepository.create(resultData);
    return this.resultRepository.save(result);
  }

  findAll(): Promise<Result[]> {
    return this.resultsRepository.find({ relations: ['players, tournament'] });
  }

  findOne(id: number): Promise<Result> {
    return this.resultsRepository.findOne(id, { relations: ['players, tournament'] });
  }

  async update(id: number, resultData): Promise<Result> {
    await this.resultsRepository.update(id, resultData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.resultsRepository.delete(id);
  }

  async addPlayer(tournamentId: number, playerId: number): Promise<Tournament> {
    const tournament = await this.findOne(tournamentId);
    const player = await this.playersRepository.findOne(playerId);
    tournament.players.push(player);
    return this.resultsRepository.save(tournament);
  }
}

