import './css/App.css'
import vk from './images/vk.svg'
import inst from './images/inst.svg'
import back from './images/background.png'

const App = ()=> {
  return(
    <div className="content">
      <header>
        <div className="header__contacts">
          <div className="header__contacts-num">8-911-113-93-95</div>
          <div className="header__contacts-time"><span>ПН-ВС</span><span>10:00-20:00</span></div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li><a href="#">Наши услуги</a></li>
            <li><a href="#">Цены</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Наши работы</a></li>
          </ul>
        </nav>
      </header>
      <section className="info">
        <div className="info__content">
          <h1 className="info__content-title">Замена и ремонт глушителей в Санкт-Петербурге</h1>
          <div className="info__content-wrapper">
            <a href="#" className="info__content-wrapper-link">Записаться</a>
            <p className="info__content-wrapper-text">Скидка при повторном посещении 10% на работы и запчасти</p>
          </div>
        </div>
        <div className="info__vertical">GLUSHAC</div>
      </section>
      <footer>
        <div className="footer__list">
          <ul className="footer__list-ul">
            <li>Гарантия от 1 года до 3 лет на все виды работ</li>
            <li>Бесплатная диагностика</li>
            <li>Современное оборудование</li>
          </ul>
        </div>
        <div className="footer__share">
          <ul className="footer__share-ul">
            <li><a href="https://vk.com/lihahasheshki" target="__blank"><img src={vk} alt="vk"/></a></li>
            <li><a href="https://instagram.com/li.merr/" target="__blank"><img src={inst} alt="instagram"/></a></li>
          </ul>
        </div>
      </footer>
      <img className="background" src={back} alt="background"/>
    </div>
  )
}

export default App;