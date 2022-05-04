import Bugsnag from '@bugsnag/expo';

// we are hiding out logger behind an abstraction layer
// so if we can use a better logger in the future if we want

const log = (error: any) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

export default {
  log,
  start
};