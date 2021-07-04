import Hls from 'hls.js';
import { useEffect, useState } from 'react';

export const useHls = (videoRef, sourceUrl) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady || !videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ maxBufferSize: 10 * 1000 });
      hls.loadSource(sourceUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsReady(true);
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // eslint-disable-next-line no-param-reassign
      videoRef.current.src = sourceUrl;
      setIsReady(true);
    }
  }, [videoRef, sourceUrl, isReady]);

  return { isReady };
};
