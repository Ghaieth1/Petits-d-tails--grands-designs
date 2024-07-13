import data from './data/data.json';
import Card from './components/Card';

function App() {
  return (
    <div className='flex gap-10 justify-center items-center mx-auto w-full h-screen'>
      {data.cards.map((card, i) => (
        <Card key={i} img={card.image} title={card.title} />
      ))}
    </div>
  );
}

export default App;
