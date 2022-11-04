import styled from 'styled-components';

const MenuWrapper = styled.nav `
    display: flex;
    flex-direction: column;
`;

const MenuListWrapper = styled.ul `
    display: flex;
    flex-direction: column;
    background-color: ${(props)=>props.theme.listBgColor};;
`;


export { MenuWrapper, MenuListWrapper };