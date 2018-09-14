## Why do we need yet another?

1. Delete Reducer, we only need actions;
2. Using Immutable state;
3. Auto save & load localStorage for embranchment state;
4. Auto use redux-thunk and chrome-redux-tools.

## Install

```sh
$ yarn add redux-pillar
```

## Example project 

In React project:

```
--public
  -- index.html
--src
  -- actions.js
  -- index.js
  -- App.js
...
```

actions.js file:

```js
export function setNum(num) {
  return dispatch => {
    dispatch({
      // type just describe
      type: 'change test number',
      reducer(state) {
        return state.setIn(['test', 'num'], num);
      },
    });
  };
}

```

index.js file:

```js
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider, autoStorageSave, store } from 'redux-pillar';

// auto load and save state.test to localStorage
autoStorageSave('local_string', ['test']);

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
render(<Root />, document.getElementById('root'));
```

App.js file:

```js
import React from 'react';
import { connect } from 'redux-pillar';
import { setNum } from './actions';

class App extends React.PureComponent {
  componentDidMount() {
    if (this.props.num === undefined) {
      this.props.setNum(0);
    }
  }
  addNum = () => {
    this.props.setNum(this.props.num + 1);
  };
  lessenNum = () => {
    this.props.setNum(this.props.num - 1);
  };
  render() {
    return (
      <div>
        <h2>Home page {this.props.num}</h2>
        <button onClick={this.addNum}>add num</button>
        <button onClick={this.lessenNum}>lessen num</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num: state.getIn(['test', 'num']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNum: v => {
      dispatch(setNum(v));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
```

```sh
yarn start
```

# Do you see Reducers file? Enjoy it!

## License

```
MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
