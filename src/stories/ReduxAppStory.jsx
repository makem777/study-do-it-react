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
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';
import AdvReduxApp08 from '../07/AdvReduxApp08';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 스토어 설정', () => <ReduxApp01></ReduxApp01>)
  .addWithJSX('ReduxApp02', () => <ReduxApp02></ReduxApp02>)
  .addWithJSX('ReduxApp03', () => <ReduxApp03></ReduxApp03>)
  .addWithJSX('AdvReduxApp01', () => <AdvReduxApp01></AdvReduxApp01>)
  .addWithJSX('AdvReduxApp02', () => <AdvReduxApp02></AdvReduxApp02>)
  .addWithJSX('AdvReduxApp03', () => <AdvReduxApp03></AdvReduxApp03>)
  .addWithJSX('AdvReduxApp04', () => <AdvReduxApp04></AdvReduxApp04>)
  .addWithJSX('AdvReduxApp05', () => <AdvReduxApp05></AdvReduxApp05>)
  .addWithJSX('AdvReduxApp06', () => <AdvReduxApp06></AdvReduxApp06>)
  .addWithJSX('AdvReduxApp07', () => <AdvReduxApp07></AdvReduxApp07>)
  .addWithJSX('AdvReduxApp08', () => <AdvReduxApp08></AdvReduxApp08>)
  .addWithJSX('SearchFilterReduxApp', () => <SearchFilterReduxApp></SearchFilterReduxApp>);
