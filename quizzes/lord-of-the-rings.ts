import { Quiz } from '../interfaces'

export default {
  id: 'xDs188',
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  description:
    'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
  author: 'J.R.R. Tolkien',
  questions: [
    {
      id: 'kl2j3a',
      index: 0,
      question: 'What is the name of the ring?',
      type: 'multiple',
      answers: [
        {
          id: 'p765op',
          answer: 'The One Ring',
          correct: true,
        },
        {
          id: 'bvoi7p',
          answer: 'The Ring of Power',
          correct: false,
        },
        {
          id: '4j3k2l',
          answer: 'The Ring of Fire',
          correct: false,
        },
        {
          id: 'mkHfJH',
          answer: 'The Ring of Doom',
          correct: false,
        },
      ],
    },
    {
      id: 'qpg2j3',
      index: 1,
      question: 'What is the name of the wizard?',
      type: 'multiple',
      answers: [
        {
          id: 'nj1e2p',
          answer: 'Gandalf',
          correct: true,
        },
        {
          id: '0iorj4',
          answer: 'Saruman',
          correct: false,
        },
        {
          id: 'niocj4',
          answer: 'Radagast',
          correct: false,
        },
        {
          id: '44s3j4',
          answer: 'Gimli',
          correct: false,
        },
      ],
    },
  ],
} as Quiz
