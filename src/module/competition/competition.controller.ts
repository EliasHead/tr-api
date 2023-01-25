import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompetitionDTO } from './competition.dto';
import { CompetitionService } from './competition.service';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Post()
  async create(@Body() data: CompetitionDTO) {
    return this.competitionService.create(data);
  }

  @Get()
  async findAll() {
    return this.competitionService.findAll();
  }

  @Put(':competition_id')
  async update(
    @Param('competition_id') competition_id: string,
    @Body() data: CompetitionDTO,
  ) {
    this.competitionService.update(parseInt(competition_id), data);
  }

  @Delete(':competition_id')
  async delete(@Param('competition_id') competition_id: string) {
    this.competitionService.delete(parseInt(competition_id));
  }
}
