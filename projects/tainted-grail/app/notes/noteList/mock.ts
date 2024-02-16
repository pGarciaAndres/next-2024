import { Note } from './note/model'

export const mockNotes: Note[] = [
  {
    _id: '1',
    location: '119',
    text: 'Resolver misterio de la flota congelada en el tiempo (Anillo de Luna)',
    completed: false
  },
  {
    _id: '2',
    location: '117',
    text: 'Descubrir quien intentó arreglar el Menhir',
    completed: false
  },
  {
    _id: '3',
    location: '190',
    text: 'Realizar la tarea de Morgana',
    completed: true
  }
]
