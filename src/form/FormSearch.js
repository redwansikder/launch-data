import React from 'react'
import { Input, Space } from 'antd'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { searchTerm } from './formReducer'

export default function FormSearch() {
  const { Search } = Input

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    search: '',
  })

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
    // if (!formData.search) return

    dispatch(searchTerm(formData.search))
    navigate('/')
    setFormData({
      search: '',
    })
  }

  // return (
  //   <Search placeholder='input search text' onSearch={
  //   }} enterButton />
  // )
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='search'
        onChange={handleChange}
        name='search'
        value={formData.search}
      />

      {/* <button>Submit</button> */}
    </form>
  )
}
