import React, {Component} from 'react'
import './Menu.css'
import axios from 'axios'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            ramens: []
        }
    }

    componentDidMount = async () => {
        await this.getRamen()
    }

    getRamen = () => {
        axios.get('/api/menus')
        .then(res => {
            this.setState({
                ramens: res.data
            })
            console.log(this.state.ramens)
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log()
        const mapRamen = this.state.ramens.map((ramen, index) => (
            <div className='menu' ramen={ramen} key={index}>
                <div className='name-price'>
                    <h4>{ramen.name}</h4>
                    <h5 className='ramen-price'>${ramen.price}</h5>
                </div>
                <div className='description'>
                    <h5>{ramen.description}</h5>
                </div>
            </div>
        ))
        return(
            <div className='menu-body' id='menus'>
                <div className='images-container'>
                    {/* <img className='ramen-one' alt='ramen-one' src='https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' width='500' /> */}
                    <img className='ramen-two' alt='ramen-two' src='http://shizuku.com.au/img/ramen.gif' width='500' height='500' />
                </div>
                {mapRamen}
            </div>
        )
    }
}

export default Menu