import React from 'react'

import { ReactComponent as Phoneicon } from '../Assets/Icons/phoneicon.svg'
import { ReactComponent as Locationicon } from '../Assets/Icons/locationicon.svg'
import { ReactComponent as Mailicon } from '../Assets/Icons/mailicon.svg'

import '../Stylesheets/contact-bar.css'

function Contact() {
  return (
    <div className='contact-bar'>
        <div>
            <Phoneicon />
            <p>+234 802 501 8557</p>
        </div>
        <div>
            <Locationicon />
            <p>35 Freedom Way, Lekki Phase 1, Lagos, Nigeria</p>
        </div>
        <div>
            <Mailicon />
            <p>sales@thelightinghaus.com</p>
        </div>
    </div>
  )
}

export default Contact