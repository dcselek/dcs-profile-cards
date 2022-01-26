# dcs-profile-cards

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/dcs-profile-cards.svg)](https://www.npmjs.com/package/dcs-profile-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![](https://i.gyazo.com/9ca97431972fa5596035de857fe7390b.gif)](https://gyazo.com/9ca97431972fa5596035de857fe7390b)

## Install

```bash
npm install --save dcs-profile-cards
```

## Usage

For Big Profile Cards:

```jsx
import React, { Component } from 'react'

import { BigProfileCard } from 'dcs-profile-cards'
import 'dcs-profile-cards/dist/index.css'

class Example extends Component {
  render() {
    return (
        <BigProfileCard name='DCSELEK' id="41" mail="dcselek@gmail.com" other="Hi! 🖖" src={avatar} alt="avatar" purple />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" yellow />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" gray />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" darkblue />
    )
  }
}
```
For Small Profile Cards:

```jsx
import React, { Component } from 'react'

import { SmallProfileCard } from 'dcs-profile-cards'
import 'dcs-profile-cards/dist/index.css'

class Example extends Component {
  render() {
    return (
        <SmallProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" angular purple />
        <SmallProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" angular yellow />
        <SmallProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" angular gray />
        <SmallProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" angular darkblue />
    )
  }
}
```

## License

MIT © [dcselek](https://github.com/dcselek)
