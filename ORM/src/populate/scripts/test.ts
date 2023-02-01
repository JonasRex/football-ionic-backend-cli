import { EntityManager } from 'typeorm';

import { Person } from '../../entity/test/Person';
import { Group } from '../../entity/test/Group';
import { GroupType } from '../../entity/test/GroupType';

import { PopulateScriptExecutor } from '../util/types';

export const execute: PopulateScriptExecutor = async (manager: EntityManager) => {
  const t1 = new GroupType();
  t1.name = 'Type 1';

  await manager.save(t1);

  const t2 = new GroupType();
  t2.name = 'Type 2';

  await manager.save(t2);

  const t3 = new GroupType();
  t3.name = 'Type 3';

  await manager.save(t3);

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
  g1.group_type_fk = t1;

  await manager.save(g1);

  const g2 = new Group();
  g2.something = 'Next best group ever';
  g2.leader = p3;
  g2.worker = p4;
  g2.group_type_fk = t2;

  await manager.save(g2);

  const g3 = new Group();
  g3.something = 'Mixed group';
  g3.leader = p1;
  g3.worker = p4;
  g3.group_type_fk = t3;

  await manager.save(g3);

  const g4 = new Group();
  g4.something = 'Mixed group 2';
  g4.leader = p2;
  g4.worker = p3;
  g4.group_type_fk = t3;

  await manager.save(g4);
};
