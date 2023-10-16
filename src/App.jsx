import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('Users added successfully')
        form.reset();
      }
    })
  }
  return (
    <div>
      <div>
        <nav>
          <Link to={'/'}>Add Users</Link>
          <Link to={'/users'}>Users</Link>
        </nav>
      </div>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Enter Your Name' />
        <br />
        <input type="email" name="email" placeholder='Enter Your Email' />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  )
}

export default App
