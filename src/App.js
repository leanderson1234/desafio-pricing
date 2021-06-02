import Pricing from './components/pricing';
import Card from './components/card';
import { useState } from 'react';
import Container from './components/container';
import BgTop from './components/bgtop';
import BgBottom from './components/bgbottom';

function App() {
  const [price, setPrice] = useState({ Basic: 199.99, Professional: 249.99, Master: 399.99 });
  const flats = [
    {
      flat: 'Basic',
      storage: '500 gb Storage',
      usersAllowed: '2 users Allowed',
      send: 'Send up to 3 GB',
    },
    {
      flat: 'Professional',
      storage: '1 TB Storage',
      usersAllowed: '5 users Allowed',
      send: 'Send up to 10 GB',
    },
    {
      flat: 'Master',
      storage: '2 TB Storage',
      usersAllowed: '10 users Allowed',
      send: 'Send up to 20 GB',
    },
  ];
  const TogglePrice = (valor) => {
    return setPrice(valor);
  };
  return (
    <div className="App">
      <Pricing togglePrice={TogglePrice} />
      <BgTop />
      <Container>
        {flats.map((el) => (
          <Card
            Price={price}
            flat={el.flat}
            storage={el.storage}
            usersAllowed={el.usersAllowed}
            send={el.send}
            key={el.flat}
          />
        ))}
      </Container>
      <BgBottom></BgBottom>
    </div>
  );
}

export default App;
