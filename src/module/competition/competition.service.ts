import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CompetitionDTO } from './competition.dto';

@Injectable()
export class CompetitionService {
  constructor(private prisma: PrismaService) {}

  async create(data: CompetitionDTO) {
    const competitionExists = await this.prisma.competition.findFirst({
      where: {
        competition_name: data.competition_name,
      },
    });

    if (competitionExists) {
      throw new Error('Competition already exists');
    }

    const competition = await this.prisma.competition.create({
      data,
    });

    return competition;
  }

  async findAll() {
    return this.prisma.competition.findMany();
  }

  async update(competition_id: number, data: CompetitionDTO) {
    // const id = parseInt(competition_id)

    const competitionExists = await this.prisma.competition.findUnique({
      where: {
        competition_id,
      },
    });

    if (!competitionExists) {
      throw new Error('Competition not found');
    }

    await this.prisma.competition.update({
      data,
      where: {
        competition_id,
      },
    });
  }

  async delete(competition_id: number) {
    const competitionExists = await this.prisma.competition.findUnique({
      where: {
        competition_id,
      },
    });

    if (!competitionExists) {
      throw new Error('Competition not found');
    }

    return this.prisma.competition.delete({
      where: {
        competition_id,
      },
    });
  }
}
