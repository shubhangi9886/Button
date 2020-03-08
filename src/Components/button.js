import React, { Component } from 'react';
import './button.css'

// class Button extends Component {
//         state={ }

//     hide_button() 
//     {
//         this.setState({
//             showMe:false
//         })
//     }
//     show_button() 
//     {
//         this.setState({
//             showMe:true
//         })
//     }

//     render() { 
//         return ( 
//             <div>
//             {
//                 this.state.showMe?
//                 <h1>Hello</h1> 
//                 :null  
//             } 
                   
//             <div>
//                 <button className="hide-button" onClick={() => this.hide_button()}>Hide</button>
//                 <button className="show-button" onClick={() => this.show_button()}>Show</button>
//             </div>
//             </div>
//         );
//     }
// }

class Button extends Component {
    state = {
      showMe: false
    };

    handleShow = () => {
      this.setState({showMe: true});
    };
  
    handleHide = () => {
      this.setState({showMe: false});
    };
  
    render() {
        return (
          <div>
            {this.state.showMe && <h1> Hello </h1>}
            <button className="hide-button" onClick={() => this.handleHide()}>Hide</button>
            <button className="show-button" onClick={() => this.handleShow()}>Show</button>
          </div>
        )
    }
  }
 
export default Button;

// class Button extends Component {
//   state = {
//     msg:""
//   };

//   handleShow = () => {
//     this.setState({msg:"Hello"})
//   };

//   handleHide = () => {
//     this.setState({msg:""});
//   };

//   render() {
//       return (
//         <div>
//           <h1>{this.state.msg}</h1>
//           <button className="hide-button" onClick={() => this.handleHide()}>Hide</button>
//           <button className="show-button" onClick={() => this.handleShow()}>Show</button>
//         </div>
//       )
//   }
// }

// export default Button;

