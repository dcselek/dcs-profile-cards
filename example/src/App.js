import React from 'react'

import { BigProfileCard, SmallProfileCard } from 'dcs-profile-cards'
import avatar from './assets/avatar.png'
import 'dcs-profile-cards/dist/index.css'

const App = () => {
  return (
    <div>
      <h2>Big Profile Cards</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" purple />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" yellow />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" gray />
        <BigProfileCard name='DCSELEK' id="41" other="Hi! 🖖" src={avatar} alt="avatar" darkblue />
      </div>
      <br />
      <h2>Small Profile Cards </h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SmallProfileCard name='DOĞAN CAN SELEKKKKKKKK' id="41" other="github.com/dcselek 🖖" src={avatar} alt="avatar" angular purple />
        <SmallProfileCard name='DOĞAN CAN SELEKKKKKKKK' id="41" other="github.com/dcselek 🖖" src={avatar} alt="avatar" angular yellow />
        <SmallProfileCard name='DOĞAN CAN SELEKKKKKKKK' id="41" other="github.com/dcselek 🖖" src={avatar} alt="avatar" angular gray />
        <SmallProfileCard name='DOĞAN CAN SELEKKKKKKKK' id="41" other="github.com/dcselek 🖖" src={avatar} alt="avatar" angular darkblue />
      </div>
    </div>
  )
}

export default App
