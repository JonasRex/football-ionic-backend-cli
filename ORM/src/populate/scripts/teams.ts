import { EntityManager } from 'typeorm';
import { Team } from '../../entity/Team';
import { Player } from '../../entity/Player';
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

  const player1 = new Player();
  player1.first_name = 'Pierre-Emerick';
  player1.last_name = 'Aubameyang';
  player1.age = 31;
  player1.nationality = 'Gabon';
  player1.team = team1;

  await manager.save(player1);

  const player2 = new Player();
  player2.first_name = 'Mikkel';
  player2.last_name = 'Damsgaard';
  player2.age = 21;
  player2.nationality = 'Denmark';
  player2.team = team1;

  await manager.save(player2);

  const player3 = new Player();
  player3.first_name = 'Yussuf';
  player3.last_name = 'Poulsen';
  player3.age = 29;
  player3.nationality = 'Denmark';
  player3.team = team1;

  await manager.save(player3);

  const player4 = new Player();
  player4.first_name = 'Martin';
  player4.last_name = 'Dalsgaard';
  player4.age = 28;
  player4.nationality = 'Denmark';
  player4.team = team2;

  await manager.save(player4);

  const player5 = new Player();
  player5.first_name = 'Jens';
  player5.last_name = 'Stryger';
  player5.age = 22;
  player5.nationality = 'Denmark';
  player5.team = team2;

  await manager.save(player5);

  const player6 = new Player();
  player6.first_name = 'Nicolai';
  player6.last_name = 'Jørgensen';
  player6.age = 30;
  player6.nationality = 'Denmark';
  player6.team = team2;

  await manager.save(player6);
};
