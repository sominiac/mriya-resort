import React from 'react';

import flowerImage from '../../assets/images/flower.png';
import mobileFlowerImage from '../../assets/images/mobile-flower.png';

function FirstFrame() {
    return (
        <section className="first-frame">
            <div className="container">
                <div className="first-frame__inner">
                    <div className="first-frame__info">
                        <h2 className="first-frame__heading">Family & Health Club</h2>

                        <h1 className="first-frame__title">Mriya<br />Resort</h1>

                        <p className="first-frame__text">
                            Российский курорт для всей семьи на берегу черного моря
                        </p>
                    </div>

                    <div className="first-frame__buttons">
                        <div className="first-frame__buttons-wrapper">
                            <button className="first-frame__button first-frame__button_colored">Найти номер</button>

                            <button className="first-frame__button">3D тур</button>
                        </div>

                        <span className="line first-frame__line"></span>

                        <button className="first-frame__button first-frame__button_arrow_down"></button>
                    </div>

                    <ul className="menu first-frame__menu">
                        <li className="menu__list menu__list_circle first-frame__menu-list">
                            <a className="menu__link menu__link_facebook first-frame__menu-link" href="#"></a>
                        </li>

                        <li className="menu__list menu__list_circle first-frame__menu-list">
                            <a className="menu__link menu__link_twitter first-frame__menu-link" href="#"></a>
                        </li>

                        <li className="menu__list menu__list_circle first-frame__menu-list">
                            <a className="menu__link menu__link_instagram first-frame__menu-link" href="#"></a>
                        </li>
                    </ul>

                    <div className="weather">
                        <div className="weather__inner">
                            <h2 className="weather__degrees">27°</h2>

                            <p className="weather__expect">
                                Облачно
                            </p>

                            <p className="weather__metadata">
                                Ялта, Россия
                            </p>
                        </div>
                    </div>

                    <img className="first-frame__image" src={flowerImage} alt="#" />
                    <img className="first-frame__image_mobile" src={mobileFlowerImage} alt="#" />
                </div>
            </div>
        </section>
    )
}

export default FirstFrame;
