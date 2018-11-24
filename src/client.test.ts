import tap, { Test } from 'tap';
import { Client } from './client';

const config = {
  url: 'http://localhost:3000',
};

tap.test('It displays url', (t: Test) => {
  const client = new Client(config);

  t.equals(client.getUrl(), config.url);
  t.end();
})