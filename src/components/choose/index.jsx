import { useState } from 'react';

import SpecificationCards from './specification-cards';

import dataBase from '../../assets/db/choose-db.json';
import SpecificationMenu from './specification-menu';

function Choose() {

    const [menuListState, setMenuListState] = useState(0);

    if (menuListState > 2) {
        setMenuListState(0)
    } else if (menuListState < 0) {
        setMenuListState(2)
    }

    return (
        <section className="choose">
            <div className="container">
                <div className="choose__inner">
                    <h2 className="choose__title">Выберите свой отдых</h2>

                    <form className="choose__form" name="choose__form" action="#">
                        <select className="choose__form-input choose__form-select" name="" id="">
                            <option className="choose__form-option" value="Family vacation">Семейный отдых</option>
                        </select>

                        <div className="choose__form-input">
                            <p className="choose__form-text">
                                пт, 8 мая — вс, 17 мая
                            </p>
                        </div>

                        <div className="choose__form-input">
                            <p className="choose__form-text">
                                2 взрослых  •  без детей  •  1 номер
                            </p>
                        </div>

                        <button className="choose__form-button" type="submit">Найти</button>
                    </form>

                    <div className="specification">
                        <div className="specification__categories">
                            <SpecificationMenu onClick={(index) => setMenuListState(index)} menuListState={menuListState} items={['Спецпредложения', 'Афиша', 'Категории отдыха']} />

                            <div className="specification__buttons">
                                <button className="specification__button specification__button_left_arrow" onClick={() => setMenuListState(menuListState - 1)}></button>
                                <button className="specification__button specification__button_right_arrow" onClick={() => setMenuListState(menuListState + 1)}></button>
                            </div>
                        </div>

                        <div className="specification__content">
                            <div className="specification__wrapper">
                                {dataBase.cards.map((card, index) => (
                                    menuListState !== card.category ? '' : <SpecificationCards key={`${card}_${index}`} imagePath={card.image} discount={card.discount} text={card.text} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Choose;
