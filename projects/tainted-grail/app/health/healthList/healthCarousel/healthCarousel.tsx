'use client'

import { useState } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, MobileStepper } from '@mui/material'
import { Health } from './form/model'
import { HealthForm } from './form/healthForm'
import { changeForm } from '@/app/utils/utils'

type Props = {
  id: string
  healths: Health[]
}

export const HealthCarousel = (props: Props) => {
  const { id, healths } = props
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = healths.length
  const nextCharacter = healths[activeStep + 1]
  const prevCharacter = healths[activeStep - 1]

  const handleNext = () => {
    changeForm('')
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    changeForm('')
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ width: 1 }}>
      {healths.map((step, index) => (
        <div key={step.name}>
          {Math.abs(activeStep - index) == 0 ? (
            <HealthForm id={id} health={step} />
          ) : null}
        </div>
      ))}

      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          nextCharacter ? (
            <Button sx={{ width: 150 }} onClick={handleNext}>
              {nextCharacter.name}
              <KeyboardArrowRight />
            </Button>
          ) : (
            <Box sx={{ width: 150 }} />
          )
        }
        backButton={
          prevCharacter ? (
            <Button sx={{ width: 150 }} onClick={handleBack}>
              <KeyboardArrowLeft />
              {prevCharacter.name}
            </Button>
          ) : (
            <Box sx={{ width: 150 }} />
          )
        }
      />
    </Box>
  )
}
