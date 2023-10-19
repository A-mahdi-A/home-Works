import React, { useState } from 'react';
import './style.css'
const CountryCuisine = ({ cuisine }) => {
  const [showCuisine, setShowCuisine] = useState(false);

  const handleClick = () => {
    setShowCuisine(!showCuisine);
  };

  return (
    <div>
      <button onClick={handleClick}>{cuisine.country}</button>
      {showCuisine && (
        <ul>
          {cuisine.dishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// --------------------------------------------------------------------------
const CountryCuisineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCuisines, setFilteredCuisines] = useState([]);

  const cuisines = [
    { country: 'Iran', dishes: ['قرمه سبزی', 'کباب گوشت', 'خورشت قیمه','آبگوشت','سالاد شیرازی','باقالی پلو','هویج پلو','رشته پلو','قلیه ماهی','شامی ایرانی','کباب کوبیده','سبزی پلو باماهی','جوجه کباب','قلیه میگو','استامبولی','میرزا قاسمی'] },
    { country: 'USA', dishes: ['اسلوپی جوز','تترازیتی بوقلمون', 'اسالاد میوه ای آمبروسیا','بیف خامه ای','کوردن بلوی مرغ'] },
    { country: 'Italy', dishes: ['پیتزا پپرونی', 'پاستا فتوچینی آلفردو', 'پاستا فارفاله','لازانیا','ریزوتو'] },
    { country: 'Spain', dishes: ['ملت اسپانیایی', 'تورتیلا اسپانیولا', 'پائیای والنسیایی', 'سوپ گازپاچو', 'مرغ اسپانیایی'] },
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredCuisines(
      cuisines.filter((cuisine) =>
        cuisine.country.toLowerCase().startsWith(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by country name..."
      />
      {filteredCuisines.map((cuisine, index) => (
        <CountryCuisine key={index} cuisine={cuisine} />
      ))}
    </div>
  );
};

export default CountryCuisineSearch;
