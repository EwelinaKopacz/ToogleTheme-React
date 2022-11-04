import React from 'react';
import { StyledButton, StyledTitle,StyledIcon} from './NavButton.styled';

const NavButton = (props) => {
    const {onClick, title, icon,className} = props;
    return (
        <StyledButton onClick={onClick}>
            <StyledTitle>{title}</StyledTitle>
            <StyledIcon className={className}>{icon}</StyledIcon>
        </StyledButton>
    )
}

export default NavButton;