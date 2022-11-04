import React from 'react';
import { ItemMenu, ItemTitle, ItemIcon } from './MenuItem.styled.js';


const MenuItem = (props) => {
    const {item,className} = props;
    return (
        <ItemMenu>
           <ItemTitle>{item.name}</ItemTitle>
           <ItemIcon className={className}>{item.icon}</ItemIcon>
        </ItemMenu>
    )
}

export default MenuItem;