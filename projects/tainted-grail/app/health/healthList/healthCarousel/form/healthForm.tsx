'use client'

import { FormEvent, useState } from 'react'
import { Frame } from '@/app/ui/common/frame/frame'
import Image from 'next/image'
import { Health } from './model'
import { changeForm, submitForm } from '@/app/utils/utils'
import {
  EXP_LABEL,
  FOOD_LABEL,
  MAGIC_LABEL,
  REP_LABEL,
  WEALTH_LABEL,
} from '@/app/utils/constants'
import styles from './healthForm.module.css'

type Props = {
  id: string
  health: Health
}

export const HealthForm = (props: Props) => {
  const { id, health } = props

  const [formData, setFormData] = useState({
    location: health.location,

    agression: health.agression,
    energy: health.energy,
    empathy: health.empathy,

    courage: health.courage,
    health: health.health,
    caution: health.caution,

    practicality: health.practicality,
    terror: health.terror,
    spirituality: health.spirituality,

    food: health.food,
    wealth: health.wealth,
    reputation: health.reputation,
    experience: health.experience,
    magic: health.magic,
  })

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    if (name === 'location') {
      setFormData((prevState) => ({ ...prevState, ['location']: value }))
    } else {
      if (value === '0' || value === '')
        setFormData((prevState) => ({ ...prevState, [name]: 0 }))
      if (parseInt(value))
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const handleFocus = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  return (
    <Frame>
      <form
        id='healthForm'
        action={submitForm}
        onChange={() => changeForm('healthForm')}
        className={styles.healthForm}
      >
        <input type='hidden' name='id' value={id} />
        <input type='hidden' name='healthId' value={health._id} />
        <input type='hidden' name='name' value={health.name} />
        <input type='hidden' name='formName' value={'healthForm'} />
        <div className={styles.name}>
          <span>{health.name}</span>
          <input
            placeholder='Loc'
            name='location'
            className={styles.location}
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className={styles.primary}>
          <div className={styles.primaryItem}>
            <input
              name='agression'
              className={styles.input}
              value={formData.agression}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Agression'
              src='/health/agression.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='energy'
              className={styles.input}
              value={formData.energy}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Energy'
              src='/health/energy.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='empathy'
              className={styles.input}
              value={formData.empathy}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Empathy'
              src='/health/empathy.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='courage'
              className={styles.input}
              value={formData.courage}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Courage'
              src='/health/courage.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='health'
              className={styles.input}
              value={formData.health}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Health'
              src='/health/health.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='caution'
              className={styles.input}
              value={formData.caution}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Caution'
              src='/health/caution.png'
              width='50'
              height='50'
            />
          </div>

          <div className={styles.primaryItem}>
            <input
              name='practicality'
              className={styles.input}
              value={formData.practicality}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Practicality'
              src='/health/practicality.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='terror'
              className={styles.input}
              value={formData.terror}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Terror'
              src='/health/terror.png'
              width='50'
              height='50'
            />
          </div>
          <div className={styles.primaryItem}>
            <input
              name='spirituality'
              className={styles.input}
              value={formData.spirituality}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Image
              alt='Spirituality'
              src='/health/spirituality.png'
              width='50'
              height='50'
            />
          </div>
        </div>

        <div className={styles.secondary}>
          <div className={styles.secondaryItem}>
            <input
              name='food'
              className={styles.input}
              value={formData.food}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {FOOD_LABEL}
          </div>
          <div className={styles.secondaryItem}>
            <input
              name='wealth'
              className={styles.input}
              value={formData.wealth}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {WEALTH_LABEL}
          </div>
          <div className={styles.secondaryItem}>
            <input
              name='reputation'
              className={styles.input}
              value={formData.reputation}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {REP_LABEL}
          </div>
          <div className={styles.secondaryItem}>
            <input
              name='experience'
              className={styles.input}
              value={formData.experience}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {EXP_LABEL}
          </div>
          <div className={styles.secondaryItem}>
            <input
              name='magic'
              className={styles.input}
              value={formData.magic}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {MAGIC_LABEL}
          </div>
        </div>
      </form>
    </Frame>
  )
}
