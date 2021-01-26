// client-side js, loaded by index.html
// run by the browser each time the page is loaded
import React from 'react';
import ReactDOM from 'reactDOM'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: '',
//     }
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleClick =(e)=> {
//     this.setState({
//       soundName: e.target.id
//     });
//     const id = e.target.innerText.trim();
//     const audio = this.refs[id];
//     audio.play();
//   }
//   handleKeyPress = (e) => {
//     if (e.key) {
//      const name = this.props.drumKit.find(el => el.key == e.key.toUpperCase()).name;
//     this.setState({
//       soundName: name
//     });
//     const audio = document.getElementById(e.key.toUpperCase());
//     audio ? audio.play():''; 
//     }
//   } 
//   handleChange = (e) => {
//     const volume = e.target.value/100;
//     document.querySelectorAll('audio').forEach(el => el.volume = volume);
//   }
  
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyPress);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyPress);
//   }

//   render() {
//     let drumPad = this.props.drumKit.map(item =>
//       <div className="drum-pad" onClick={this.handleClick} id={item.name}>
//         {item.key}
//         <audio className="clip" ref={item.key} id={item.key} src={item.src}></audio>
//       </div>);
                                         
//     return (
//       <div id="drum-machine">
//         <h1>Drum Machine 🥁</h1>
//         <div id="container">
//           <div id="content">
//             {drumPad}
//           </div>
//           <div id="display">
//             { this.state.soundName }
//             <div className="volume">
//               <label for="volume-range">Volume</label>
//               <input id="volume-range" type="range" min="0" max="100" class="volume" onChange={this.handleChange} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

const element = <h1>Hello, here comes the app</h1>;


