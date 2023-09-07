import React from 'react';
import sim from '../../images/sim.svg';
import addr from '../../images/addr.svg';
import clock from '../../images/clock.svg';
import setting from '../../images/setting.svg';
import ip from '../../images/ip.svg';
import geo from '../../images/geo.svg';
import fingerprint from '../../images/fingerprint.svg';
import './adw.css';

function Adw() {
  return ( 
    <>
      <h2 className='adw__title'>Преимущества <span>D</span>PROXY</h2>
      <div className='adw__items'>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={sim} alt='sim' />
          </div>
          <text>Настоящие SIM-карты</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={clock} alt='clock' />
          </div>
          <text>Стабильность и скорость</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={ip} alt='ip' />
          </div>
          <text>Неограниченный трафик</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={addr} alt='addr' />
          </div>
          <text>Собственное оборудование</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={sim} alt='sim' />
          </div>
          <text>Настоящие SIM-карты</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={setting} alt='setting' />
          </div>
          <text>Смена IP адреса по ссылке</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={geo} alt='geo' />
          </div>
          <text>Смена IP авто от 1 до 999 минут</text>
        </div>
        <div className='adw__item'>
          <div className='adw__item-img'>
            <img src={fingerprint} alt='fingerprint' />
          </div>
          <text>3 вида OS fingerprint (не подмена)</text>
        </div>
      </div>    
      <button className='adw__btn'>
        <text>Написать в Telegram</text>
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
    </>
  );
}

export default Adw;