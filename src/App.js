import React, { Component } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import {Helmet} from "react-helmet";
import { theme1, theme2, Button, GlobalStyle } from "./theme/globalStyle";
import ThemeSelect from "./components/ThemeSelect";
import GlobalFonts from './fonts/fonts';
import Card from './components/Card'
// import DatePicker from './components/Date'

const logo =
  "https://user-images.githubusercontent.com/234708/37256552-32635a02-2554-11e8-8fe3-8ab5bd969d8e.png";

const AppWrapper = styled.div`
  text-align: center;
  padding-left:16px;
  padding-right:16px;
  margin-right: auto;
  margin-left: auto;
`;

const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

const AppTitle = styled.h1`
  font-weight: 900;
  font-family: 'Roboto';
`;

const rotate360 = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 2s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 0.5s linear;
  }
`;

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;

const EmojiWrapper = styled.span.attrs({
  role: "img"
})``;

const Underline = styled.span`
  border-bottom: 4px solid ${props => props.theme.secondary};
`;

const BigButt = styled(Button)`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;
const DateContainer = styled.div`
  display: flex;
  margin: 16px 0;
  padding: 0;

`

const DateText = styled.div`
    font-size:12px;
    font-weight:600;
    color: #424749;
    flex-direction:row;
`

const TabButtonRight =  styled(Button)`
    padding: 0;
    margin: 0;
    height: 2rem;
    font-size: 16px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    width: 50%;
    border-left-width: 0px;
    border-color: #f1f1f2;
    color: #e2e4e4;
`;


const TabButtonLeft =  styled(Button)`
    font-size: 16px;
    width: 50%;
    padding: 0px;
    height: 2rem;
    margin: 0;
    right: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-right-width: 0px;
}
`;

const TabBox = styled.div`

`

const TabHeader = styled.div`
  margin:4px
`

const TabBody = styled.div`

`


class App extends Component {
  state = {
    theme: theme1
  };
  handleThemeChange = e => {
    let theme = e.target.value;
    theme === "theme1" ? (theme = theme1) : (theme = theme2);
    this.setState({ theme });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalFonts />
        <GlobalStyle/>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Kulina Test</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossorigin="anonymous"
                />
        </Helmet>
        <AppWrapper>
          <TabBox>
            <TabHeader>
              <TabButtonLeft>Lunch</TabButtonLeft><TabButtonRight>Dinner</TabButtonRight>
            </TabHeader>
            <TabBody TabId ={1}>
              <DateContainer>
                  <DateText>Kamis, 25 januari 2020</DateText>
              </DateContainer>
              <Card
                RatingValue={4.5}
                onClick={""}
                productnName ={"Fresh Vegetable"}
                descProduct = {"by Kulina"}
                category = {'Uptown Lunch'}
                price = {"20.000"}
                image = {"assets/img/food1.jpg"}
              />
              <Card
                RatingValue={3.5}
                onClick={"/"}
                productnName ={"Healty food"}
                descProduct = {"by Kulina"}
                price = {"50.000"}
                image = {"assets/img/food2.jpg"}
                category = {'Uptown Lunch'}
              />
            </TabBody>
            <TabBody TabId ={2}>
              <DateContainer>
                  <DateText>Kamis, 25 januari 2020</DateText>
              </DateContainer>
              <Card
                RatingValue={4.5}
                onClick={""}
                productnName ={"Pizza yummy"}
                descProduct = {"by Kulina"}
                category = {'Uptown Dinner'}
                price = {"60.000"}
                image = {"assets/img/food3.jpg"}
              />
              <Card
                RatingValue={2.5}
                onClick={"/"}
                productnName ={"Healty Dinner"}
                descProduct = {"by Kulina"}
                price = {"45.000"}
                image = {"assets/img/food4.jpg"}
                category = {'Uptown Dinner'}
              />
            </TabBody>
          </TabBox>
       
          {/* <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            Bootstrapped with{" "}
            <Underline>
              <code>create-react-app</code>
            </Underline>.
          </AppIntro>
          <AppIntro>
            Components styled with{" "}
            <Underline>
              <code>styled-components</code>
            </Underline>{" "}
            <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
          </AppIntro>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
          <BigButt>Big Button</BigButt> */}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;