import React from 'react';
import classNames from 'classnames';

function MenuList({ items, onClick, menuListSelect, mobile, db }) {
    return (
        <ul className="modal-menu__main-menu">
            {
                items.map(([name, type], index) => (
                    <React.Fragment>
                        <li className={classNames("modal-menu__list modal-menu__main-menu-list", {
                            "modal-menu__main-menu-list_select": menuListSelect === type,
                        })} onClick={() => onClick(type)} key={`${name}_${type}`}>{name}</li>
                        {mobile && <div className={classNames("modal-menu__information-wrapper", {
                            'hidden': menuListSelect !== type,
                        })}>
                            {mobile && menuListSelect === type && db['items'][index] !== undefined && db['items'][index].links.map(link => (
                                <li className="modal-menu__list modal-menu__information-menu-list" key={`${type}_${index}`}>{link}</li>
                            ))}
                        </div>}
                    </React.Fragment>
                ))
            }
        </ul>
    )
}

export default MenuList;