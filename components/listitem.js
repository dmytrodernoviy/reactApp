import React from 'react'
import Item from './item'

const ListItem = ({data}) => 
    data.map((person, i) => {
        return <Item key = {i} data = {person}/>
    })

export default ListItem