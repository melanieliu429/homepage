import './style.css';
import headerMe from "./img/headerMe.jpg";
import githubIcon from "./img/github.svg";
import linkedinIcon from "./img/linkedin.svg";
import twitterIcon from "./img/twitter.svg";
import openIcon from "./img/open.svg";
import phoneIcon from "./img/phone.svg";
import emailIcon from "./img/email.svg";
import footerMe from "./img/footerMe.jpg";

document.querySelectorAll('.headerMe').forEach(img => img.src = headerMe);
document.querySelectorAll('.github').forEach(img => img.src = githubIcon);
document.querySelectorAll('.linkedin').forEach(img => img.src = linkedinIcon);
document.querySelectorAll('.twitter').forEach(img => img.src = twitterIcon);
document.querySelectorAll('.open').forEach(img => img.src = openIcon);
document.querySelector('.footerMe').src = footerMe;

document.querySelector('.phone').src = phoneIcon;
document.querySelector('.email').src = emailIcon;

