import { useState } from 'react';

import AllinclusiveSlide from './allinclusive-slide';

function Allinclusive({ mobileSlideImage }) {

    const [slideIndex, setSlideIndex] = useState(1);

    if(slideIndex > 2) {
        setSlideIndex(1);
    } else if(slideIndex < 1) {
        setSlideIndex(2);
    }

    return (
        <section className="allinclusive">
            <div className="container">
                <div className="allinclusive__inner">
                    <div className="allinclusive__wrapper">
                        <h2 className="allinclusive__title">Все включено</h2>

                        <div className="allinclusive__triggers">
                            <button className="allinclusive__button allinclusive__button_left" onClick={() => setSlideIndex(slideIndex - 1)}></button>

                            <button className="allinclusive__button allinclusive__button_right" onClick={() => setSlideIndex(slideIndex + 1)}></button>
                        </div>
                    </div>

                    <div className="allinclusive__slider">
                        <AllinclusiveSlide mobileSlideImage={mobileSlideImage} slideIndex={slideIndex} items={
                            [
                                {
                                    "id": 1,
                                    "imageNum": "3"
                                },
                                {
                                    "id": 2,
                                    "imageNum": "2"
                                }
                            ]
                        } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Allinclusive;
