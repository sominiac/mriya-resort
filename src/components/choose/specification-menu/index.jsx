import React from 'react'
import classNames from 'classnames';

function SpecificationMenu({ items, onClick, menuListState }) {
    return (
        <ul className="menu">
            {
                items.map((item, index) => (
                    <li className={classNames("menu__list specification__menu-list", {
                        "specification__menu-list_active": menuListState === index,
                    })} onClick={() => onClick(index)} key={`${index}_${item}`}>{item}</li>
                ))
            }
        </ul>
    )
}

export default SpecificationMenu;
