import './Button.css'

export const Button = ({ id, text, action }) => {
  return (
    <button onClick={action} id={id}>
      {text}
    </button>
  )
}
