export interface Answer {
  id: string
  answer: string
  correct: boolean
}

export interface Question {
  id: string
  index: number
  question: string
  type: 'multiple' | 'boolean'
  answers: Answer[]
}

export interface Quiz {
  id: string
  title: string
  description: string
  author: string
  questions: Question[]
}
