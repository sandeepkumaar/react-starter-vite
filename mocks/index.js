import { setupWorker } from 'msw'
import handlers from './services';

const worker = setupWorker(
  ...handlers,
);

/**
 * Start mockserver on import to avoid api calls before mock setup
*/
const mockServer = worker.start({
  serviceWorker : {
    url : `${import.meta.env.VITE_BASE_URL}mockServiceWorker.js`
  }
});
export default mockServer;

