import { useState, useEffect } from 'react';

import SliderTrigger from '../slider-trigger';

function ModalSlider() {

    const [sliderIndex, setSliderIndex] = useState(1);

    if (sliderIndex > 3) {
        setSliderIndex(1);
    } else if (sliderIndex < 1) {
        setSliderIndex(3);
    }

    useEffect(() => {
        let sliderTimer = setInterval(() => {
            setSliderIndex((sliderIndex) => sliderIndex + 1);
        }, 3 * 1000);
        return () => clearInterval(sliderTimer);
    }, []);

    return (
        <div className="modal-menu__slider">
            <div className="modal-menu__slide">
                <img className="modal-menu__slide-image" src={`./header-slider/${sliderIndex}.jpg`} alt="#" />

                <div className="modal-menu__slide-info">
                    <h2 className="modal-menu__slide-title">Антистресс</h2>

                    <p className="modal-menu__slide-text">
                        10-21 дня
                    </p>

                    <button className="modal-menu__slide-button">Подробнее</button>
                </div>
            </div>

            <div className="modal-menu__slider-triggers">
                <SliderTrigger sliderIndex={sliderIndex} onClick={(index) => {
                    setSliderIndex(index);
                }} items={["1", "2", "3"]} />
            </div>
        </div>
    )
}

export default ModalSlider;
