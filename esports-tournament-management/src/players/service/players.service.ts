import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  // Crear un jugador
  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playersRepository.create(createPlayerDto);
    return await this.playersRepository.save(player);
  }

  // Obtener todos los jugadores
  async findAll(): Promise<Player[]> {
    return await this.playersRepository.find();
  }

  // Obtener un jugador por su ID
  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne(id);
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  // Actualizar un jugador por su ID
  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    await this.playersRepository.update(id, updatePlayerDto);
    return this.findOne(id);
  }

  // Eliminar un jugador por su ID
  async remove(id: number): Promise<void> {
    const result = await this.playersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
  }
}
