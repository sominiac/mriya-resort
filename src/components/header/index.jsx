import { useState, useEffect, Fragment } from 'react';
import classNames from 'classnames';

import MainMenu from './main-menu';
import InformationWrapper from './information-wrapper';
import ModalSlider from './modal-slider';

import dataBase from '../../assets/db/header-db.json'; // имитация данных

function Header({ logoImage }) {

    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [menuState, setMenuState] = useState(false);
    const [menuMobileState, setMenuMobileState] = useState(false);
    const [menuListSelect, setMenuListSelect] = useState('medicine');

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.screen.width);
        })
        return () => window.removeEventListener('resize', () => {
            setScreenWidth(window.screen.width);
        });
    }, [])

    return (
        <Fragment>
            <header className="header">
                {screenWidth > 900 ? <button className="burger-menu" onClick={() => setMenuState(true)}></button> : <button className="burger-menu" onClick={() => setMenuMobileState(true)}></button>}

                <div className="container header__container">
                    <div className="header__inner">
                        <ul className="menu header__menu">
                            <li className="menu__list">
                                <a className="menu__link" href="#">О комплексе</a>
                            </li>

                            <li className="menu__list">
                                <a className="menu__link" href="#">Блог</a>
                            </li>

                            <li className="menu__list">
                                <a className="menu__link" href="#">FAQ</a>
                            </li>

                            <li className="menu__list">
                                <a className="menu__link" href="#">Контакты</a>
                            </li>
                        </ul>

                        <div className="logo header__logo">
                            <img className="logo__image" src={logoImage} alt="#" />
                        </div>

                        <div className="languages">
                            <button className="languages__button languages__button_active">ru</button>

                            <button className="languages__button">eng</button>
                        </div>

                        <ul className="menu header__menu">
                            <li className="menu__list menu__list_white menu__list_login">
                                <a className="menu__link menu__link_dashed" href="#">Вход</a>
                            </li>

                            <li className="menu__list menu__list_white">
                                <a className="menu__link" href="tel:8 800 500 6847">8 800 500 6847</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <button className="mobile-login"></button>
            </header>

            {menuState && <div className="modal-menu">
                <div className="modal-menu__window">
                    <header className="header modal-menu__header">
                        <div className="container">
                            <div className="header__inner">
                                <div className="logo modal-menu__logo">
                                    <img className="logo__image modal-menu__logo-image" src={logoImage} alt="#" />
                                </div>

                                <ul className="menu modal-menu__menu">
                                    <li className="menu__list menu__list_white modal-menu__menu-list">
                                        <a className="menu__link" href="#">О комплексе</a>
                                    </li>

                                    <li className="menu__list menu__list_white modal-menu__menu-list">
                                        <a className="menu__link" href="#">Блог</a>
                                    </li>

                                    <li className="menu__list menu__list_white modal-menu__menu-list">
                                        <a className="menu__link" href="#">FAQ</a>
                                    </li>

                                    <li className="menu__list menu__list_white modal-menu__menu-list">
                                        <a className="menu__link" href="#">Контакты</a>
                                    </li>

                                    <li className="menu__list menu__list_white menu__list_login modal-menu__menu-list">
                                        <a className="menu__link menu__link_dashed" href="#">Вход</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <div className="modal-menu__wrapper">
                        <div className="container">
                            <div className="modal-menu__inner">
                                <aside className="social">
                                    <span className="line social__line"></span>

                                    <ul className="menu social__menu">
                                        <li className="menu__list menu__list_circle social__menu-list">
                                            <a className="menu__link menu__link_facebook_colored social__menu-link" href="#"></a>
                                        </li>

                                        <li className="menu__list menu__list_circle social__menu-list">
                                            <a className="menu__link menu__link_twitter_colored social__menu-link" href="#"></a>
                                        </li>

                                        <li className="menu__list menu__list_circle social__menu-list">
                                            <a className="menu__link menu__link_instagram_colored social__menu-link" href="#"></a>
                                        </li>
                                    </ul>
                                </aside>

                                <main className="modal-menu__main">
                                    <MainMenu menuListSelect={menuListSelect} onClick={(type) => setMenuListSelect(type)} items={
                                        [
                                            ["Размещение", "placement"],
                                            ["Медицина", "medicine"],
                                            ["Мероприятия", "activity"],
                                            ["Красота и восстановление", "beauty"],
                                            ["Бары и рестораны", "bars"],
                                            ["Развлечения", "entertainment"],
                                            ["Спорт", "sport"],
                                            ["Детям", "children"],
                                            ["Транспорт", "transport"]
                                        ]
                                    } />

                                    <div className="modal-menu__information">
                                        {dataBase.items.map((item, index) => (
                                            menuListSelect !== item.category ? '' : <InformationWrapper key={`${item}_${index}`} items={item.links} text={item.info} />
                                        ))}
                                    </div>

                                    <ModalSlider />
                                </main>

                                <div className="modal-menu__mail">
                                    <a className="modal-menu__mail-link" href="mailto:info@mriyaresort.com">info@mriyaresort.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="modal-menu__button modal-menu__button-close" onClick={() => setMenuState(false)}></button>
                </div>
            </div>}

            {menuMobileState && <div className="modal-menu modal-menu_mobile">
                <div className="modal-menu__window">
                    <header className="header modal-menu__header">
                        <button className="modal-menu__button modal-menu__button-language">RU</button>

                        <div className="logo modal-menu__logo modal-menu__logo_mobile">
                            <img className="logo__image modal-menu__logo-image" src={logoImage} alt="#" />
                        </div>

                        <button className="modal-menu__button modal-menu__button-close modal-menu__button-close_mobile" onClick={() => setMenuMobileState(false)}></button>
                    </header>

                    <div className="modal-menu__wrapper">
                        <main className="modal-menu__main">
                            <MainMenu mobile db={dataBase} menuListSelect={menuListSelect} onClick={(type) => setMenuListSelect(type)} items={
                                [
                                    ["Размещение", "placement"],
                                    ["Медицина", "medicine"],
                                    ["Мероприятия", "activity"],
                                    ["Красота и восстановление", "beauty"],
                                    ["Бары и рестораны", "bars"],
                                    ["Развлечения", "entertainment"],
                                    ["Спорт", "sport"],
                                    ["Детям", "children"],
                                    ["Транспорт", "transport"]
                                ]
                            } />

                            <button className="modal-menu__wrapper-button">Найти номер</button>

                            <ul className="menu modal-menu__menu">
                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">О комплексе</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">Блог</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">FAQ</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">Афиша</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">Спецпредложения</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">Важная информация</a>
                                </li>

                                <li className="menu__list menu__list_white modal-menu__menu-list">
                                    <a className="menu__link" href="#">Контакты</a>
                                </li>
                            </ul>

                            <div className="social">
                                <ul className="menu social__menu">
                                    <li className="menu__list menu__list_circle social__menu-list">
                                        <a className="menu__link menu__link_facebook_colored social__menu-link" href="#"></a>
                                    </li>

                                    <li className="menu__list menu__list_circle social__menu-list">
                                        <a className="menu__link menu__link_twitter_colored social__menu-link" href="#"></a>
                                    </li>

                                    <li className="menu__list menu__list_circle social__menu-list">
                                        <a className="menu__link menu__link_instagram_colored social__menu-link" href="#"></a>
                                    </li>
                                </ul>
                            </div>

                            <p className="modal-menu__main-text">
                                8 800 500 6847
                            </p>
                        </main>

                        <div className="modal-menu__mail">
                            <a className="modal-menu__mail-link" href="mailto:info@mriyaresort.com">info@mriyaresort.com</a>
                        </div>
                    </div>
                </div>
            </div>}
        </Fragment>
    )
}

export default Header;
