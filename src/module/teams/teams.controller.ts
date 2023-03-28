import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TeamsDTO } from './teams.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() data: TeamsDTO) {
    return this.teamsService.create(data);
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 10) {
    return this.teamsService.findAll(page, pageSize);
  }

  @Put(':team_id')
  async update(@Param('team_id') team_id: number, @Body() data: TeamsDTO) {
    this.teamsService.update(+team_id, data);
  }

  @Delete(':team_id')
  async delete(@Param('team_id') team_id: string) {
    this.teamsService.delete(+team_id);
  }
}
