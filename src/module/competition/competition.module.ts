import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CompetitionController],
  providers: [CompetitionService, PrismaService],
})
export class CompetitionModule {}
