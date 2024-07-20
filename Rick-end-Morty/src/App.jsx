import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);
  const [fetchData, updateFetchedData] = useState([]);
  const { info, results } = fetchData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
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
      <section className='section'>
        <div className='container'>
          <div className='filter'>
            <Filters />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='cards'>
            <Cards results={results} />
          </div>
          <div className='pagination'>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
