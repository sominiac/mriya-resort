import React from 'react';
import classNames from 'classnames';

function SliderTrigger({ items, sliderIndex, onClick }) {
    return (
        <React.Fragment>
            {items.map(item => (
                <button className={classNames("modal-menu__slider-trigger", {
                    "modal-menu__slider-trigger_select": sliderIndex === +item,
                })} onClick={() => onClick(+item)} key={item}></button>
            ))}
        </React.Fragment>
    )
}

export default SliderTrigger;
