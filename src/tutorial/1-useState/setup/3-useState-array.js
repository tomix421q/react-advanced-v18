import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
    })
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}

      <button className='btn' onClick={() => setPeople([])}>
        clear peoples
      </button>
      <button className='btn' onClick={() => setPeople([...data])}>
        load peoples
      </button>
    </>
  )
}

export default UseStateArray
