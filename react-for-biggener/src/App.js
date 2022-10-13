import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(() => event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) =>{
        setCoins(json);
        setLoading(false);
      });
  },[])
  return (
    <div>
      <h1>The Coins! ({coins.length}) </h1>
      {loading ? <strong>Loading...</strong> : null }
      {loading ? null : <h3>
        I Have 
        <input 
          placeholder="input your money"
          onChange={onChange}
          type="number"
          value={money}></input>$
      </h3>}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD / You Can Buy {money/coin.quotes.USD.price} Coins!
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;