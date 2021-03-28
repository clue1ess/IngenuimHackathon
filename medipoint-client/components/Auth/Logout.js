import * as React from 'react';

const Nav = ({ props }) => {
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    return props.navigation.navigate('Login');
};

export default class Logout extends React.Component {

    render() {
        return <Nav props={this.props} />;
    }
}



