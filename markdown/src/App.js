import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

// function App() {
//   return (
//     <div className="App">
//       yxu7txyucty
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      markdown:""
    })
  }
  handleChange(e){
    this.setState({
      markdown : e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <textarea onChange={this.handleChange.bind(this)}/>
        <ReactMarkdown className='Preview' children={this.state.markdown}/>
        </div>
    )
  }
}
export default App;
