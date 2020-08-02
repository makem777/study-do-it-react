import React from 'react';
import { storiesOf } from '@storybook/react';

import BranchLoadingButton from '../05/branch';

storiesOf('Branch', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <BranchLoadingButton>안녕하세요</BranchLoadingButton>
    </div>
  ))
  .addWithJSX('isLoading 예제', () => (
    <div>
      <BranchLoadingButton isLoading>안녕하세요</BranchLoadingButton>
    </div>
  ));
