import { Catalog, pageLoader } from "catalog";

export default [
  ['/basics', 'Overview', pageLoader(() => import('./../javascript/basics/index.md'))],
  ['/basics/exercise-1', 'Exercise 1', pageLoader(() => import('./../javascript/basics/question-001.md'))],
  ['/basics/exercise-2', 'Exercise 2', pageLoader(() => import('./../javascript/basics/question-002.md'))],
  ['/basics/exercise-3', 'Exercise 3', pageLoader(() => import('./../javascript/basics/question-003.md'))],
  ['/basics/exercise-4', 'Exercise 4', pageLoader(() => import('./../javascript/basics/question-004.md'))],
  ['/basics/exercise-5', 'Exercise 5', pageLoader(() => import('./../javascript/basics/question-005.md'))],
  ['/basics/exercise-6', 'Exercise 6', pageLoader(() => import('./../javascript/basics/question-006.md'))],
  ['/basics/exercise-7', 'Exercise 7', pageLoader(() => import('./../javascript/basics/question-007.md'))],
  ['/basics/exercise-8', 'Exercise 8', pageLoader(() => import('./../javascript/basics/question-008.md'))],
  ['/basics/exercise-9', 'Exercise 9', pageLoader(() => import('./../javascript/basics/question-009.md'))],
  ['/basics/exercise-10', 'Exercise 10', pageLoader(() => import('./../javascript/basics/question-010.md'))],
]