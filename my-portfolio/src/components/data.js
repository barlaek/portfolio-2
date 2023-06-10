import auctioneer from './images/auctioneer-screenshot(2).jpg';
import holidaze from './images/holidaze-screenshot(2).jpg';
import ecommerce from './images/e-commerce-screenshot(2).jpg';
import devImg from './images/bjornarne2.png';

console.log(auctioneer);

export const data = [
  {
    title: 'Holidaze',
    description:
      'Holidaze is a booking application where users can register accounts as either guest or manager, and the managers can create, update, and delete venues they manage.',
    image: `${holidaze}`,
    url: 'https://celadon-torrone-f10bdf.netlify.app/',
    github: "https://github.com/barlaek/project-exam-2-holidaze",
    build: {
      JS: 'React',
      CSS: 'CSS',
    },
  },
  {
    title: 'The Cart & The Shop',
    description:
      'E-commerce single page application with full cart functionality.',
    image: `${ecommerce}`,
    url: 'https://gilded-treacle-5863c5.netlify.app/',
    github: "https://github.com/barlaek/js-frameworks-CA",
    build: {
      JS: 'React',
      CSS: 'CSS',
    },
  },
  {
    title: 'Auctioneer',
    description:
      'Auctioneer is an auction website where users can register an account, bid on, and create their own listings.',
    image: `${auctioneer}`,
    url: 'https://elegant-frangipane-898501.netlify.app/',
    github: "https://github.com/barlaek/semester-project-two",
    build: {
      JS: 'JavaScript',
      CSS: 'TailwindCSS',
    },
  },
];

export const dev = {
  image: `${devImg}`,
};
