import React from 'react';
import classNames from 'classnames';

import slideImage from '../../../assets/images/allinclusive-slide.jpg';
import slideImage2 from '../../../assets/images/allinclusive-slide2.jpg';
import slideImage3 from '../../../assets/images/allinclusive-slide3.jpg';

function AllInClusiveSlide({ items, slideIndex, mobileSlideImage }) {
    return (
        <React.Fragment>
            {items.map(slide => (
                slideIndex === +slide.id && <div className="allinclusive__slide" key={slide}>
                    <div className="allinclusive__slide-item">
                        <img className="allinclusive__item-image" src={slideImage} alt="#" />

                        <p className="allinclusive__item-text">
                            Заниматесь в тренажерном зале и посещайте групповые тренировки
                        </p>

                        <a className="allinclusive__item-link" href="#">Читать больше</a>
                    </div>

                    <div className="allinclusive__slide-wrapper">
                        <p className="allinclusive__slide-wrapper-subtitle">
                            Оздоровление
                        </p>

                        <p className="allinclusive__slide-wrapper-title">
                            Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе
                            занятие по вкусу
                        </p>

                        <div className="allinclusive__slide-item">
                            <img className="allinclusive__item-image" src={slideImage2} alt="#" />

                            <p className="allinclusive__item-text">
                                Питаться в ресторане шведской линии согласно выбранному варианту
                            </p>

                            <a className="allinclusive__item-link" href="#">Читать больше</a>
                        </div>
                    </div>

                    {slide.imageNum > 2 && <div className="allinclusive__slide-item allinclusive__slide-item_colored">
                        <img className="allinclusive__item-image" src={slideImage3} alt="#" />
                        <img className="allinclusive__item-image_mobile" src={mobileSlideImage} alt="#" />

                        <p className="allinclusive__item-text">
                            Исследовать все общедоступные зоны и территории комплекса
                        </p>

                        <a className="allinclusive__item-link" href="#">Читать больше</a>
                    </div>}
                </div>
            ))}
        </React.Fragment>
    )
}

export default AllInClusiveSlide;
