import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/valentin-poltarzhytski-0b16b199" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/LuciusSnake" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default React.memo(HeaderSocials)