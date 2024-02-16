import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import DoneIcon from '@mui/icons-material/Done'
import DoneAllIcon from '@mui/icons-material/DoneAll'

export const NoteButtons = ({
  onEdit,
  doubleCheck
}: {
  onEdit: boolean
  doubleCheck: boolean
}) => {
  return (
    <IconButton
      color={onEdit ? (doubleCheck ? 'success' : 'primary') : 'error'}
      type='submit'
    >
      {onEdit ? doubleCheck ? <DoneAllIcon /> : <DoneIcon /> : <ClearIcon />}
    </IconButton>
  )
}
