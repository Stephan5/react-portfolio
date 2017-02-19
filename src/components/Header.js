import React, {Component} from 'react';
import {Menu, Icon, Image} from 'semantic-ui-react'
import FontAwesome from 'react-fontawesome'
import logo from "../assets/stephan5-logo.png"

// export default class Header extends Component {
//   render () {
//     return (
//       <nav className="navbar navbar-fixed-top navbar-inner header">
//
//         <div className="container">
//           <div className="navbar-brand">
//             <a href="#"> {personalInfo.name} </a>
//           </div>
//           <ul className="nav navbar-nav pull-right">
//             <li>
//               <a href={personalInfo.resume} className="nav-link" target="_blank" style={{lineHeight: 'normal'}}>
//                 <span>CV</span>
//               </a>
//             </li>
//             <li>
//               <a href={personalInfo.email} className="nav-link">
//                 <FontAwesome name="envelope"/>
//               </a>
//             </li>
//             <li>
//               <a href={personalInfo.github} className="nav-link" target="_blank">
//                 <FontAwesome name="github"/>
//
//               </a>
//             </li>
//             <li>
//               <a href={personalInfo.linkedIn} className="nav-link" target="_blank">
//                 <FontAwesome name="linkedin"/>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }


const onClick = (e, {name}) => {
  this.setState({activeItem: name});
};

export default class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {activeItem} = this.state;
    const {personalInfo} = this.props;

    return (
      <Menu>
        <Menu.Item header>
          <Image src={logo} width="40px" height="40px"/>
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={onClick}
        ><Icon name='rocket'/>Projects</Menu.Item>

        <Menu.Item
          name='technologies'
          active={activeItem === 'technologies'}
          onClick={onClick}
        ><Icon name='lab'/>Technologies</Menu.Item>

        <Menu.Item
          name='design'
          active={activeItem === 'design'}
          onClick={onClick}
        ><Icon name='eyedropper'/>Design</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            href={personalInfo.email}><Icon name='mail'/>Contact</Menu.Item>
          <Menu.Item
            href={personalInfo.github}><Icon name='github alternate'/>Github</Menu.Item>

          <Menu.Item
            href={personalInfo.linkedIn}><Icon name='linkedin'/>LinkedIn</Menu.Item>

          <Menu.Item
            href={personalInfo.cv}><Icon name='file text'/> CV </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}
