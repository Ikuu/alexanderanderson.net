import App from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    // primary: "#2d2d2d",
    primary: "dodgerblue",
    secondary: "white"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
