export type Rating = 'unknown' | 'vague' | 'known'

export type Cardset = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export type Card = {
  id: number
  cardsetId: number
  question: string
  answer: string
  memo: string
  rating: Rating | null
}
