import { useEffect, useState } from 'react';

const formatSeconds = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  let result = [m, s].map((v) => v.toString().padStart(2, '0')).join(':');
  if (h) {
    result = h.toString().padStart(2, '0') + ':' + result;
  }
  return result;
};

export default () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setSeconds]);
  return formatSeconds(seconds);
};
