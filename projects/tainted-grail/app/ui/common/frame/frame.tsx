import React from 'react'
import styles from '@/app/ui/common/frame/frame.module.css'

export const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.main}>
    <div className={styles.topRightBig}></div>
    <div className={styles.topRightSmallIn}></div>
    <div className={styles.topRightSmallOut}></div>
    <div className={styles.topLeftBig}></div>
    <div className={styles.topLeftSmallIn}></div>
    <div className={styles.topLeftSmallOut}></div>
    <div className={styles.bottomLeftBig}></div>
    <div className={styles.bottomLeftSmallIn}></div>
    <div className={styles.bottomLeftSmallOut}></div>
    <div className={styles.bottomRightBig}></div>
    <div className={styles.bottomRightSmallIn}></div>
    <div className={styles.bottomRightSmallOut}></div>
    {children}
  </div>
)
