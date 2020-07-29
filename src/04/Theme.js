export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAME = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAME.LARGE]: 1128,
  [BREAKPOINT_NAME.MEDIUM]: 744,
  [BREAKPOINT_NAME.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAME.LARGE]}px)`,
  [BREAKPOINT_NAME.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAME.MEDIUM] - 1}px)`,
  print: '@media print',
};
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
  // 길이단위
  unit: 4,
  responsive,
};
