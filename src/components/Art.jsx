import React from 'react';
import BK99 from '../img/brooklyn_99.jpeg';
import StreetFighter from '../img/street_fighter.jpeg';
import JesusChrist from '../img/Jesus_Christ.jpeg';

function Art() {
    return (
        <div className='container'>
            <p>
                I've been drawing and painting on and off since high school.
            </p>
            <p>
                I mainly focus on portrait work, but have ventured into other subjects on occasion.
            </p>
            <p>
                Feel free to take a look at some of my recent artwork.
            </p>
            <br />
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={BK99} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <img src={BK99} alt="BK99" className='thumbnail' />
                            <br />
                            "BK99"
                        </a>
                    </div>
                    <br />
                    <p>
                        A sketch of the cast of Brooklyn Nine-Nine.
                    </p>
                    <p className="mb-5">
                        Pencil, 2019
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={StreetFighter} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <img src={StreetFighter} alt="Street Fighter V" className='thumbnail' />
                            <br />
                            "Street Fighter V"
                        </a>
                    </div>
                    <br />
                    <p>
                        A painting of the Street Fighter V logo.
                    </p>
                    <p className="mb-5">
                        Acrylic on canvas, 2017
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href={JesusChrist} target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <img src={JesusChrist} alt="Jesus Christ" className='thumbnail vertical' />
                            <br />
                            "Jesus Christ"
                        </a>
                    </div>
                    <br />
                    <p>
                        A sketch of Jesus Christ.
                    </p>
                    <p className="mb-5">
                        Pencil, 2019
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Art;