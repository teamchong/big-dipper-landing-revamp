import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles w/ other styling solutions, like CSS modules.
export default function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
    insertionPoint = (emotionInsertionPoint as HTMLElement) ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint, prepend: true });
}
