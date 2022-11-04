import React from "react";
import ModeWrapper from "./Mode.styled";
import { ReactComponent as MoonIcon } from "../../assets/moonIcon.svg";
import { ReactComponent as SunIcon } from "../../assets/sunIcon.svg";
import ModeSwitch from "../ModeSwitch/ModeSwitch";

const Mode = (props) => {
    const {onClick} = props;
    return (
        <ModeWrapper>
            <MoonIcon/>
            <ModeSwitch onClick={onClick}/>
            <SunIcon/>
        </ModeWrapper>
    )
}

export default Mode;