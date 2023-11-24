export const isPartOfCardElement = (el: Element | HTMLElement): boolean => {
  // todo: add something like counter to prevent too many calls
  if (!el.parentElement) {
    return false;
  }
  if (el.parentElement.dataset.isCard === "true") {
    return true;
  }
  return isPartOfCardElement(el.parentElement);
};
