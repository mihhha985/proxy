import React from 'react';
import bandera from '../../images/bandera.png';
import sim from '../../images/vector_sim.png';
import sim1 from '../../images/vector_sim_1.png';
import sim2 from '../../images/vector_sim_2.png';
import telegram from '../../images/telegram.svg';
import './example.css';

function Example() {
  return (
    <div className='example__content'>
      <div className='example__content__title'>
        <h2>Покрытие <span>D</span>PROXY</h2>
        <h5>Более <span>10 000</span> IP адресов по Тайланду</h5>
      </div>
      <img src={bandera} alt='bandera' />
      <div className='example__content__title'>
        <h2>Мобильные операторы</h2>
        <p>В данный момент команда ProxyAPP работает<br />со следующими операторами сотовой связи</p>
      </div>
      <div className='example__content__sim'>
        <img src={sim} alt='sim' />
        <img src={sim1} alt='sim1' />
        <img src={sim2} alt='sim2' />
      </div>
      <divs className='example__content__btn'>
        <button className='buy'>Купить прокси</button>
        <button className='send'>
          <text>Написать разработчику</text>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="url(#paint0_linear_367_2594)">
            <path d="M19.4944 0.896432C16.6843 1.98725 4.63506 6.66497 1.30587 7.93988C-0.926842 8.7565 0.380215 9.52217 0.380215 9.52217C0.380215 9.52217 2.2861 10.1346 3.91998 10.5939C5.55363 11.0533 6.42493 10.543 6.42493 10.543L14.1033 5.69424C16.8261 3.9589 16.1727 5.38793 15.5191 6.00055C14.1033 7.32769 11.7616 9.42006 9.80117 11.1045C8.92987 11.819 9.36541 12.4314 9.74681 12.7377C11.1626 13.8606 15.0292 16.1574 15.2468 16.3105C16.3972 17.0738 18.6601 18.1725 19.0042 15.8511L20.3657 7.83799C20.8014 5.13299 21.237 2.63198 21.2913 1.91747C21.4548 0.18192 19.4944 0.896432 19.4944 0.896432Z"/>
            <defs>
              <linearGradient id="paint0_linear_367_2594" x1="-9.47591" y1="24.5645" x2="19.0425" y2="-9.49302" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0A6FCC"/>
                <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
      </divs>
    </div>
  );
}

export default Example;