// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

const projectId = process.env.PROJECT_ID

function main() {
  // [START pubsub_list_subscriptions]

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub({ projectId, credentials });

  async function listSubscriptions() {
    // Lists all subscriptions in the current project
    const [subscriptions] = await pubSubClient.getSubscriptions();
    console.log('Subscriptions:');
    subscriptions.forEach((subscription) => console.log(subscription.name));
  }

  listSubscriptions().catch(console.error);
  // [END pubsub_list_subscriptions]
}

main(...process.argv.slice(2))
