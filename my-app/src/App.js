
import './App.css';
import Header from './components/header';
import Top from './components/top';
import Body from './components/body';
import Section from './components/section';
import Bootom from './components/bottom';
import Footer from './components/footer';
import React from 'react';



class App extends React.Component {
  render() {
    return<>
    <Header/>
    <Top/>
    <Body/>
    <Section/>
    <Bootom/>
    <Footer/>
    </>
  }
}

export default App;
