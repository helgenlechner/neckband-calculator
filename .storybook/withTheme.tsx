import * as React from 'react';
const themeStyles = require('../src/assets/storybook-theme.module.scss');

export const withTheme = story => <div className={themeStyles.theme}>{story()}</div>;
