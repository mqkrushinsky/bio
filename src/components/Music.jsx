import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Music() {
    return (
        <div className='container'>
            <p>
                I started playing guitar at age 15 and have been strumming ever since.
            </p>
            <p>
                Many of the linked songs were either partially or entirely composed by me.
            </p>
            <p>
                Feel free to listen to the musical projects I've been a part of through the years.
            </p>
            <br />
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://equalascent.bandcamp.com/" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faMusic} size="4x" />
                            <br />
                            Equal Ascent
                        </a>
                    </div>
                    <br />
                    <p>
                        Progressive rock/metal duo from York, PA.
                    </p>
                    <p className="mb-5">
                        Recorded 2010-2014.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://soundcloud.com/user-219479457" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faMusic} size="4x" />
                            <br />
                            Burn The Well
                        </a>
                    </div>
                    <br />
                    <p>
                        Metal/hardcore trio from York, PA.
                    </p>
                    <p className="mb-5">
                        Recorded 2015-2018.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://soundcloud.com/matthew-kay-396771066" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faMusic} size="4x" />
                            <br />
                            Matthew Kay
                        </a>
                    </div>
                    <br />
                    <p>
                        Acoustic/electronic solo work.
                    </p>
                    <p className="mb-5">
                        Recorded 2014-2018.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Music;