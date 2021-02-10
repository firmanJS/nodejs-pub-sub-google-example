// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

async function quickstart(
  projectId = process.env.PROJECT_ID, // Your Google Cloud Platform project ID
  topicName = process.env.TOPIC_NAME, // Name for the new topic to create
  subscriptionName = process.env.SUBSCRIPTION_NAME, // Name for the new subscription to create
) {
  // Instantiates a client
  const pubsub = new PubSub({ projectId, credentials });

  // Creates a new topic
  const [topic] = await pubsub.createTopic(topicName);
  // eslint-disable-next-line no-console
  console.log(`Topic ${topic.name} created.`);

  // Creates a subscription on that new topic
  const [subscription] = await topic.createSubscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on('message', (message) => {
    // eslint-disable-next-line no-console
    console.log('Received message:', message.data.toString());
    process.exit(0);
  });

  // Receive callbacks for errors on the subscription
  subscription.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.error('Received error:', error);
    process.exit(1);
  })

  // Send a message to the topic
  topic.publish(Buffer.from('Test message!'));
}

quickstart().then((res) => {
  // eslint-disable-next-line no-console
  console.log(res);
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.log(err);
})
