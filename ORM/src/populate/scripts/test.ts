import { EntityManager } from 'typeorm';

import { Person } from '../../entity/test/Person';
import { Group } from '../../entity/test/Group';

import { PopulateScriptExecutor } from '../util/types';

export const execute: PopulateScriptExecutor = async (manager: EntityManager) => {
  const p1 = new Person();
  p1.name = 'AA';

  await manager.save(p1);

  const p2 = new Person();
  p2.name = 'BB';

  await manager.save(p2);

  const p3 = new Person();
  p3.name = 'CC';

  await manager.save(p3);

  const p4 = new Person();
  p4.name = 'DD';

  await manager.save(p4);

  const g1 = new Group();
  g1.something = 'Best group ever';
  g1.leader = p1;
  g1.worker = p2;

  await manager.save(g1);

  const g2 = new Group();
  g2.something = 'Next best group ever';
  g2.leader = p3;
  g2.worker = p4;

  await manager.save(g2);

  const g3 = new Group();
  g3.something = 'Mixed group';
  g3.leader = p1;
  g3.worker = p4;

  await manager.save(g3);
};
