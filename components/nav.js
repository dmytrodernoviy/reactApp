import React from 'react'

const Search = ({onChange, showChart}) => 
    <nav>
        <input type="text" id="input-search" onChange = {onChange}></input>
        <button id="show-chart" onClick = {showChart}>Show chart</button>
    </nav>

export default Search