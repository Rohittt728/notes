import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = (response) => {
        console.log(response);

        if (response.status !== 'unknown') {
            this.setState({
                isLoggedIn: true,
                userID: response.userId,
                picture: response.picture.data.url,
                name: response.name,
                email: response.email
            });
        }
    }

    componentClicked = () => {
        console.log("component was clciked");
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="303825904383226"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />);

        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
