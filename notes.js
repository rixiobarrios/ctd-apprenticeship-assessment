
// Front-End Challenge (Phone book):

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({addNewUser}) {
  const [userData, setUserData] = useState ({
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999" 
  });

  const handleUserChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.userFirstname || !userData.userLastname || !userData.userPhone) return;
    addNewUser(userData);
    setUserData({
      userFirstname: "",
      userLastname: "",
      userPhone: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userData.userFirstname}
        onChange={handleUserChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userData.userLastname}
        onChange={handleUserChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userData.userPhone}
        onChange={handleUserChange}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({contacts}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {contacts.map((obj) => (
          <tr key={obj.id}>
            <td style={style.tableCell}>{obj.userFirstname}</td>
            <td style={style.tableCell}>{obj.userLastname}</td>
            <td style={style.tableCell}>{obj.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {

  const [contacts, setContacts] = useState([]);

  const sortFlag = (x, y) => {
    if (x.userLastname.toLowerCase() < y.userLastname.toLowerCase()) return -1;
    if (x.userLastname.toLowerCase() > y.userLastname.toLowerCase()) return 1;
    return 0;
  };

  const sortContacts = (data) => {
    const sortedList = data.sort(sortFlag);
    setContacts(sortedList);
  };

  const addNewUser = (userData) => {
    const newUser = [...contacts, userData];
    sortContacts(newUser);
  };

  return (
    <section>
      <PhoneBookForm addNewUser={addNewUser}/>
      <InformationTable contacts={contacts}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')



// Front-End Challenge (TodoApp): 



// Front-End Challenge (Unordered List):

import React from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  let names = [];
  let ages = [];
  data.forEach((person, i) => {
      names.push(`${person.name} `);
      ages.push(`${person.age} `);   
  });

  const listNames = names.map((name) => <li>{name}</li>);
  const listAges = ages.map((age) => <li>{age}</li>); 

  return(
    <span>
      <ul>{listNames}</ul>
      <ul>{listAges}</ul>
    </span>
  );
}

const data = [
  {name: "Daniel", age: 25},
  {name: "John", age: 24},
  {name: "Jen", age: 31}
];

ReactDOM.render(
  <DataList data={data} />,
  document.getElementById('root')
);