// eslint-disable-next-line
import React from 'react'

import { poseImages } from '../../utils/pose_images'

import './DropDown.css'

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
return (
  // <div>
  // <div class="dropdown">
  //             <button class="dropbtn">Warrior</button>
  //             <div class="dropdown-content">
  //               <a href="Tree.html">Tree</a>
  //               <a href="Chair.html">Chair</a>
  //               <a href="Mountain.html">Mountain</a>
  //               <a href="Warrior.html">Warrior</a>
  //               <a href="Triangle.html">Triangle</a>
  //
  //             </div>
  //
  //           </div>
  //     <button class="button-45" role="button">Start Pose</button>
  //     </div>
<div>
  <h1>YogShiksh<span >AI</span></h1>
        <div
        className='dropdown dropdown-container'

      >

        <button
            className="btn btn-secondary dropdown-toggle"
            type='button'
            data-bs-toggle="dropdown"
            id="pose-dropdown-btn"
            aria-expanded="false"
        >{currentPose}
        </button>
        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose) => (
                <li onClick={() => setCurrentPose(pose)}>
                    <div class="dropdown-item-container">
                        <p className="dropdown-item-1">{pose}</p>


                    </div>
                </li>
            ))}

        </ul>


      </div>
      </div>
    )
}
