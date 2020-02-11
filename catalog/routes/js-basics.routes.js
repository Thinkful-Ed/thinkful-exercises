import { Catalog, pageLoader } from "catalog";

export default [
  ['/basics', 'Overview', pageLoader(() => import('./../javascript/basics/index.md'))],
  ['/exercise-1', 'Exercise 1', pageLoader(() => import('./../javascript/basics/question-001.md'))],
  ['/exercise-2', 'Exercise 2', pageLoader(() => import('./../javascript/basics/question-002.md'))],
  ['/exercise-3', 'Exercise 3', pageLoader(() => import('./../javascript/basics/question-003.md'))],
  ['/exercise-4', 'Exercise 4', pageLoader(() => import('./../javascript/basics/question-004.md'))],
  ['/exercise-5', 'Exercise 5', pageLoader(() => import('./../javascript/basics/question-005.md'))],
  ['/exercise-6', 'Exercise 6', pageLoader(() => import('./../javascript/basics/question-006.md'))],
  ['/exercise-7', 'Exercise 7', pageLoader(() => import('./../javascript/basics/question-007.md'))],
  ['/exercise-8', 'Exercise 8', pageLoader(() => import('./../javascript/basics/question-008.md'))],
  ['/exercise-9', 'Exercise 9', pageLoader(() => import('./../javascript/basics/question-009.md'))],
  ['/exercise-10', 'Exercise 10', pageLoader(() => import('./../javascript/basics/question-010.md'))],
]