import { data } from './data';
import Cards from './Cards';

function Portfolio() {
  console.log(data);
  return (
    <Cards data={data} />
  );
}

export default Portfolio;
