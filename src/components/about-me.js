import React, { Component } from 'react';

import TextBox from './ui-components/text-box';

class AboutMe extends Component {
    render() {
        return (
            <div>
                The page about me
                <TextBox label="Name" />
            </div>
        )
    }
}

export default AboutMe;