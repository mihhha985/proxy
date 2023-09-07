import React from 'react';
import About from '../component/about/About';
import MainRevers from '../component/main-revers/MainRevers';
import Offer from '../component/offer/Offer';
import Using from '../component/using/Using';
import Adw from '../component/adw/adw';
import Working from '../component/working/working';
import Usingall from '../component/usingall/usingall';
import Faq from '../component/faq/faq';
import Example from '../component/example/example';
import Main from '../component/main/Main';

function MainPage() {
  return (
      <>
        <section className='main' id='main'>
          <div className="container">
            <Main />
          </div>
        </section>
        <section style={{background: '#F3F3F3'}} className='about' id='about'>
          <div className='main__waive'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 29">
              <path fill="#1F1D2B" fillOpacity="1" d="M1420 9.83229L1372.67 12.2903C1325.33 14.7484 1230.67 19.6644 1136 20.4838C1041.33 21.3031 946.667 18.0257 852 18.8451C757.333 19.6644 662.667 24.5805 568 27.0385C473.333 29.4965 378.667 29.4965 284 27.8578C189.333 26.2191 94.6667 22.9417 47.3334 21.303L0.000122886 19.6643L0.000124606 -1.62671e-07L47.3334 3.97533e-06C94.6668 8.11335e-06 189.333 1.63894e-05 284 2.46654e-05C378.667 3.29414e-05 473.333 4.12174e-05 568 4.94935e-05C662.667 5.77695e-05 757.333 6.60455e-05 852 7.43215e-05C946.667 8.25975e-05 1041.33 9.08736e-05 1136 9.91496e-05C1230.67 0.000107426 1325.33 0.000115702 1372.67 0.00011984L1420 0.000123978L1420 9.83229Z"/>
              <defs>
                <linearGradient id="paint0_linear_215_1327" x1="1420" y1="29" x2="1396.29" y2="-168.015" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F1D2B"/>
                <stop offset="1" stopColor="#1F1D2B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='container'>
            <About />
          </div>
          <div className='main__waive' style={{top:"4px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 29">
              <path fill="#1F1D2B" fillOpacity="1" d="M0 19.1677L47.3333 16.7097C94.6667 14.2516 189.333 9.33554 284 8.51619C378.667 7.69685 473.333 10.9742 568 10.1549C662.667 9.33554 757.333 4.41946 852 1.96142C946.667 -0.496625 1041.33 -0.496625 1136 1.14207C1230.67 2.78076 1325.33 6.05815 1372.67 7.69685L1420 9.33554V28.9999L1372.67 28.9999C1325.33 28.9999 1230.67 28.9999 1136 28.9999C1041.33 28.9999 946.667 28.9999 852 28.9999C757.333 28.9999 662.667 28.9999 568 28.9999C473.333 28.9999 378.667 28.9999 284 28.9999C189.333 28.9999 94.6667 28.9999 47.3333 28.9999L0 28.9999L0 19.1677Z"/>
              <defs>
                <linearGradient id="paint0_linear_215_1328" x1="0" y1="0" x2="23.7068" y2="197.015" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1F1D2B"/>
                  <stop offset="1" stopColor="#1F1D2B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
        <section className='offer' id='offer'>
          <div className='container'>
            <MainRevers />
            <Offer />
          </div>
        </section> 
        <section className='using' id='using' style={{background: '#F3F3F3'}}>
          <div className='container'>
            <Using />
          </div>
        </section>
        <section className='working' style={{padding:"4.38rem 0"}}>
          <div className='container'>
              <Working />
          </div>
        </section>
        <section className='adw' style={{padding:"4.38rem 0", position: "relative"}}>
          <div className='container'>
            <Adw />
          </div>
          <div className='adw__blur'></div>
          <div className='adw__blur'></div>
          <div className='adw__blur'></div>
        </section>
        <section className='usingall' style={{background:"#F3F3F3"}}>
          <div className='main__waive'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 29">
              <path fill="#1F1D2B" fillOpacity="1" d="M1420 9.83229L1372.67 12.2903C1325.33 14.7484 1230.67 19.6644 1136 20.4838C1041.33 21.3031 946.667 18.0257 852 18.8451C757.333 19.6644 662.667 24.5805 568 27.0385C473.333 29.4965 378.667 29.4965 284 27.8578C189.333 26.2191 94.6667 22.9417 47.3334 21.303L0.000122886 19.6643L0.000124606 -1.62671e-07L47.3334 3.97533e-06C94.6668 8.11335e-06 189.333 1.63894e-05 284 2.46654e-05C378.667 3.29414e-05 473.333 4.12174e-05 568 4.94935e-05C662.667 5.77695e-05 757.333 6.60455e-05 852 7.43215e-05C946.667 8.25975e-05 1041.33 9.08736e-05 1136 9.91496e-05C1230.67 0.000107426 1325.33 0.000115702 1372.67 0.00011984L1420 0.000123978L1420 9.83229Z"/>
              <defs>
                <linearGradient id="paint0_linear_215_1327" x1="1420" y1="29" x2="1396.29" y2="-168.015" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F1D2B"/>
                <stop offset="1" stopColor="#1F1D2B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='container' style={{padding:"6.25rem 0"}}>
            <Usingall />
          </div>
          <div className='main__waive' style={{top:"4px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 29">
              <path fill="#1F1D2B" fillOpacity="1" d="M0 19.1677L47.3333 16.7097C94.6667 14.2516 189.333 9.33554 284 8.51619C378.667 7.69685 473.333 10.9742 568 10.1549C662.667 9.33554 757.333 4.41946 852 1.96142C946.667 -0.496625 1041.33 -0.496625 1136 1.14207C1230.67 2.78076 1325.33 6.05815 1372.67 7.69685L1420 9.33554V28.9999L1372.67 28.9999C1325.33 28.9999 1230.67 28.9999 1136 28.9999C1041.33 28.9999 946.667 28.9999 852 28.9999C757.333 28.9999 662.667 28.9999 568 28.9999C473.333 28.9999 378.667 28.9999 284 28.9999C189.333 28.9999 94.6667 28.9999 47.3333 28.9999L0 28.9999L0 19.1677Z"/>
              <defs>
                <linearGradient id="paint0_linear_215_1328" x1="0" y1="0" x2="23.7068" y2="197.015" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1F1D2B"/>
                  <stop offset="1" stopColor="#1F1D2B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
        <section className='faq'>
          <Faq />
        </section>
        <section className='example' style={{background:"#F3F3F3"}}>
          <Example />
        </section>
      </>
  );
}

export default MainPage;