import React, {Component, useState} from 'react'
import Select from 'react-select'
import Calendar from 'react-calendar';
import './Reservation.css'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'

const options = [
    { value: 1, label: '1 person' },
    { value: 2, label: '2 people' },
    { value: 3, label: '3 people' },
    { value: 4, label: '4 people' },
    { value: 5, label: '5 people' },
    { value: 6, label: '6 people' },
    { value: 7, label: '7 people' },
    { value: 8, label: '8+ people' },
  ];

const timeOptions = [
    {value: '10AM', label: '10AM'},
    {value: '11AM', label: '11AM'},
    {value: '12PM', label: '12PM'},
    {value: '1PM', label: '1PM'},
    {value: '2PM', label: '2PM'},
    {value: '3PM', label: '3PM'},
    {value: '4PM', label: '4PM'},
    {value: '5PM', label: '5PM'},
    {value: '6PM', label: '6PM'},
    {value: '7PM', label: '7PM'},
    {value: '8PM', label: '8PM'},
    {value: '9PM', label: '9PM'}
]


class Reservation extends Component {
    constructor() {
        super()
        this.state = {
            numberOfPeople: '',
            date: new Date(),
            reservationTime: '',
            customerName: '',
            phoneNumber: '',
            isReserved: false
        }
    }

    onChange = date => this.setState({ date })

    handleChange = numberOfPeople => {
        this.setState({ numberOfPeople });
        console.log(`Option selected:`, numberOfPeople);
      };

    handleTimeChange = reservationTime => {
        this.setState({reservationTime});
        console.log(this.state.reservationTime)
    }

    handleInfo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addReservation = () => {
        axios.post('/api/new-reservation', {
            number_of_customer: this.state.numberOfPeople.value,
            date: this.state.date,
            time: this.state.reservationTime.value,
            customer_name: this.state.customerName,
            phone_number: this.state.phoneNumber
        })
        .then(() => {
            
        })
        .catch(err => console.log(err))
        this.toggleReserved()
    }

    toggleReserved = () => {
        this.setState({
            isReserved: !this.state.isReserved
        })
    }

    render() {
        console.log(this.state.isReserved)
        console.log(this.props)
        const { numberOfPeople } = this.state;
        // console.log(this.state.customerName)
        // console.log(this.state.phoneNumber)
        // console.log(this.state.numberOfPeople.value)
        console.log(this.state.date)
        // console.log(this.state.reservationTime.value)
        return(
            <div>
                {!this.state.isReserved
                ?
                (
                    <div className='reservation-body' id='reservation'>
                <form className='option-container'>
                    <h2 className='reservation-title'>Reservation</h2>
                    <div>
                        <input className='name-input' type='text' name='customerName' onChange={(e) => this.handleInfo(e)} placeholder='Name' /><br />
                        <input className='number-input' name='phoneNumber' onChange={(e) => this.handleInfo(e)} placeholder='Number' />
                    </div>
                    <div className='number-of-people'>
                        <p>Number of People</p>
                        <Select className='number-options' value={numberOfPeople} options={options} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Date</p>
                        <Calendar
                        className='calendar'
                        onChange={this.onChange}
                        value={this.state.date}
                        />
                    </div>
                    <div>
                        <p>Time</p>
                        <Select className='time-options' value={this.state.reservationTime} options={timeOptions} onChange={this.handleTimeChange} />
                    </div>
                    <button className='reservation-btn' onClick={this.addReservation}>Find a Table</button>
                </form>
            </div>
                ):(
                    <div className='reservation-confirmation'>
                        <div className='confirmation-box'>
                            <h2 className='confirmation-text'>We've received your reservation request.<br/> We wil be in touch soon. Thank you</h2>
                        </div>
                    </div>
                )
                }
            </div>
    
        )
    }
}

export default Reservation