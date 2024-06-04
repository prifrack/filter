import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: playersService) {}

  @Post()
  create(@Body() createPlayerDto) {
    return this.playersService.create(createplayersDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.playersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePlayerDto) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.playersService.remove(id);
  }

  @Patch(':playerId/players/:playerId')
  addPlayer(@Param('playerId') playerId: number, @Param('playerId') playerId: number) {
    return this.playersService.addPlayer(playerId, playerId);
  }
}