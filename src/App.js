import React, { Component } from "react";
import { Row, Col, Modal, ModalBody, ModalFooter  } from 'reactstrap';
import styled, { keyframes, ThemeProvider } from "styled-components";
import {Helmet} from "react-helmet";
import { theme1, theme2, Button, GlobalStyle } from "./theme/globalStyle";
import ThemeSelect from "./components/ThemeSelect";
import GlobalFonts from './fonts/fonts';
import Card from './components/Card';
import Header from './layout/HeaderApp';
import ModalChart from './components/ModalCart'


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
    background:${
      props => !props.active ?
          `#424749` :
          "#fff"};
    border-color:${
      props => !props.active ?
          `#424749` :
          "#f1f1f2;"};
    &:hover {
      transform: translateY(1px);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
      background: #424749;
      border-color: #424749;
  }
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
    color: #f1f1f2;
    background:${
      props => props.active ?
          `#424749` :
          "#fff"};
    border-color:${
      props => props.active ?
          `#424749` :
          "#f1f1f2;"};
    &:hover {
      transform: translateY(1px);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
      background: #424749;
      border-color: #424749;
  }
 
`;

const TabBox = styled.div`

`

const TabHeader = styled.div`
  margin:4px
`

const TabBody = styled.div`


`

const AppHeaders = styled.div`

`
const ModalPlace = styled.div`

`

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabToggle:true,
      theme: theme1,
      stickyCart:false,
      modal:false
    };
    this.ohHandelTabAction = this.ohHandelTabAction.bind(this);
    this.onHandleCartClick = this.onHandleCartClick.bind(this)
    this.onHandleModalLocation = this.onHandleModalLocation.bind(this)

  }

  onHandleModalLocation(e){
    e.preventDefault()
    try {
        console.log("location clik ")
        this.setState({
          modal:!this.state.modal,
        })
    } catch (error) {
        
    }
}

  onHandleCartClick(e,url){
      e.preventDefault()
      try {
          console.log("CART clik ",url)
          this.setState({
            stickyCart:true,
          })
      } catch (error) {
          
      }
  }


  ohHandelTabAction(e,id){
    e.preventDefault();
    try {
      console.log("tab ", id);
      this.setState({
        tabToggle: id === 1 ? true : false,
      })
      
      console.log("tab ", this.state.tabToggle);

    } catch (error) {
      
    }
  }


  handleThemeChange = e => {
    let theme = e.target.value;
    theme === "theme1" ? (theme = theme1) : (theme = theme2);
    this.setState({ theme });
  };
  render() {
    const {tabToggle,stickyCart,modal} = this.state;
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
          <Header  locationAction={this.onHandleModalLocation}/>
          <TabBox>
            <TabHeader>
              <TabButtonLeft  active={tabToggle}  onClick={(e)=> this.ohHandelTabAction(e,1)}>Lunch</TabButtonLeft><TabButtonRight active={tabToggle} onClick={(e)=> this.ohHandelTabAction(e,2)}>Dinner</TabButtonRight>
            </TabHeader>
            <TabBody TabId ={1} style={tabToggle  ? {} : { display: "none"}}>
              <DateContainer>
                  <DateText>Kamis, 25 januari 2020</DateText>
              </DateContainer>
              <Row>
                <Col sm='12' md='6' xl='3' xs='12'  >
                    <Card
                    RatingValue={4.5}
                    onClick={""}
                    productnName ={"Fresh Vegetable"}
                    descProduct = {"by Kulina"}
                    category = {'Uptown Lunch'}
                    price = {"20.000"}
                    image = {"assets/img/food1.jpg"}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
                <Col sm='12' md='6' xl='3' xs='12'  >
                    <Card
                    RatingValue={3.5}
                    onClick={"/"}
                    productnName ={"Healty food"}
                    descProduct = {"by Kulina"}
                    price = {"50.000"}
                    image = {"assets/img/food2.jpg"}
                    category = {'Uptown Lunch'}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}

                  />
                </Col>
                 <Col sm='12' md='6' xl='3' xs='12'  >
                    <Card
                    RatingValue={4.5}
                    onClick={""}
                    productnName ={"Fresh Vegetable"}
                    descProduct = {"by Kulina"}
                    category = {'Uptown Lunch'}
                    price = {"20.000"}
                    image = {"assets/img/food1.jpg"}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
                <Col sm='12' md='6' xl='3' xs='12' >
                    <Card
                    RatingValue={3.5}
                    onClick={"/"}
                    productnName ={"Healty food"}
                    descProduct = {"by Kulina"}
                    price = {"50.000"}
                    image = {"assets/img/food2.jpg"}
                    category = {'Uptown Lunch'}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
              </Row>
            </TabBody>
            <TabBody TabId ={2} style={!tabToggle  ? {} : { display: "none"}}>
              <DateContainer>
                  <DateText>Kamis, 25 januari 2020</DateText>
              </DateContainer>
                <Row>
                <Col sm='12' md='6' xl='3' xs='12'  >
                  <Card
                    RatingValue={4.5}
                    onClick={""}
                    productnName ={"Pizza yummy"}
                    descProduct = {"by Kulina"}
                    category = {'Uptown Dinner'}
                    price = {"60.000"}
                    image = {"assets/img/food3.jpg"}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
                <Col sm='12' md='6' xl='3' xs='12'  >
                  <Card
                    RatingValue={2.5}
                    onClick={"/"}
                    productnName ={"Healty Dinner"}
                    descProduct = {"by Kulina"}
                    price = {"45.000"}
                    image = {"assets/img/food4.jpg"}
                    category = {'Uptown Dinner'}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
                <Col sm='12' md='6' xl='3' xs='12'  >
                  <Card
                    RatingValue={4.5}
                    onClick={""}
                    productnName ={"Pizza yummy"}
                    descProduct = {"by Kulina"}
                    category = {'Uptown Dinner'}
                    price = {"60.000"}
                    image = {"assets/img/food3.jpg"}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
                <Col sm='12' md='6' xl='3' xs='12'  >
                  <Card
                    RatingValue={2.5}
                    onClick={"/"}
                    productnName ={"Healty Dinner"}
                    descProduct = {"by Kulina"}
                    price = {"45.000"}
                    image = {"assets/img/food4.jpg"}
                    category = {'Uptown Dinner'}
                    childRef={ ref => (this.child = ref) }
                    cardAction = {this.onHandleCartClick}
                  />
                </Col>
              </Row>
            </TabBody>
          </TabBox>
          <ModalPlace style={stickyCart  ? {} : { display: "none"}}>
              <ModalChart/>
            </ModalPlace>
          <Modal isOpen={modal} toggle={this.onHandleModalLocation} >
            <ModalBody>
              modal
            </ModalBody>
          </Modal>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;