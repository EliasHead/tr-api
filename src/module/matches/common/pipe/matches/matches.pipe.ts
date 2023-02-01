import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MatchesPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      round: +value.round,
      competition_id: +value.competition_id,
      home_team_id: +value.home_team_id,
      visitor_team_id: +value.visitor_team_id,
    };
  }
}
