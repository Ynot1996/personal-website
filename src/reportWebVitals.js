import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals/attribution';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry, { reportAllChanges: true });
    onINP(onPerfEntry, { reportAllChanges: true });
    onFCP(onPerfEntry, { reportAllChanges: true });
    onLCP(onPerfEntry, { reportAllChanges: true });
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;