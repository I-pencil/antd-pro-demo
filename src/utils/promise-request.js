/*
* Promise 增强插件，主要用于取消 axios 请求
*/

const _then = Promise.prototype.then;
const _catch = Promise.prototype.catch;
const _finally = Promise.prototype._finally;

/* eslint-disable no-extend-native */
Promise.prototype._getRootPromise = function getRootPromise() {
  return this._root || this;
}

function handleThen(func) {
  return function then(resolve, reject) {
    const rootPromise = this._getRootPromise();
    let resolveFunc = null;
    let rejectFunc = null;
    if (resolve) {
      resolveFunc = function resolveFunc(data) {
        if (!rootPromise._isCanceled) {
          return resolve(data)
        }
      };
    }
    if (reject) {
      rejectFunc = function rejectFunc(data) {
        if (!rootPromise._isCanceled) {
          return reject(data);
        }
      };
    }

    const returnPromise = func.apply(this, [resolveFunc, rejectFunc]);
    returnPromise._root = rootPromise;
    returnPromise._source = this._source;
    return returnPromise;
  }
}

Promise.prototype.then = handleThen(_then);
Promise.prototype.catch = handleThen(_catch);
Promise.prototype._finally = handleThen(_finally);

Promise.prototype.cancel = function cancel(text) {
  this._getRootPromise()._isCanceled = true;
  return this._source.cancel(text);
}
