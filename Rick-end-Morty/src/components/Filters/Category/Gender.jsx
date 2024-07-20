import { useState } from 'react';
import FilterBtn from '../FilterBtn';
import './Accordion.scss';

const Gender = ({ setPageNumber, setGender }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

  return (
    <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
      <h3 className='accordion-header'>
        <button
          className={`accordion-button ${isExpanded ? '' : 'collapsed'}`}
          type='button'
          onClick={handleButtonClick}
          aria-expanded={isExpanded}
          aria-controls='flush-collapseOne'
        >
          Gender
        </button>
      </h3>
      <div
        id='flush-collapseOne'
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        data-bs-parent='#accordionFlushExample'
      >
        <div className='accordion-body'>
          {genders.map((items, index) => (
            <FilterBtn
              task={setGender}
              setPageNumber={setPageNumber}
              key={index}
              name='genders'
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
