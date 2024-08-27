import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [listData, setListData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCallAPIPokemon = () => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon').then((response) => {
      response.json().then((data) => {
        setTimeout(() => {
          setListData(data.results);
          setLoading(false);
        }, 2000);
      })
    });
  }

  useEffect(() => {
    handleCallAPIPokemon();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {loading && <p>Loading...</p>}
        {listData ? listData.map(item => {
          return <p>{item.name}</p>
        }) : <p>Chưa có dữ liệu</p>
        }
      </div>
    </>
  )
}

export default App
