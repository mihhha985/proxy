import React from 'react';
import warking1 from '../../images/warking_1.jpg';
import warking2 from '../../images/warking_2.jpg';
import './working.css';
function Working() {
  return ( 
    <>
      <h2 className='working__title'>С нами удобно работать</h2>
      <div className='working__items'>
      <div className='working__item'>
        <h2>Шаг 1</h2>
        <p>Преобрести прокси легко и удобно в нашем Телеграм-боте. Вам даже не нужно общаться с менеджерами</p>
        <p>Все данные о купленных прокси придут вам в Телеграм и на почту</p>
      </div>
      <div className='working__item'>
        <img src={warking1} alt='warking1' />
      </div>
      <div className='working__item'>
        <img src={warking2} alt='warking2' />
      </div>
      <div className='working__item'>
        <h2>Шаг 2</h2>
        <p>После покупки или взятие на тест Вам станет доступен  
        <span>личный кабинет</span>, так же удобно не выходя их телеграма.</p>
        <p>В нем вы сможете:</p>
        <ul>
          <li>Получить данные о прокси</li>
          <li>Перезагрузить устройство</li>
          <li>Сменить провайдера</li>
          <li>Установить интервал смены IP</li>
          <li>Продлить свои прокси</li>
        </ul>
      </div>
    </div>
    <button className='working__btn'>
      <text>Перейти к тарифам</text>
    </button>
    </>
  );
}

export default Working;