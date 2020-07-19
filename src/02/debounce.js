// debounce.js를 실행하려면 export를 삭제해야합니다.
// 실행 후 다시 export를 넣어주세요
export function debounce(func, delay) {
  let inDebounce;
  return function(...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
