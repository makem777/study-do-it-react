import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach(srcFile => {
    // context() 함수로 임포트한 파일 중 default 항목을 임포트합니다.
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
