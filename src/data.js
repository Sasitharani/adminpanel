// src/data.js
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    name: 'Color',
    icon: faHome,
    ref1: '#home1',
    ref2: '#home2',
    items: ['Red', 'Blue', 'Green']
  },
  {
    name: 'Size',
    icon: faUser,
    ref1: '#profile1',
    ref2: '#profile2',
    items: ['Small', 'Medium', 'Large']
  },
  {
    name: 'Parent',
    icon: faCog,
    ref1: '#settings1',
    ref2: '#settings2',
    items: ['Father', 'Mother', 'Guardian']
  }
];

export default data;
