import auctioneer from './images/auctioneer-screenshot(2).jpg';
import holidaze from './images/holidaze-screenshot(2).jpg';
import ecommerce from './images/e-commerce-screenshot(2).jpg';
import devImg from './images/bjornarne2.png';

console.log(auctioneer);

export const data = [
  {
    title: 'Holidaze',
    description: 'Booking application',
    image: `${holidaze}`,
  },
  {
    title: 'The Cart & The Shop',
    description: 'E-commerce single page application',
    image: `${ecommerce}`,
  },
  {
    title: 'Auctioneer',
    description: 'Auction website',
    image: `${auctioneer}`,
  },
];

export const dev = {
  image: `${devImg}`,
};
