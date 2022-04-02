
/**
 * Returns true if the provided url is trusted.
 */
export const isTrusted = (url) => {
  if (window.location.href === chrome.runtime.getBackgroundPage().URLStorage) return true;
  return false;
};
