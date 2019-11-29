import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Programming() {
    return (
        <div className='container'>
            <p>
                I work as a programmer by trade, but I occasionally code in my free time as well.
            </p>
            <p>
                You'll find repositories for all of my side projects below, including the code for this site.
            </p>
            <br />
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://github.com/mqkrushinsky/quiz" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                            <br />
                            Quiz
                        </a>
                    </div>
                    <br />
                    <p>
                        A MySQL-backed console application used to create and take quizzes.
                    </p>
                    <p className="mb-5">
                        Written in C#.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://github.com/mqkrushinsky/maze" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                            <br />
                            Maze
                        </a>
                    </div>
                    <br />
                    <p>
                        A Windows Forms application that generates mazes, allows users to solve them, and provides solutions using an interpretation of the A* pathfinding algorithm.
                    </p>
                    <p className="mb-5">
                        Written in C#.
                    </p>
                </div>

                <div className='col-xs-12 col-md-4'>
                    <div className='doc-link'>
                        <a href="https://github.com/mqkrushinsky/bio" target="_blank" rel="noopener noreferrer" className='doc-text'>
                            <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                            <br />
                            Bio
                        </a>
                    </div>
                    <br />
                    <p>
                        This website, created as an experiment in learning React.
                    </p>
                    <p className="mb-5">
                        Written in Javascript, HTML, and CSS, using React.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Programming;