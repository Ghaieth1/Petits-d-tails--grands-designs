import data from './data/data.json';
import Card from './components/Card';

function App() {
  return (
    <div>
      {data.cards.map((card, i) => (
        <Card key={i} img={card.image} title={card.title} />
      ))}
    </div>
  );
}

export default App;
