import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
     {
       path: "/beginner",
      title: 'JS Exercises',
      pages: [
        {
          path: '/',
          title: 'Get Started',
          content: pageLoader(() => import('./javascript/WELCOME.md')),
        },
        {
          path: '/exercise-1',
          title: 'Exercise 1',
          content: pageLoader(() => import('./javascript/question-001.md')),
        },
        {
          path: '/exercise-2',
          title: 'Exercise 2',
          content: pageLoader(() => import('./javascript/question-002.md')),
        },
        {
          path: '/exercise-3',
          title: 'Exercise 3',
          content: pageLoader(() => import('./javascript/question-003.md')),
        },
        {
          path: '/exercise-4',
          title: 'Exercise 4',
          content: pageLoader(() => import('./javascript/question-004.md')),
        },
        {
          path: '/exercise-5',
          title: 'Exercise 5',
          content: pageLoader(() => import('./javascript/question-005.md')),
        },{
          path: '/exercise-6',
          title: 'Exercise 6',
          content: pageLoader(() => import('./javascript/question-006.md')),
        },{
          path: '/exercise-7',
          title: 'Exercise 7',
          content: pageLoader(() => import('./javascript/question-007.md')),
        },{
          path: '/exercise-8',
          title: 'Exercise 8',
          content: pageLoader(() => import('./javascript/question-008.md')),
        },{
          path: '/exercise-9',
          title: 'Exercise 9',
          content: pageLoader(() => import('./javascript/question-009.md')),
        },{
          path: '/exercise-10',
          title: 'Exercise 10',
          content: pageLoader(() => import('./javascript/question-010.md')),
        }
      ]
    }

];

const configTheme = {
  textColor: "#211e1e",
  brandColor: "#211e1e",
  navBarTextColor: "#211e1e",
  sidebarColorText: "#211e1e",
  sidebarColorHeading: "#211e1e",
  pageHeadingBackground: "#000000",
  pageHeadingTextColor: "#fff",
};

ReactDOM.render(
  <Catalog title="Thinkful Exercises" theme={configTheme} pages={pages} />,
  document.getElementById("catalog")
);
