import React, { Component } from 'react'


 class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        name: this.props.person.name,
        job: this.props.person.job,
        dob: this.props.person.dob,
        phone: this.props.person.phone,
        email: this.props.person.phone
      }
    }
  }
  render() {
    return (
      <>
      <div>
        <br></br>
      <p>Name: {this.state.person.name}</p>
      <p>Job: {this.state.person.job}</p>
      <p>DOB: {this.state.person.dob}</p>
      <p>Phone#: {this.state.person.phone}</p>
      <p>Email: {this.state.person.email}</p>
      </div>
      {/* <div>
        <ul>
        VERY EASY
          <li>Yoana Arias-Magana</li>
          <li>Coding apprentice @ R2H</li>
          <li>02/03/1998</li>
          <li>678-993-8260</li>
          <li>yarias-magana@r2hstudent.org</li>
        </ul>
      </div> */}
      </>
    )
  }
}
export default BasicInfo;