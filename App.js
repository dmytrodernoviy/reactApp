import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import './App.css';
import ListItem from './components/listitem'
import Nav from './components/nav';
import Layout from './components/chart';
import Preloader from './components/preloader'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        loading: false,
        nameFilter: this.data,
        displayChart: false
      }
    
    this.handleSearch = this.handleSearch.bind(this)
    this.hideChart = this.hideChart.bind(this)
    this.showChart = this.showChart.bind(this)
    }

    componentDidMount() {
      this.setState({loading: true})
        fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(obj => obj.results)
        .then(data => this.setState({
            loading: false,
            data
          }))         
    }

    handleSearch(event) {
      let value = event.target.value.toLowerCase();
      let filterSearch = this.state.data.filter((el) => {
        let userName = el.name.first.toLowerCase();
        return userName.startsWith(value)
      })

      if(filterSearch.length === 0) {
        event.target.value = "";
        return alert("СОВПАДЕНИЙ НЕТ!")
      }

      this.setState({
        nameFilter: filterSearch
      })
    }

    hideChart() {
      this.setState({
        displayChart: !this.state.displayChart
      })
    }

    showChart() {
      this.setState({
          displayChart: !this.state.displayChart
      }) 
    }

    render() {
      const { data, loading, nameFilter, displayChart } = this.state
      let show = null;
      if(displayChart) {show = <Layout data = {nameFilter || data} hideChart = {this.hideChart} />} else {show = null}
        return (loading) ?
          <Preloader /> :
            <div>
              {show}
              <Nav  data = {data} 
                    onChange = {this.handleSearch}
                    showChart = {this.showChart}/>
              <ListItem data = {nameFilter || data} />
            </div>
      }
}

export default App;
