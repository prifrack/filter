import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  create(@Body() createResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resultsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateResultDto) {
    return this.resultsService.update(id, updateResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resultsService.remove(id);
  }

  @Patch(':resultId/players/:playerId')
  addPlayer(@Param('resultId') resultId: number, @Param('playerId') playerId: number) {
    return this.resultsService.addPlayer(resultId, playerId);
  }
}