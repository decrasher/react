import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component {
  constructor(props){
    
  }
  render(){
    return (
      <div className="App">
         <Subject title="react" sub="hi"></Subject>
         <Subject title="react" sub="world wide web!"></Subject>
         <TOC></TOC>
         <Content title="HTML" desc="HTML is HyperText markup Language."></Content>
      </div>
    );
  }
}

export default App;
