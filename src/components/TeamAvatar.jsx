import { useState } from 'react'
import styles from './TeamAvatar.module.css'

export default function TeamAvatar({ image, ...props }) {
  return <Avatar key={image || 'abstract'} image={image} {...props} />
}

function Avatar({ image, alt, profileType }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={styles.avatar}>
      {image?.trim() && !failed
        ? <img src={image} alt={alt || 'Ilustración del equipo AgroBot'} loading="lazy" onError={() => setFailed(true)} />
        : <svg viewBox="0 0 100 100" role="img" aria-label={alt || 'Representación abstracta de ingeniería'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {profileType === 'computer-science' ? <>
            <rect x="21" y="27" width="58" height="43" rx="3" />
            <path d="M21 37h58M30 32h1m5 0h1m-2 14-7 7 7 7m30-14 7 7-7 7M55 44l-9 18M39 77h22M50 70v7" />
          </> : profileType === 'mechanical' ? <>
            <path d="m44 23 12 0 2 8 7 4 8-2 6 10-6 6v8l6 6-6 10-8-2-7 4-2 8H44l-2-8-7-4-8 2-6-10 6-6v-8l-6-6 6-10 8 2 7-4z" transform="translate(0 -3)" />
            <circle cx="50" cy="50" r="16" /><circle cx="50" cy="50" r="6" />
          </> : profileType === 'mechatronics' ? <>
            <rect x="35" y="35" width="30" height="30" rx="3" />
            <path d="M43 25v10m14-10v10M43 65v10m14-10v10M25 43h10m-10 14h10m30-14h10M65 57h10M43 50h14m-7-7v14M21 25h12m34 50h12" />
            <circle cx="21" cy="25" r="3" /><circle cx="79" cy="75" r="3" />
          </> : <><circle cx="50" cy="50" r="23" /><path d="M27 50h46M50 27v46" /></>}
        </svg>}
    </div>
  )
}
