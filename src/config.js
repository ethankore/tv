export const ANALYTICS_ID = process.env.REACT_APP_ANALYTICS_ID;

export const isTrackingEnabled = () => Boolean(ANALYTICS_ID) === true;

export const TRACKING_EVENTS = {
  OPEN_CHANNEL: 'OPEN_CHANNEL',
  CLOSE_CHANNEL: 'CLOSE_CHANNEL'
};

/* eslint-disable max-len */
const CHANNEL_11_URL = '//kan11.media.kan.org.il/hls/live/2024514/2024514/master.m3u8';
const CHANNEL_12_URL = '//mako-streaming.akamaized.net/direct/hls/live/2033791/k12dvr/index.m3u8';
const CHANNEL_12_TICKET_PREFETCH_URL = '//mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=ngt&lp=/stream/hls/live/2033791/k12dvr/index.m3u8?b-in-range=800-2700&rv=AKAMAI';
const CHANNEL_13_URL = '//d18b0e6mopany4.cloudfront.net/out/v1/08bc71cf0a0f4712b6b03c732b0e6d25/index.m3u8';
const SEINFELD_URL = '//watchseinfeld.net';

export const channels = [
  {
    name: 'רשת 13',
    url: CHANNEL_13_URL
  },
  {
    name: 'קשת 12',
    url: CHANNEL_12_URL,
    async prefetch() {
      try {
        const res = await fetch(CHANNEL_12_TICKET_PREFETCH_URL);

        const resJson = await res.json();

        // eslint-disable-next-line no-param-reassign
        this.url = this.url.includes('?') ? this.url : `${this.url}?${resJson.tickets[0].ticket}`;

        return true;
      } catch (error) {
        return false;
      }
    }
  },
  {
    name: 'כאן 11',
    url: CHANNEL_11_URL
  },
  {
    name: 'Seinfeld',
    url: SEINFELD_URL,
    type: 'iframe'
  }
];
