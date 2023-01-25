import { Prisma } from '@prisma/client';

export class Match implements Prisma.MatchesUncheckedCreateInput {
  match_id?: number;
  match_date?: string | Date;
  home_goals?: number;
  visitor_goals?: number;
  odd?: number;
  strategy?: string;
  result?: string;
  review?: string;
  stake?: number;
  round?: number;
  competition_id?: number;
  home_team_id: number;
  visitor_team_id: number;
}
