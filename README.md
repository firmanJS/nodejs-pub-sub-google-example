## Nodejs Pub/Sub GCP Example

## Documentation

[Cloud Pub/Sub](https://cloud.google.com/pubsub/docs) is a fully-managed real-time messaging service that allows
you to send and receive messages between independent applications.

This document contains links to an [API reference](https://googleapis.dev/nodejs/pubsub/latest/index.html#reference), samples,
and other resources useful to developing Node.js applications.
For additional help developing Pub/Sub applications, in Node.js and other languages, see our
[Pub/Sub quickstart](https://cloud.google.com/pubsub/docs/quickstart-client-libraries),
[publisher](https://cloud.google.com/pubsub/docs/publisher), and [subscriber](https://cloud.google.com/pubsub/docs/subscriber)
guides.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-pubsub/blob/master/CHANGELOG.md).

* [Google Cloud Pub/Sub Node.js Client API Reference](https://googleapis.dev/nodejs/pubsub/latest/index.html)
* [Google Cloud Pub/Sub Documentation](https://cloud.google.com/pubsub/docs/)
* [github.com/googleapis/nodejs-pubsub](https://github.com/googleapis/nodejs-pubsub)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained


## How To Use

* copy env-sample in terminale
```sh
cp .env-sample .env
```
* run listerner service subscription
```sh
node retriveMessage
```

* run publisher service
```sh
node publishMessage
```

