export const BANNER_NEXT = 'BANNER_NEXT';
export const BANNER_PREV = 'BANNER_PREV';
export const BANNER_CHANGE = 'BANNER_CHANGE';
export function next() {
  return {
    type: BANNER_NEXT
  };
}
export function prev() {
  return {
    type: BANNER_PREV
  };
}
export function change(index) {
  return {
    type: BANNER_CHANGE,
    index
  };
}
