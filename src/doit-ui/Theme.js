// 공용컴포넌트 스타일 파일
export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: `@media print`,
};

export const unit = 4;

export default {
  // 색상
  color: {
    primary: '#03a9f4', // 주색상
    secondary: '#795548', // 부색상
    white: '#FFFFFF',
    gray: '#CCCCCC',
    default: '#999999',
  },
  // 글꼴 크기
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300,
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14)',
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14)',
    },
    level3: {
      boxShadow: '0 8px 12px 12px rgba(0,0,0,0.14)',
    },
  },
  // 길이단위
  unit,
  // 반응형 미디어 속성
  responsive,
};
