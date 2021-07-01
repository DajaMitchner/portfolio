import { logDOM } from '@testing-library/dom';
import React from 'react';

function Projects(){
    constructor(prop){
        super(prop)
        this.state = {
            projectInfo: [
                {
                    name: 'Calculator',
                    logo: 'test',
                    bio:  'xyz',
                    link: 'https://dajamitchner.github.io/calculator/',
                },
                {
                    name: 'Netflix Clone',
                    logo: 'test',
                    bio:  'xyz',
                    link: 'https://github.com/DajaMitchner/netflix-clone',
                },
                {
                    name: 'Capstone Project',
                    logo: 'test',
                    bio:  'xyz',
                    link: 'https://github.com/Nebula-Academy/SEV3-Capstone-COTA',
                },
                {
                    name: 'Song Database',
                    logo: 'test',
                    bio:  'xyz',
                    link: 'NA'
                },

            ]
        }
    }
    return(
        <div className='projects'>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects