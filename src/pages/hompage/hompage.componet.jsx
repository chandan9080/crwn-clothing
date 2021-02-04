import React from 'react'
import './homepage.styles.scss'
import { HomepageStyle } from './homepage.styles'
import Directory from '../../components/directory/directory.components'
const HomePage = () => {
  return (
    <HomepageStyle>
      <Directory />
    </HomepageStyle>
  )
}
export default HomePage
