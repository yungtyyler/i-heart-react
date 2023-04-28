import Header from './components/Header'
import HeartsList from './components/HeartsList';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HeartsList />  
      </>
    );
  }
}

export default App;