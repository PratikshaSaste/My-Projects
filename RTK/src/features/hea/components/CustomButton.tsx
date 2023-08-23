import { Button, makeStyles } from '@material-ui/core'

// ** MATERIAL UI MAKESTYLES CHANGES
const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    padding: '10px 1rem',
    marginLeft: '0.5rem',
    textTransform: 'none'
  }
}))

type CustomButtonProps = {
  buttonName: string
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | undefined
  variant: string
}

const CustomButton = ({
  color,
  buttonName,
}: CustomButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      variant='contained'
      color={color}
      className={classes.button}
    >
      {buttonName}
    </Button>
  )
}

export default CustomButton
