import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  create(@Body() createTournamentDto) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @Get()
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tournamentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTournamentDto) {
    return this.tournamentsService.update(id, updateTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tournamentsService.remove(id);
  }

  @Patch(':tournamentId/players/:playerId')
  addPlayer(@Param('tournamentId') tournamentId: number, @Param('playerId') playerId: number) {
    return this.tournamentsService.addPlayer(tournamentId, playerId);
  }
}

// players.controller.ts y results.controller.ts seguirán una estructura similar
