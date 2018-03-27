# event-as-promise

Handle continuous steam of events in Promise fashion.

There are multiple alternatives, for example, [p-event](https://npmjs.com/package/p-event) is a popular choice.

Instead of listen to event *just once*, `event-as-promise` chose an approach to allow listening to the same event continuously. And we use `generator` function to enable `for(of)` loop to handle event indefinitely.

# How to use

## Web server

This sample code is converted from [Node about page](https://nodejs.org/en/about/).

```js
import EventAsPromise from '..';
import http from 'http';

async function main(ready) {
  const server = http.createServer();
  const listeningPromises = new EventAsPromise();
  const requestPromises = new EventAsPromise({ array: true });

  server
    .once('listening', listeningPromises.eventListener)
    .on('request', requestPromises.eventListener)
    .listen(3000);

  // Wait for "listening"
  await listeningPromises.one();

  // Loop indefinitely, using generator
  for (let requestPromise of requestPromises) {
    // Wait for "request"
    const [req, res] = await requestPromise;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }
}

main();
```

> Note: as multiple results is not supported by Promise, the `array` option will group multiple event arguments into an array. By default, it is `false`.

## Redux Saga

Handling event in a Promise may not reduce complexity. But it will be beneficial for `redux-saga` when mixed with `call` function.

In this example, when the user is connected via `CONNECTED` action, we will keep the user posted about file changes, until a `DISCONNECTED` is received.

```js
saga.run(function* () {
  yield takeLatest('CONNECTED', function* (action) {
    const watcher = fs.watch(action.payload);
    const changePromises = new EventAsPromise({ array: true });

    watcher.on('change', changePromises.eventListener);

    for (;;) {
      const [changes] = yield race([
        call(changePromises.one),
        take('DISCONNECTED'),
      ]);

      if (changes) {
        yield put({ type: 'CHANGED', payload: changes });
      } else {
        break;
      }
    }

    watcher.close();
  });
});
```

## Futures

You can retrieve multiple Promise objects before the event is emitted.

```js
const emitter = new EventEmitter();
const countPromises = new EventAsPromise();

emitter.on('count', countPromises.eventListener);

// Retrieve multiple future Promise before the actual event is fired
const promise1 = countPromises.one();
const promise2 = countPromises.one();
const promise3 = countPromises.one();

emitter.emit('count', 1);
emitter.emit('count', 2);
emitter.emit('count', 3);

await expect(promise1).resolves.toBe(1);
await expect(promise2).resolves.toBe(2);
await expect(promise3).resolves.toBe(3);
```

> Same as event listener, if `one()` is not called before the event is emitted, the event will be lost.

# Contributions

Like us? [Star](https://github.com/compulim/event-as-promise/stargazers) us.

Want to make it better? [File](https://github.com/compulim/event-as-promise/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/event-as-promise/pulls) a pull request.
