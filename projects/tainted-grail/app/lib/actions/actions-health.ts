'use server'

import { connect } from '@/app/lib/utils'
import { Healths } from '@/app/lib/models'
import { Health } from '@/app/health/healthList/healthCarousel/form/model'

export const updateHealth = async (updateForm: FormData) => {
  try {
    connect()
    const result = await Healths.findById(updateForm.get('id'))
    if (!result) return
    const currentHealths = result?.healths ?? []
    const newHealth: Health = {
      _id: updateForm.get('healthId') as string,
      name: updateForm.get('name') as string,
      location: updateForm.get('location') as string,
      agression: parseInt(updateForm.get('agression') as string),
      courage: parseInt(updateForm.get('courage') as string),
      practicality: parseInt(updateForm.get('practicality') as string),
      empathy: parseInt(updateForm.get('empathy') as string),
      caution: parseInt(updateForm.get('caution') as string),
      spirituality: parseInt(updateForm.get('spirituality') as string),
      energy: parseInt(updateForm.get('energy') as string),
      health: parseInt(updateForm.get('health') as string),
      terror: parseInt(updateForm.get('terror') as string),
      food: parseInt(updateForm.get('food') as string),
      wealth: parseInt(updateForm.get('wealth') as string),
      reputation: parseInt(updateForm.get('reputation') as string),
      experience: parseInt(updateForm.get('experience') as string),
      magic: parseInt(updateForm.get('magic') as string),
    }
    const index = currentHealths.findIndex(
      (health: Health) => health._id == newHealth._id
    )
    let newHealths = currentHealths
    if (index > -1) {
      newHealths = [
        ...currentHealths.slice(0, index),
        newHealth,
        ...currentHealths.slice(index + 1),
      ]
    }

    await Healths.findByIdAndUpdate(result._id, {
      healths: newHealths,
    })

    return { error: false }
  } catch (error) {
    return { error: true }
  }
}
