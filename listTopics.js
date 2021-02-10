const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config()

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY,
}

const projectId = process.env.PROJECT_ID

function main() {
  // Creates a client; cache this for further use
  const pubSubClient = new PubSub({ projectId, credentials });

  async function listAllTopics() {
    // Lists all topics in the current project
    const [topics] = await pubSubClient.getTopics();
    // eslint-disable-next-line no-console
    console.log('Topics:');
    // eslint-disable-next-line no-console
    topics.forEach((topic) => console.log(topic.name));
  }

  // eslint-disable-next-line no-console
  listAllTopics().catch(console.error);
  // [END pubsub_list_topics]
}

main(...process.argv.slice(2))
