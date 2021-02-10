// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

const projectId = process.env.PROJECT_ID
const subscriptionName = process.env.SUBSCRIPTION_NAME
let timeout = 60

function main() {
  timeout = Number(timeout);

  // [START pubsub_subscriber_async_pull]
  // [START pubsub_quickstart_subscriber]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
  // const timeout = 60;

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub({ projectId, credentials });

  function listenForMessages() {
    // References an existing subscription
    const subscription = pubSubClient.subscription(subscriptionName);

    // Create an event handler to handle messages
    let messageCount = 0;
    const messageHandler = (message) => {
      console.log(`Received message ${message.id}:`);
      console.log(`\tData: ${message.data}`);
      console.log(`\tAttributes: ${message.attributes}`);
      messageCount += 1;

      // "Ack" (acknowledge receipt of) the message
      message.ack();
    };

    // Listen for new messages until timeout is hit
    subscription.on('message', messageHandler);

    setTimeout(() => {
      subscription.removeListener('message', messageHandler);
      console.log(`${messageCount} message(s) received.`);
    }, timeout * 1000);
  }

  listenForMessages();
  // [END pubsub_subscriber_async_pull]
  // [END pubsub_quickstart_subscriber]
}

main(...process.argv.slice(2))
