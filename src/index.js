import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';
import { Provider, connect } from 'react-redux';

function rootReducer(state = Map({}), actions) {
  if (actions.fix) {
    return actions.fix(state) || state;
  }
  return state;
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const storage = {
  localName: 'defaultIOKey',
  save: (v, theKey) => {
    if (!theKey) {
      theKey = storage.localName;
    }
    const theType = Object.prototype.toString.call(v);
    if (theType === '[object Object]') {
      localStorage.setItem(theKey, JSON.stringify(v));
    } else if (theType === '[object String]') {
      localStorage.setItem(theKey, v);
    } else {
      console.warn('Warn: storage.save() param is no a Object');
    }
  },
  load: theKey => {
    if (!theKey) {
      theKey = storage.localName;
    }
    try {
      const data = localStorage.getItem(theKey);
      if (data) {
        if (typeof data === 'string') {
          return JSON.parse(data);
        }
        return data;
      }
    } catch (err) {
      console.warn('load last localSate error');
    }
  },
};

// 这里做自动保存的监听
const autoStorageSave = (localName, needSaveKeys) => {
  if (localName) {
    storage.localName = localName;
  }
  const lastLocalData = storage.load(storage.localName);
  if (lastLocalData) {
    store.dispatch({
      type: 'loadLastLocalData',
      fix: function(state) {
        return state.set(Map(lastLocalData));
      },
    });
  }
  if (Object.prototype.toString.call(needSaveKeys) !== '[object Array]') {
    // eslint-disable-next-line
    console.warn('autoSaveStorageKeys: params不是一个数组');
  }
  // 只有Auth和DataCenter的修改会激发IO;
  const lastDatas = {};
  needSaveKeys.forEach(v => {
    lastDatas[v] = undefined;
  });
  store.subscribe(() => {
    const state = store.getState();
    const nowDatas = {};
    let isNeedSave = false;
    needSaveKeys.forEach(v => {
      // 监听数据和 Immutable 配合做低开销校验
      if (Object.prototype.toString.call(v) === '[object Array]') {
        nowDatas[v] = state.getIn(v);
      }
      nowDatas[v] = state.get(v);
      if (lastDatas[v] !== nowDatas[v]) {
        isNeedSave = true;
      }
    });
    if (isNeedSave) {
      storage.save(nowDatas);
      needSaveKeys.forEach(v => {
        lastDatas[v] = nowDatas[v];
      });
    }
  });
};

export { Provider, storage, store, autoStorageSave, connect };
