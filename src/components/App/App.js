import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from '../../styled/theme.js';
import Menu from "../Menu/Menu.js";
import Mode from "../Mode/Mode.js";
import AppWrapper from './App.styled';
import ResetStyle from '../../styled/Reset.styled.js';

const App =() => {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };

  return (
    <>
      <ResetStyle/>
      <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
      <AppWrapper>
        <Menu/>
        <Mode onClick={handleTheme}/>
      </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
