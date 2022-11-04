import styled from 'styled-components';

const ModeSwitchWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80px;
   height: 30px;
   border-radius: 25px;
   position: relative;
`;

const SwitchInput = styled.input`
   width: 100%;
   height: 30px;
   border-radius: 25px;
   appearance: none;
   background: ${(props)=>props.theme.itemBgHoverColor};
   outline: none;
   box-shadow: inset 0 0 5px rgba(0,0,0,.2);
   transition: all .3s ease;

   :checked {
    background: #7cc5e7;
   }

   ::before {
    content:"";
        position: absolute;
        top:0;
        left:0;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        background-color: ${(props)=>props.theme.bgColor};
        transform: scale(1.2);
        box-shadow: 0 1px 5px 1.5px ${(props)=>props.theme.fontColor};
        transition: .3s ease;
   }
   :checked::before{
        left:50px;
   }
`;


export { ModeSwitchWrapper, SwitchInput };