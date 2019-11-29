import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import PaperCranes from '../pdf/paper_cranes_preview.pdf';
import Snow from '../pdf/snow_preview.pdf';
import TheDisappearing from '../pdf/the_disappearing_preview.pdf';

function Writing() {
    return (
        <div className='container'>
            <p>
                I regularly write fiction for my own personal enjoyment, but aspire to become a published author.
            </p>
            <p>
                Feel free to read some samples from my completed novels.
            </p>
            <br />
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={PaperCranes} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faBook} size="4x" />
                            <br />
                            Paper Cranes
                        </a>
                    </div>
                    <br />
                    <p>
                        A deadly love triangle and a life on the run.
                    </p>
                    <p className="mb-5">
                        Completed 2013.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={Snow} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faBook} size="4x" />
                            <br />
                            Snow
                        </a>
                    </div>
                    <br />
                    <p>
                        One man's journey of self-discovery through his camera lens.
                    </p>
                    <p className="mb-5">
                        Completed 2016.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={TheDisappearing} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faBook} size="4x" />
                            <br />
                            The Disappearing
                        </a>
                    </div>
                    <br />
                    <p>
                        A hero's quest to uncover the truth of a global extinction event.
                    </p>
                    <p className="mb-5">
                        Due to be completed 2020.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Writing;