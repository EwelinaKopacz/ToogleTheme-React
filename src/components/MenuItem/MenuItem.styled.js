import styled from 'styled-components';

const ItemMenu = styled.li `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:15px 20px;
    cursor: pointer;

    :hover {
        background-color: ${(props)=>props.theme.itemBgHoverColor};
    }
`;

const ItemTitle = styled.p `
    font-size: 18px;
    color:${(props)=>props.theme.fontColor};
    letter-spacing: 1px;
`;

const ItemIcon = styled.span`
    font-size: 25px;
    color: ${(props)=>props.theme.fontColor};
`;


export { ItemMenu, ItemTitle, ItemIcon };