import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
      <div class="box">

      <header>
          <div>
              <h1>Yogshiksh<span>AI</span></h1>

          </div>

          <div class="btns menuToggle">
              <ion-icon name="menu-outline"></ion-icon>
              <ion-icon name="close-outline"></ion-icon>
          </div>
      </header>
      <div class="container">
          <div>
              <h1>YogShiksh<span>AI</span></h1>
              <br></br>
              <br></br>
              <br></br>
              <h4></h4>
              <form action="">
              <Link to='/start'>
            <button>Let's Start</button>
                                  </Link>

              
              </form>
          </div>
          <img src="https://media1.giphy.com/media/XyakWW6WwplIPSHfuR/giphy.gif?cid=ecf05e47jahmiaaeoeymqevm123ia37hdrlx1y7yraspfeux&rid=giphy.gif&ct=s" alt=""></img>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </div>
    )
}
