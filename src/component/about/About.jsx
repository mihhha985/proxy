import check from '../../images/check.svg';
import './About.css';

function About() {
  return ( 
    <div className='about__content'>
        <h2 className='about__title'>Виды прокси</h2>
        <div className='about__items__box'>
          <div className='about__item'>
              <h4>Android</h4>
              <div className='border'></div>
              <ul className='list'>
                <li>
                  <img src={check} alt='check' />
                  <text>Выделенный канал</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Скорость до 15 Mb/s</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Авто смена IP</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Смена IP по ссылке</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Любой оператор</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>http/socks5</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Все операторы</text>
                </li>
              </ul>
              <div className='border'></div>
              <div className='title_list'>
                <h5>3 USDT/день</h5>
                <h5>10 USDT/неделя</h5>
                <h5>35 USDT/месяц</h5>
                <h5>95 USDT/3месяца</h5>
              </div>
              <div className='border'></div>
              <button>Протестировать</button>
          </div>
          <div className='about__item'>
              <h4>Универсальный</h4>
              <div className='border'></div>
              <ul className='list'>
                <li>
                  <img src={check} alt='check' />
                  <text>Выделенный канал</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Скорость до 15 Mb/s</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Авто смена IP</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Смена IP по ссылке</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Любой оператор</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>http/socks5</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Все операторы</text>
                </li>
              </ul>
              <div className='border'></div>
              <div className='title_list'>
                <h5>3 USDT/день</h5>
                <h5>10 USDT/неделя</h5>
                <h5>35 USDT/месяц</h5>
                <h5>95 USDT/3месяца</h5>
              </div>
              <div className='border'></div>
              <button>Протестировать</button>
              <div className='info'>Популярный выбор</div>
          </div> 
          <div className='about__item'>
              <h4>Windows</h4>
              <div className='border'></div>
              <ul className='list'>
                <li>
                  <img src={check} alt='check' />
                  <text>Выделенный канал</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Скорость до 15 Mb/s</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Авто смена IP</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Смена IP по ссылке</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Любой оператор</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>http/socks5</text>
                </li>
                <li>
                  <img src={check} alt='check' />
                  <text>Все операторы</text>
                </li>
              </ul>
              <div className='border'></div>
              <div className='title_list'>
                <h5>3 USDT/день</h5>
                <h5>10 USDT/неделя</h5>
                <h5>35 USDT/месяц</h5>
                <h5>95 USDT/3месяца</h5>
              </div>
              <div className='border'></div>
              <button>Протестировать</button>
          </div>  
        </div>
        <div className='about__text'>
          <p>Вам будет доступна смена IP по ссылке или по авто-интервалу от 1 до 999 минут</p>
          <div className='border'></div>
          <p>На всех тарифах стоит безлимитный интернет трафик и возможность смены вида прокси на любой другой в любой момент</p>
        </div>
    </div>
  );
}

export default About;