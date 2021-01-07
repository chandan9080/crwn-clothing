import React, { Component } from 'react'
import './sign-up.style.scss'
import { auth, createUserAuth } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('passwords do not matched')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )
      await createUserAuth(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h1 className="title">I do not have an account</h1>
        <span>Sign Up with your Email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="display Name"
            onChange={this.handleChange}
            required
          />{' '}
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            required
            value={password}
            label="password"
            onChange={this.handleChange}
          />{' '}
          <FormInput
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            label="confirmPassword"
            onChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignUp
