import { Dexie, type EntityTable } from 'dexie'
import type { Card, Cardset } from './types'

export const db = new Dexie('three-step-anki') as Dexie & {
  cardsets: EntityTable<Cardset, 'id'>
  cards: EntityTable<Card, 'id'>
}

db.version(1).stores({
  cardsets: '++id',
  cards: '++id, cardsetId',
})
