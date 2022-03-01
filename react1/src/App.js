import React,{Component} from 'react';
import './App.css';
import HelloWorld from'./componenet/Componenet1';
// function App() {
//   return (
//     <div className="App">
    
//     <HelloWorld countryname='Sai' gg='krishna'/>
//     <HelloWorld countryname='Sai' />
//     <HelloWorld countryname='Sai' />
//     </div>
//   );
// }

class App  extends Component{
  constructor(props){
    super(props)
  //  console.log(this.props)
  }
  render() {
   return (
        <div className="App">
        
        <HelloWorld />
       
        </div>
      );
}

}
export default App;
