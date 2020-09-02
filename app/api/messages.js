import client from './client';

const endpoint = '/messages';

const send = (message, listingDetail) =>
  client.post(endpoint, {
    message,
    listingDetail
  });

export default {
  send
}
