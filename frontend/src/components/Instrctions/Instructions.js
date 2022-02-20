// eslint-disable-next-line
import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">
        <img
            className="pose-demo-img"
            src={poseImages[currentPose]}
        />

            <ul className="instructions-list">
            <h3>Follow these steps:</h3>
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )

                })}
            </ul>

        </div>
    )
}
