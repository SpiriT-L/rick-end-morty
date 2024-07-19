import './App.scss';
import Filters from './components/Filters/Filters';

function App() {
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
            <div className='card'>Card</div>
            <div className='card'>Card</div>
            <div className='card'>Card</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
