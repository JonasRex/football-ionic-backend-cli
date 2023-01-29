import { EntityManager } from 'typeorm';
import { Team } from '../../entity/Team';
import { PopulateScriptExecutor } from '../util/types';

export const execute: PopulateScriptExecutor = async (manager: EntityManager) => {
  const team1 = new Team();
  team1.name = 'Aab';
  team1.year_founded = 1987;

  await manager.save(team1);

  const team2 = new Team();
  team2.name = 'Brøndby';
  team2.year_founded = 1964;

  await manager.save(team2);

  const team3 = new Team();
  team3.name = 'FCK';
  team3.year_founded = 1992;

  await manager.save(team3);
};
