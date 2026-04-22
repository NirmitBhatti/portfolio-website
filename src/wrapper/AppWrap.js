import React from 'react'
import { NavigationDots, SocialMeadia } from '../temp'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMeadia />

        <div className='app__wrapper app__flex'>
          <Component />

          <div className='copyright'>
            <p className='p-text'>2020 NIRMIT</p>
            <p className='p-text'>It's My Portfolio Website</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    )
  }

export default AppWrap