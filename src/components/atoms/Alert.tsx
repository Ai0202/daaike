import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

type Props = {
  text: string
  closeAlert: () => void
} & AlertProps

const Alert: React.FC<Props> = ({ text, severity, closeAlert, ...rest }) => (
  <MuiAlert
    className="text-neutral-text"
    onClose={() => {
      closeAlert()
    }}
    severity={severity}
    icon={false}
    variant="filled"
  >
    {text}
  </MuiAlert>
)

export default Alert
