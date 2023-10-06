import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class GetUserDetail extends Component {
    constructor() {
        super();
        this.state = {
            mobileNumber: "1234567890"
        };
    }
    componentDidMount() {
        this.props.socket.on('checkUserDetailResponse', data => {
            console.log(data);
            this.props.registrationConfirmation(data);
        });
    }
    submitMobileNumber = () => {
        this.props.socket.emit('checkUserDetail', { "mobileNumber": this.state.mobileNumber });
    };
    onMobileNumberChange = (e) => {
        this.setState({ mobileNumber: e.target.value });
    };
    render() {
        return (
            <Form className='text-center'>
                <Form.Group>
                    <Form.Label className='m-3'>Enter Your Mobile Number</Form.Label>
                    <Form.Control type="number" value={this.state.mobileNumber} onChange={this.onMobileNumberChange} />
                    <Button className='btn-lg mt-3 py-2 px-4' disabled={this.state.mobileNumber.length !== 10} onClick={this.submitMobileNumber} variant="primary" type="button">Start</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default GetUserDetail;