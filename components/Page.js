import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";

const theme = {
  red: "#FF0000",
  black: "#393939",
  blue: "#3496D6",
  grey: "#3A3A3A",
  darkblue: "#262c4f",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1600px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const StyledPage = styled.div`
  background: linear-gradient(
    -169deg,
    rgb(248, 246, 243) 14%,
    rgb(255, 255, 255) 59%
  );
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  ${
    "" /* max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem; */
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }
  body{
    background-image: linear-gradient(-169deg, rgb(248, 246, 243) 14%, rgb(255, 255, 255) 59%);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyles />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
