import styled, {keyframes} from 'styled-components';

const appear = keyframes`
    0% { opacity: 0; transform: translateY(-100vw); }
    25% { opacity: .25;transform: translateY(-50vw); }
    75% { opacity: .25; transform: translateY(-20vw); }
    100% { opacity: 1; transform: translateY(0); }

`;

const ModeWrapper = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid ${(props)=>props.theme.fontColor};
    animation:${appear} 1.5s;
`;

export default ModeWrapper;