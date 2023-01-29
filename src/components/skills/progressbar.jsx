import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
const Progressbar = (props) => {
    return (
        <div>

            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={props.value}
                duration={1.6}
                easingFunction={easeQuadInOut}
            >
                {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={props.value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: 'none' })}
                        />
                    );
                }}
            </AnimatedProgressProvider>
        </div>
    )
}

export default Progressbar