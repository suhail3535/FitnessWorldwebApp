import React from 'react'
import { Link } from 'react-router-dom'
import "../Pages/home//home.css"
import Image from "../images/main_header.png"
const MainHeader = () => {
    return (
        <header className='main_header'>
            <div className='container main_header-container'>

                <div className='main_Header-left'>
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join The Legands Of The Fitness World</h1>
                    <p> It Was An Instant Hit. Vawulens's Gym Quickly Became Known As “The Mecca Of Bodybuilding.'' In 1977, Vawulens's Gym Received International Attention When It Was Featured In The Movie Pumping Iron That Starred Arnold Schwarzenegger And Lou Ferrigno. From That First Gym In Venice, Vawulens's Gym Has Become The Largest Co-Ed Gym Chain In The World With Over 700+ Clubs In 27 Countries. Today, Vawulens's Gym Has Expanded Its Fitness Profile To Offer All Of The Latest Equipment And Services, Including Group Exercise, Personal Training, Cardiovascular Equipment, Spinning, And Yoga, While Maintaining Its Core Weight Lifting Tradition.</p>
                    <Link to="/plans" className='btn lg'>Get Started</Link>
                </div>
                <div className='main-header-right'>
                    <div className="main_header-circle"></div>
                    <div className="main_header-image">
                        <img src={Image} alt="Main header img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader