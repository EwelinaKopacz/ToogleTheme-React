import styled from 'styled-components';

const StyledButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:none;
    border:none;
    height: 60px;
    width: 200px;
    padding:15px 20px;
    cursor: pointer;
    border-bottom: 2px solid #302c32;
    position: relative;

    :hover {
        box-shadow: 1px 1px 10px 5px #302c32;
    }

    ::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3.5%;
        width: 100%;
        border-bottom: 2px solid #713E5A;
        transform-origin: 0% 0%;
        transform: scaleX(0);
        transition: 0.5s;
    }

    :hover::after {
        transform: scale(1);
    }
`;

const StyledTitle = styled.p`
    font-size: 18px;
    color:${(props)=>props.theme.fontColor};
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const StyledIcon = styled.span`
    font-size: 25px;
    color: ${(props)=>props.theme.fontColor};
`;


export { StyledButton, StyledTitle, StyledIcon };