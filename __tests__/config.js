// Enzyme needs this Adapter or it throws an error in the tests.
// You can read more here: http://airbnb.io/enzyme/docs/installation/index.html

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
