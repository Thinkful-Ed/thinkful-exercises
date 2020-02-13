import { Catalog, pageLoader } from "catalog";

export default [
  ['/assesment-prep', 'Overview', pageLoader(() => import('./../javascript/assesment-prep/index.md'))],
  ['/assesment-prep/exercise-1', 'Exercise 1', pageLoader(() => import('./../javascript/assesment-prep/question-001.md'))],
  ['/assesment-prep/exercise-2', 'Exercise 2', pageLoader(() => import('./../javascript/assesment-prep/question-002.md'))],
  ['/assesment-prep/exercise-3', 'Exercise 3', pageLoader(() => import('./../javascript/assesment-prep/question-003.md'))],
  ['/assesment-prep/exercise-4', 'Exercise 4', pageLoader(() => import('./../javascript/assesment-prep/question-004.md'))],
  ['/assesment-prep/exercise-5', 'Exercise 5', pageLoader(() => import('./../javascript/assesment-prep/question-005.md'))],

]