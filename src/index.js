import React from 'react'
import styles from './styles.module.css'
import cn from 'classnames'


export const BigProfileCard = ({ name = "", other = "", id = "", mail = "", src = "", alt = "", purple, yellow, gray, darkblue, darkbg, classNames }) => {
  return (
    <div className={cn(styles.container,
      purple && styles.purple,
      yellow && styles.yellow,
      gray && styles.gray,
      darkblue && styles.darkblue,
      darkbg && styles.darkbg,
      classNames
    )
    }>
      <div className={styles.image}>
        <img src={src} alt={alt} />
      </div>
      <h4>{name}</h4>
      <hr></hr>
      <div className={styles.info}>
        <span>{id}</span>
        <span>{mail}</span>
        <span>{other}</span>
      </div>
    </div>
  );
};

export const SmallProfileCard = ({ name = "", other = "", src = "", alt = "", purple, yellow, gray, darkblue, darkbg, angular, classNames }) => {

  if (name.length > 18) {
    const nameSlice = name.slice(0, 19);
    name = `${nameSlice}...`
  }

  if (other.length > 18) {
    const nameSlice = name.slice(0, 19);
    name = `${nameSlice}...`
  }


  return (
    <div className={cn(styles.smallContainer,
      purple && styles.smallPurple,
      yellow && styles.smallYellow,
      gray && styles.smallGray,
      darkblue && styles.smallDarkblue,
      darkbg && styles.smallDarkbg,
      angular && styles.angular,
      classNames
    )}>
      <div className={styles.smallImage}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.smallInfo}>
        <h4>{name}</h4>
        <span>{other}</span>
      </div>
    </div>
  );
};