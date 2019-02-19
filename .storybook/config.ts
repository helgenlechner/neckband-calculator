import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import requireContext from 'require-context.macro';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const req = requireContext('../src/', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

Enzyme.configure({ adapter: new Adapter() });

addDecorator(withKnobs);

configure(loadStories, module);
