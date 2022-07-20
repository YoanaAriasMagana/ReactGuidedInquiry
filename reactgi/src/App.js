import { Component } from 'react'; 
import BasicInfo from './Components/BasicInfo';

  const peopleInfo= [
    {
      name: 'Yoana Arias-Magana',
      job: 'Coding Apprentice @ R2H',
      dob: '02/03/1998',
      phone: '678-993-8260',
      email: 'arias573@gmail.com'
    },
    {
      name: 'Bob Brown',
      job: 'Cook @ McDonalds',
      dob: '10/17/2001',
      phone: '123-421-6789',
      email: 'bobbrown@yahoo.com'
    },
    {
    name: 'Tim Smith',
    job: 'Cashier @ Kroger',
    dob: '1/11/1995',
    phone: '937-280-7531',
    email: 'timsmith10@gmail.com'
    }
  ]

  function showPeople(arr) { //HARD
    return arr.map((person) => {
      return <BasicInfo person={person} />
    }
    )
  }
  
   class App extends Component {  //EASY
    constructor(props){  
      super(props);  
      this.state = {
          person: {
          }
      }
    }  
      render() {
        return (showPeople(peopleInfo))
    }
  }
  export default App;
  

