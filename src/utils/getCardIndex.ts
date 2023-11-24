export const getCardIndex = (el: Element | HTMLElement): string | undefined => {
  if (!el.parentElement) {
    return;
  }
  if (el.parentElement.dataset.isCard === "true") {
    return el.parentElement.dataset.index;
  }
  return getCardIndex(el.parentElement);
};
