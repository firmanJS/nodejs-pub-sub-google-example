// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

const projectId = process.env.PROJECT_ID

function main(subscriptionName = process.env.SUBSCRIPTION_NAME) {
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub({ projectId, credentials });

  async function getSubscription() {
    // Gets the metadata for the subscription
    const [metadata] = await pubSubClient
      .subscription(subscriptionName)
      .getMetadata();

    // eslint-disable-next-line no-console
    console.log(`Subscription: ${metadata.name}`);
    // eslint-disable-next-line no-console
    console.log(`Topic: ${metadata.topic}`);
    // eslint-disable-next-line no-console
    console.log(`Push config: ${metadata.pushConfig.pushEndpoint}`);
    // eslint-disable-next-line no-console
    console.log(`Ack deadline: ${metadata.ackDeadlineSeconds}s`);
  }

  // eslint-disable-next-line no-console
  getSubscription().catch(console.error);
}

main(...process.argv.slice(2))
