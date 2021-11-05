import React from 'react';
import classNames from 'classnames';

function SpecificationCards({ imagePath, discount, text }) {
    return (
        <div className={classNames("specification__item", {
            "specification__item_without_title": !discount,
        })}>
            <img className="specification__item-image" src={imagePath} alt="#" />

            <div className="specification__item-information">
                {discount && <h2 className="specification__item-discount">{discount}</h2>}

                <p className="specification__item-text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default SpecificationCards;
