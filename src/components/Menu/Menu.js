import React, { useState } from "react";
import { MenuWrapper, MenuListWrapper } from './Menu.styled.js';
import NavButton from '../NavButton/NavButton.js';
import MenuItem from "../MenuItem/MenuItem";
import menuDB from '../../db/menuDB';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MenuWrapper>
            <NavButton
                onClick={handleClick}
                title="Menu"
                icon="menu"
                className="material-symbols-outlined"
            />
            {isOpen && (
                <MenuListWrapper>
                    {menuDB.map(item => <MenuItem item={item} key={item.id} className="material-symbols-outlined" />)}
                </MenuListWrapper>
            )}
        </MenuWrapper>
    )
}

export default Menu;