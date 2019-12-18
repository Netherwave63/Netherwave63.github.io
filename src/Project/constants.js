import JotterTodos_1 from './jotter-todos-1.png';
import JotterTodos_2 from './jotter-todos-2.png';
import JotterAuth_1 from './jotter-auth-1.png';
import JotterAuth_2 from './jotter-auth-2.png';
import JotterAuth_3 from './jotter-auth-3.png';
import HackerNews_1 from './hacker-news-1.png';
import HackerNews_2 from './hacker-news-2.png';

export const projects = [
  {
    id: '0',
    imgSrc1: JotterTodos_1,
    imgSrc2: JotterTodos_2,
    title: "Jotter Todos Web App",
    description: "The classic To-Do application where a user can write down all the things he wants to accomplish.",
    link: "https://cryptic-bastion-87336.herokuapp.com",
    features: [
      "Basic CRUD operations where user can create, view, edit or delete todo",
	    "Can mark / unmark a todo as completed",
	    "User can toggle the lists with all the completed / active todo",
      "User can sort the lists by alphablet, date, completed or reverse",
	    "Use localStorage to retrieve user's data",
	    "Details like store creation date, user can add more note and set due date",
	    "UI components with hamburger navbar, display lists, modal",
	    "State management using Redux"
      ]
  },
  {
    id: '1',
    imgSrc1: JotterAuth_1,
    imgSrc2: JotterAuth_2,
    imgSrc3: JotterAuth_3,
    title: "Jotter Auth Web App",
    description: "Simple user authentication for web apps where user can sign up / log in and get access to the data from database.",
    link: "https://jotter-dcea2.firebaseapp.com",
    features: [
      "Simple todo App Using Google Firebase as a cloud backend",
	    "User can login / sign up with email and password account",
      "Integrate with social media apis to login / sign up",
      "Email verification, password forgot help",
	    "Use cloud database to store and retrieve user's data",
	    "Single page application with routing"
    ]
  },
  {
    id: '2',
    imgSrc1: HackerNews_1,
    imgSrc2: HackerNews_2,
    title: "Hacker News Web App",
    description: "A hacker news search app using react, redux and redux-saga.",
    link: "http://protected-citadel-85961.herokuapp.com/",
    features: [
      "Use react, redux and redux saga that quires the Hackernews API",
	    "Display an infinite scroll list for fetching more stories from the API",
	    "Client side cache for search history",
	    "Error handling",
	    "Axios instead of fetch API (polyfill for older browser)"
    ]
  }
];