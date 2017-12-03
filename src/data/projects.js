import starlingDesktop from '../assets/starling/starling-desk-bg.png';
import starlingMobile from '../assets/starling/starling-developers-iphone.png';
import starlingLogo from '../assets/starling/starling-logo.png';

const projectsData = {
  data: [
    {
      desktop_image: starlingDesktop,
      mobile_image: starlingMobile,
      logo: starlingLogo,
      title: 'Starling Developers',
      date: '2016-17',
      project_url: 'https://developer.starlingbank.com/',
      background: 'The Starling Bank developer portal was built as a companion' +
      ' to Starling API, allowing developers to build apps on top of the platform.',
      role: 'Lead Javascript Developer and UX Designer',
      tech_stack: [ 'React.js', 'Redux', 'Webpack', 'Docker', 'NGINX', 'PostgreSQL', 'AWS', 'TeamCity']
    }
  ]
};

export { projectsData };
