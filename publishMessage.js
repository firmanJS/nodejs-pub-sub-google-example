// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

const projectId = process.env.PROJECT_ID

function main(
  topicName = process.env.TOPIC_NAME,
  data = JSON.stringify({ foo: 'bar' }),
) {
  // [START pubsub_publish_custom_attributes]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';
  // const data = JSON.stringify({foo: 'bar'});

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub({ projectId, credentials });

  async function publishMessageWithCustomAttributes() {
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    // Add two custom attributes, origin and username, to the message
    const customAttributes = {
      origin: 'nodejs-sample',
      username: 'gcp',
    };

    const messageId = await pubSubClient
      .topic(topicName)
      .publish(dataBuffer, customAttributes);
    // eslint-disable-next-line no-console
    console.log(`Message ${messageId} published.`);
  }

  // eslint-disable-next-line no-console
  publishMessageWithCustomAttributes().catch(console.error);
  // [END pubsub_publish_custom_attributes]
}

main(...process.argv.slice(2))
