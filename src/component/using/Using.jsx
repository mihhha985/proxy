import google from '../../images/google.png';
import arbitrazh from '../../images/arbitrazh.png';
import avito from '../../images/avito.png';
import likes from '../../images/likes.png';
import './Using.css';

function Using() {
  return ( 
    <>
      <h2 className='using__title'>Это лишь некоторые области<br />применения мобильных прокси</h2>

            <div className='using__wrapper'>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={arbitrazh} alt='arbitrazh' />
                </div>

                <text>Для арбитражников</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={avito} alt='avito' />
                </div>

                <text>Для Avito</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={google} alt='google' />
                </div>

                <text>Для Google</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={likes} alt='likes' />
                </div>

                <text>Для лайков</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={arbitrazh} alt='arbitrazh' />
                </div>

                <text>Для арбитражников</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={avito} alt='avito' />
                </div>

                <text>Для Avito</text>

              </div>

              <div className='using__item'>

                <div className='using__item__img'>
                  <img src={google} alt='google' />
                </div>

                <text>Для Google</text>

              </div>
          </div>
    </> 
  );
}

export default Using;