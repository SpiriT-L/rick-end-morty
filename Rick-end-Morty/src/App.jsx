import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, updateFetchedData] = useState([]);
  const {info, results} =fetchData
  console.log(results);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data)
    })();
  }, [api]);

  return (
    <>
      <div>
        <div className='container'>
          <div className='title'>
            <h1 className='h1'>Rick & Morty</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <section className='section'>
          <div className='filter'>
            <Filters />
          </div>
        </section>
        <section className='section'>
          <div className='cards'>
            <Cards />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
