import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 스토어 설정', () => <ReduxApp01></ReduxApp01>)
  .addWithJSX('ReduxApp02', () => <ReduxApp02></ReduxApp02>)
  .addWithJSX('ReduxApp03', () => <ReduxApp03></ReduxApp03>)
  .addWithJSX('AdvReduxApp01', () => <AdvReduxApp01></AdvReduxApp01>)
  .addWithJSX('AdvReduxApp02', () => <AdvReduxApp02></AdvReduxApp02>)
  .addWithJSX('AdvReduxApp03', () => <AdvReduxApp03></AdvReduxApp03>)
  .addWithJSX('AdvReduxApp04', () => <AdvReduxApp04></AdvReduxApp04>)
  .addWithJSX('AdvReduxApp05', () => <AdvReduxApp05></AdvReduxApp05>);
