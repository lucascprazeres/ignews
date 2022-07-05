import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    (
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => setIsUserLoggedIn(state => !state)}
      >
        <FaGithub color="#04d361" />
        Lucas Prazeres

        <FiX color="#737380" className={styles.closeIcon}/>
      </button>
    )
  ) : (
    (
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => setIsUserLoggedIn(state => !state)}
      >
        <FaGithub color="#eba417" />
        Sign in with GitHub

        <FiX color="#737380" className={styles.closeIcon}/>
      </button>
    )
  )
}