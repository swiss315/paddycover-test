import React from 'react'

import { ReactComponent as Mailicon } from '../Assets/Icons/mailicon.svg'
import mailboximage from '../Assets/Images/mailboximage.png'

import '../Stylesheets/mailbox.css'

function Mailbox() {
  return (
    <div className='mailbox-container'>
        <div className='mail-input'>
            <div>
                <Mailicon />
                <p>Join our mailing list</p>
            </div>
            <p>
                Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <input type='text' placeholder='Enter email address here' />
            <button>
                Subscribe
            </button>
        </div>
        <div className='mailbox-image'>
            <img src={mailboximage} alt='mail box' loading="lazy"/>
        </div>
    </div>
  )
}

export default Mailbox