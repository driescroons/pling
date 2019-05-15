import * as http from 'http';

interface Pling {
  key: string;
  title: string;
  description: string;
}

const notify = async ({ key, title, description }: Pling) => {
  const host = 'api.pling.dev';
  // const host = 'localhost';
  const path = '/logs';
  const method = 'POST';
  const body = JSON.stringify({ title, description });

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': key,
  };

  // Browserify or webpack defines a process.browser
  if ((process as any).browser) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`https://${host}${path}`, {
        method,
        headers,
        body,
      });
      if (response.status === 201) {
        return resolve();
      }
      return reject();
    });
  } else {
    const options = {
      host,
      path,
      method,
      headers,
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, res => {
        // The 'end' event will not be emitted unless the data is completely consumed. see: https://nodejs.org/api/stream.html#stream_class_stream_readable
        res.on('data', () => {});
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode <= 299) {
            resolve();
          } else {
            reject();
          }
        });
      });

      req.on('error', reject);
      req.write(body);
      req.end();
    });
  }
};

// why not export default?
// https://markus.oberlehner.net/blog/building-npm-packages-with-typescript/
export = notify;
