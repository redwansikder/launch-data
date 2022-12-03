import React from 'react'
import { Button, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { date } from './formReducer'

export default function FormDropdown() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //state to save form data
  const [formData, setFormData] = React.useState({
    timeBlock: '',
  })

  const lastYear = () => {
    const lastYear = new Date().toISOString().split('T')[0].split('-')[0] - 1
    return lastYear
  }

  const lastMonth = () => {
    const thisDate = new Date().toISOString().split('T')[0]
    const thisYear = thisDate.split('-')[0]
    const prevMonth = thisDate.split('-')[1] - 1
    const lastMonth = thisYear.concat('-', prevMonth)
    return lastMonth
  }

  const lastWeek = () => {
    const now = new Date()
    const prevWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7
    )
    return prevWeek.toISOString().split('T')[0]
  }

  //function to update form data state
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    //submit data to somewhere
    dispatch(date(formData.timeBlock))
    // console.log(formData)
    navigate('/')

    //setting form data to blank
    setFormData({
      timeBlock: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor='timeBlock'>Filter data by</label> */}

      <select
        id='timeBlock'
        onChange={handleChange}
        name='timeBlock'
        value={formData.timeBlock}
      >
        <option value=''>All</option>
        <option value={lastWeek()}>Last Week</option>
        <option value={lastMonth()}>Last Month</option>
        <option value={lastYear()}>Last Year</option>
      </select>

      <Button>Submit</Button>
    </form>
  )
}
