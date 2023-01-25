import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TeamsDTO } from './teams.dto';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  async create(data: TeamsDTO) {
    const teamsExists = await this.prisma.teams.findFirst({
      where: {
        team_name: data.team_name,
      },
    });

    if (teamsExists) {
      throw new Error('Team already exists');
    }

    const team = await this.prisma.teams.create({
      data,
    });

    return team;
  }

  async findAll() {
    return this.prisma.teams.findMany();
  }

  async update(team_id: number, data: TeamsDTO) {
    // const id = parseInt(competition_id)

    const teamExists = await this.prisma.teams.findUnique({
      where: {
        team_id,
      },
    });

    if (!teamExists) {
      throw new Error('Team not found');
    }

    await this.prisma.teams.update({
      data,
      where: {
        team_id,
      },
    });
  }

  async delete(team_id: number) {
    const teamExists = await this.prisma.teams.findUnique({
      where: {
        team_id,
      },
    });

    if (!teamExists) {
      throw new Error('Team not found');
    }

    return this.prisma.teams.delete({
      where: {
        team_id,
      },
    });
  }
}
