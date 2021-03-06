import React from 'react';
import {NavLink} from 'react-router-dom';

function BurgerMenu({isOpen, closeHandler}) {
    return (
        <div className={`burger-menu ${isOpen ? 'burger-menu_is-open' : ''}`}>
            <button
                className="burger-menu__close-btn"
                onClick={closeHandler}
                type="button"
                tabIndex={0}
            />

            <div className="burger-menu__link-list">
                <NavLink
                    exact
                    to="/"
                    className="burger-menu__link"
                    activeClassName="burger-menu__link_is-active"
                >
                    Главная
                </NavLink>

                <NavLink
                    to="/movies"
                    className="burger-menu__link"
                    activeClassName="burger-menu__link_is-active"
                >
                    Фильмы
                </NavLink>

                <NavLink
                    to="/saved-movies"
                    className="burger-menu__link"
                    activeClassName="burger-menu__link_is-active"
                >
                    Сохранённые фильмы
                </NavLink>
            </div>

            <NavLink to="/profile" className="profile-btn">
                <div className="profile-btn__image"/>
            </NavLink>
        </div>
    );
}

export default BurgerMenu;