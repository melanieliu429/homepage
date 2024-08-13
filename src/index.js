import './style.css';
import headerMe from "./img/headerMe.jpg";
import githubIcon from "./img/github.svg";
import linkedinIcon from "./img/linkedin.svg";
import twitterIcon from "./img/twitter.svg";
import openIcon from "./img/open.svg";
import phoneIcon from "./img/phone.svg";
import emailIcon from "./img/email.svg";
import footerMe from "./img/footerMe.jpg";

import cvApplication from "./img/cv-application.png";
import weatherApp from "./img/weather-app.png";
import toDoList from "./img/to-do-list.png";
import restaurantPage from "./img/restaurant-page.png";
import ticTacToe from "./img/tic-tac-toe.png";
import library from "./img/library.png";
import adminDashboard from "./img/admin-dashboard.png";
import signUpForm from "./img/sign-up-form.png";
import calculator from "./img/calculator.png";
import etchASketch from "./img/etch-a-sketch.png";
import rockPaperScissors from "./img/rock-paper-scissors.png";
import landingPage from "./img/landing-page.png";

document.querySelectorAll('.headerMe').forEach(img => img.src = headerMe);
document.querySelectorAll('.github').forEach(img => img.src = githubIcon);
document.querySelectorAll('.linkedin').forEach(img => img.src = linkedinIcon);
document.querySelectorAll('.twitter').forEach(img => img.src = twitterIcon);
document.querySelectorAll('.open').forEach(img => img.src = openIcon);
document.querySelector('.footerMe').src = footerMe;

document.querySelector('.phone').src = phoneIcon;
document.querySelector('.email').src = emailIcon;

document.querySelector('#cv-application').src = cvApplication;
document.querySelector('#weather-app').src = weatherApp;
document.querySelector('#to-do-list').src = toDoList;
document.querySelector('#restaurant-page').src = restaurantPage;
document.querySelector('#tic-tac-toe').src = ticTacToe;
document.querySelector('#library').src = library;
document.querySelector('#admin-dashboard').src = adminDashboard;
document.querySelector('#sign-up-form').src = signUpForm;
document.querySelector('#calculator').src = calculator;
document.querySelector('#etch-a-sketch').src = etchASketch;
document.querySelector('#rock-paper-scissors').src = rockPaperScissors;
document.querySelector('#landing-page').src = landingPage;