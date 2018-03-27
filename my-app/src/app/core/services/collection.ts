import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
   {
     id: 'a1',
     name: 'Jean-Pierre',
     reference: '12345',
     state: State.ALIVRER
   },
   {
    id: 'a2',
    name: 'Camille',
    reference: '88888',
    state: State.ENCOURS
  },
  {
    id: 'a3',
    name: 'Lee',
    reference: '32165',
    state: State.LIVREE
  },
  {
    id: 'a4',
    name: 'Steve',
    reference: '00007',
    state: State.ENCOURS
  },
];
