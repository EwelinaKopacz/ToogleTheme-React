import React from "react";
import { ModeSwitchWrapper, SwitchInput} from "./ModeSwitch.styled";


const ModeSwitch = ({onClick}) => {
    return (
        <ModeSwitchWrapper>
            <SwitchInput type='checkbox' onClick={onClick}/>
        </ModeSwitchWrapper>
    )
}

export default ModeSwitch;