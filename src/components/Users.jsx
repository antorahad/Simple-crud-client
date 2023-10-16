import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    const handleRemove = _id => {
        fetch(`http://localhost:3000/users/${_id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("Data has been deleted")
            }
        })
    }
    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Edit</button>
                    </Link>
                    
                     <button
                    onClick={() => {handleRemove(user._id)}}
                    >Remove</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;