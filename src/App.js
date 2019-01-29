import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
    		<div style={ containerStyle }> 
    			<Navbar />
    			<Search />
    		</div>
    	</MuiThemeProvider>
    );
  }
}
const containerStyle = {
    width: '80%',
    margin: '0 auto',
}

export default App;
