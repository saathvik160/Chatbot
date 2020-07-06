import React, { Component } from 'react';
import { connect } from 'react-redux';

class View extends Component {

  render() {
    return (
        <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{this.props.person.name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{this.props.person.age}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{this.props.person.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.person.email}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{this.props.person.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps)(View)
