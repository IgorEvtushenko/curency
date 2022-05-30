import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render(){
    return (
      <footer id='footer' className='footer'>
        <div className='flex-container'>
          <div className='flex-item'>
            <h1 className='footer-title'>
                <span>2013 &copy; React. Light level</span>
                <p>All right reserved</p>
            </h1>
          </div>
          <div className='flex-item'>
            <ul className='list-center'>
              <li><span tooltipe="Карта сайта">Карта сайта</span></li>
              <li>
                <span href='#' target="_blank" tooltipe="Google Sitymap">
                  Google Sitymap
                </span>
              </li>
            </ul>
          </div>
          <div className='flex-item'>
            <ul className='list-right'>
              <li><span tooltipe="Контакты">Контакты</span></li>
              <li><span>Гарантии</span></li>
              <li><span>о сервисе</span></li>
              <li><span>Условие возврата</span></li>
              <li><span>Соглашение о использовании сервиса</span></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;