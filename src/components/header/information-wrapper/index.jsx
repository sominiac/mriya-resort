import React from 'react';
import classNames from 'classnames';

function InformationWrapper({ items, text }) {
    return (
        <div className="modal-menu__information-wrapper">
            <ul className="menu modal-menu__information-menu">
                {items.map( (item, index) => (
                    <li className="modal-menu__list modal-menu__information-menu-list" key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>

            <p className="modal-menu__text">
                {text}
            </p>
        </div>
    )
}

export default InformationWrapper;
