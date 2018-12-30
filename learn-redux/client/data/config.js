import Raven from 'raven-js';

const sentry_key = '58081d6404d549ec8038a1f9db824825';
const sentry_app = '1361937';

export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
