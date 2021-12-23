# react-always-visible

> Make sure that your container is always in viewpoint when displayed.

[![NPM](https://img.shields.io/npm/v/react-always-visible.svg)](https://www.npmjs.com/package/react-always-visible) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-always-visible
```

## Usage

```jsx
import React, { Component } from 'react';

import ReactAlwaysVisible from 'react-always-visible';
import 'react-always-visible/dist/index.css';

class UserComponent extends Component {
  render() {
    return (
      <div>{this.props.text}</div
    );
  }
};

class Example extends Component {
  render() {
    return (
      <div>
        <ReactAlwaysVisible>
          <UserComponent text="Should be bottom-top" />
        </ReactAlwaysVisible>
      </div>
    );
  }
};
```

## Usage Examples
<img width="603" alt="Screenshot 2021-12-23 at 07 25 32" src="https://user-images.githubusercontent.com/4904662/147197826-49fe1190-43b7-455d-9475-33c5e1f750c2.png">

The real advantage of using this plugin is within tables and lists where it is necessary to scroll down due to the number of elements. Using this plugin container activated by table/list item click is always fully displayed in viwepoint.

<img width="341" alt="Screenshot 2021-12-23 at 07 34 50" src="https://user-images.githubusercontent.com/4904662/147198795-f530962a-f35c-4576-a2e1-e8eb5dd1e11b.png">


## License

MIT © [irfankr](https://github.com/irfankr)
