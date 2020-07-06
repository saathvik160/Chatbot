import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { connect } from 'react-redux';
import View from './View';

class ChatbotComp extends Component {

    handleName(name) {
        this.props.updateName(name);
    }

    handleAge(age) {
        this.props.updateAge(age);
    }

    handlePhone(phone) {
        this.props.updatePhone(phone);
    }

    handleEmail(email) {
        this.props.updateEmail(email);
    }

    handleCity(city) {
        this.props.updateCity(city);
    }

    render() {
        const steps = [
            {
                id: 1,
                message: "Welcome to Hubino!",
                trigger: 2
            },
            {
                id: 2,
                message: "Please enter your name.",
                trigger: 3
            },
            {
                id: 3,
                user: true,
                trigger: (e) => {
                    this.handleName(e.value);
                    return 4;
                }
            },
            {
                id: 4,
                message: "Hi {previousValue}",
                trigger: 5
            },
            {
                id: 5,
                message: "Please enter the following details so that we can get back to you",
                trigger: 6
            },
            {
                id: 6,
                message: "Enter your age",
                trigger: 7
            },
            {
                id: 7,
                user: true,
                trigger: (e) => {
                    this.handleAge(e.value);
                    return 8;
                }
            },
            {
                id: 8,
                message: "Please enter your contact number",
                trigger: 9
            },
            {
                id: 9,
                user: true,
                trigger: (e) => {
                    this.handlePhone(e.value);
                    return 10;
                }
            },
            {
                id: 10,
                message: "Please enter your email ID",
                trigger: 11
            },
            {
                id: 11,
                user: true,
                trigger: (e) => {
                    this.handleEmail(e.value);
                    return 12;
                }
            },
            {
                id: 12,
                message: "Which city are your from?",
                trigger: 13
            },
            {
                id: 13,
                user: true,
                trigger: (e) => {
                    this.handleCity(e.value);
                    console.log(this);
                    return 14;
                }
            },
            {
                id: 14,
                message: "Thank you for providing all the details",
                trigger: "view"
            },
            {
                id: "view",
                component: <View />,
                asMessage: true,
                trigger: 15
            },
            {
                id: 15,
                message: "Do you want to edit any of your information?",
                trigger: 16
            },
            {
                id: 16,
                options: [
                    { value: 1, label: 'Yes', trigger: 17 },
                    { value: 2, label: 'No', trigger: 29 }
                ]
            },
            {
                id: 17,
                message: "Which information do you want to edit?",
                trigger: 18
            },
            {
                id: 18,
                options: [
                    { value: 1, label: 'Name', trigger: 19 },
                    { value: 2, label: 'Age', trigger: 21 },
                    { value: 3, label: 'Phone', trigger: 23 },
                    { value: 4, label: 'Email', trigger: 25 },
                    { value: 5, label: 'City', trigger: 27 }
                ]
            },
            {
                id: 19,
                message: "Enter new name",
                trigger: 20
            },
            {
                id: 20,
                user: true,
                trigger: (e) => {
                    this.handleName(e.value);
                    return 30;
                }
            },
            {
                id: 21,
                message: "Enter new age",
                trigger: 22
            },
            {
                id: 22,
                user: true,
                trigger: (e) => {
                    this.handleAge(e.value);
                    return 30;
                }
            },
            {
                id: 23,
                message: "Enter new phone number",
                trigger: 24
            },
            {
                id: 24,
                user: true,
                trigger: (e) => {
                    this.handlePhone(e.value);
                    return 30;
                }
            },
            {
                id: 25,
                message: "Enter new email ID",
                trigger: 26
            },
            {
                id: 26,
                user: true,
                trigger: (e) => {
                    this.handleEmail(e.value);
                    return 30;
                }
            },
            {
                id: 27,
                message: "Enter new city of residence",
                trigger: 28
            },
            {
                id: 28,
                user: true,
                trigger: (e) => {
                    this.handleCity(e.value);
                    return 30;
                }
            },
            {
                id: 30,
                message: "Updated successfully",
                trigger: "view"
            },
            {
                id: 29,
                message: "Thank you. Have a great day!",
                end: true
            }
        ];
        const config = {
            width: "300px",
            height: "400px",
            floating: true
        };
        return (
            <div>
                <ChatBot steps={steps} {...config}></ChatBot>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        person: state.person
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => {
            dispatch({
                type: 'UPDATE_NAME',
                payload: {
                    name
                }
            })
        },
        updateAge: (age) => {
            dispatch({
                type: 'UPDATE_AGE',
                payload: {
                    age
                }
            })
        },
        updatePhone: (phone) => {
            dispatch({
                type: 'UPDATE_PHONE',
                payload: {
                    phone
                }
            })
        },
        updateEmail: (email) => {
            dispatch({
                type: 'UPDATE_EMAIL',
                payload: {
                    email
                }
            })
        },
        updateCity: (city) => {
            dispatch({
                type: 'UPDATE_CITY',
                payload: {
                    city
                }
            })
        }
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(ChatbotComp)
