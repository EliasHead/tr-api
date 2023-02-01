import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MatchesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMatchDto) {
    console.log(data);

    return await this.prisma.matches.create({
      data: {
        round: data.round,
        competition: {
          connect: {
            competition_id: data.competition_id,
          },
        },
        home_team: {
          connect: {
            team_id: data.home_team_id,
          },
        },
        visitor_team: {
          connect: {
            team_id: data.visitor_team_id,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.matches.findMany();
  }

  async findOne(match_id: number) {
    return await this.prisma.matches.findUnique({
      where: {
        match_id,
      },
    });
  }

  async update(match_id: number, data: UpdateMatchDto) {
    const matchesExists = await this.prisma.matches.findUnique({
      where: {
        match_id,
      },
    });

    if (!matchesExists) {
      throw new Error('Team not found');
    }

    return await this.prisma.matches.update({
      where: {
        match_id,
      },
      data,
    });
  }

  async remove(match_id: number) {
    return await this.prisma.matches.delete({
      where: {
        match_id,
      },
    });
  }
}
