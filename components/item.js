import React, {Component} from 'react'
import AddInfo from './add-info';
import Vertical from './plus';

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false
        }

        this.showInfo = this.showInfo.bind(this)
    }

    showInfo() {
        this.setState({
            display: !this.state.display 
        })
    }

    render() {
        const {data} = this.props
        const {display} = this.state
        let info = null;
        let vertical = null;
        if(display) {info = <AddInfo data = {data} />} else {info = null}
        if(!display) {vertical = <Vertical />} else {vertical = null}
        return (
        <div className="item" onClick = {this.showInfo}>
        <div className="main-info">
            <div><img className="photo" src={data.picture.medium} alt="user-img"></img></div>
            <span className="last-name"><i>{data.name.last}</i></span>
            <span className="first-name"><i>{data.name.first}</i></span>
            <span className="user-name">{data.login.username}</span>
            <span className="phone-number">{data.phone}</span>
            <span className="location">{data.location.city}</span>
            <div  className="plus">
                <div>
                    <div className="horizontal">
                        {vertical}
                    </div>
                </div>
            </div>
            </div>
            {info}
        </div>
        )
    }
}

export default Item


