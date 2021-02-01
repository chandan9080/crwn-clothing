import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/reducer/directory/directory.reselect'
import { connect } from 'react-redux'
import MenuItem from '../menu-items/menu-items'
import '../directory/directory.styles.scss'
const  Directory = ({sections}) => (
   
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))} 
      </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)
