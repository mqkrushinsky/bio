import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className='container'>
            <p>
                I would love to hear from you!
            </p>
            <p>
                Please send me a message if you feel so inclined.
            </p>
            <br />
            <div className='row'>
                <div className='d-none d-md-block col-md-4'>

                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="mailto:mqkrushinsky@gmail.com" target="_top" className='doc-text'>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" />
                            <br />
                            Email
                        </a>
                    </div>
                </div>

                <div className='d-none d-md-block col-md-4'>

                </div>
            </div>
        </div>
    )
}

export default Contact;