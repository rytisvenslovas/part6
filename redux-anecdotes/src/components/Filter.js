import React from 'react'
import { connect } from 'react-redux'
import {filter} from '../reducers/filterReducer'


const Filter = (props) => {
  const handleChange = (event) => {
      props.filter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <input onChange={handleChange} placeholder="Search"/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = {
  filter
}

const connectedFilters = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default connectedFilters