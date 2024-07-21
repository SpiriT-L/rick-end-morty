import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [fetchData, updateFetchedData] = useState([]);
  const { info, results } = fetchData;
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <Navbar />
      
      <section className='section'>
        <div className='container'>
          <div className='filter'>
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />
            <Filters
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='cards'>
            <Cards results={results} />
          </div>
          <div className='pagination'>
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
