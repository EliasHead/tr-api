import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { CompetitionModule } from './module/competition/competition.module';
import { MatchesModule } from './module/matches/matches.module';
import { TeamsModule } from './module/teams/teams.module';

@Module({
  imports: [CompetitionModule, TeamsModule, MatchesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
