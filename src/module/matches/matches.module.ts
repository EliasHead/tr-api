import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MatchesController],
  providers: [MatchesService, PrismaService],
})
export class MatchesModule {}
