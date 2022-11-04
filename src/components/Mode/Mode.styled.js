import styled from 'styled-components';

const ModeWrapper = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid ${(props)=>props.theme.fontColor};
`;

export default ModeWrapper;