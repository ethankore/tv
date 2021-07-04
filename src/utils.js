import ReactGA from 'react-ga4';
import { isTrackingEnabled } from './config';

// eslint-disable-next-line max-len
export const trackChannelEvent = (action, label = '') => {
  if (isTrackingEnabled()) {
    ReactGA.event({ category: 'channels', action, label });
  }
};
