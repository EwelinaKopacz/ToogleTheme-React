import styled from 'styled-components';

const AppWrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 100vh;
    padding-top: 150px;
    background-color: ${(props)=>props.theme.bgColor};
    color: ${(props)=>props.theme.fontColor};
    font-size: 18px;
`;

export default AppWrapper;