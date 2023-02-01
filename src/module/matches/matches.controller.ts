import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchesPipe } from './common/pipe/matches/matches.pipe';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  create(@Body(MatchesPipe) createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }

  @Get()
  findAll() {
    return this.matchesService.findAll();
  }

  @Get(':match_id')
  findOne(@Param('match_id') match_id: string) {
    return this.matchesService.findOne(+match_id);
  }

  @Put(':match_id')
  update(@Param('match_id') match_id: string, @Body() data: UpdateMatchDto) {
    return this.matchesService.update(+match_id, data);
  }

  @Delete(':match_id')
  remove(@Param('match_id') match_id: string) {
    return this.matchesService.remove(+match_id);
  }
}
