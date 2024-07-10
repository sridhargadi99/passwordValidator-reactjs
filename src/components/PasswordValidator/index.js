// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  Heading,
  Description,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)
  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input value={password} type="password" onChange={onChangePassword} />
        <ErrorMessage>
          {password.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </ErrorMessage>
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
