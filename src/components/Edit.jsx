import { useLoaderData } from "react-router-dom";

const Edit = () => {

    const loadedUser = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email}

        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method : "PUT",
            headers: {
                "content-type" : "application/json"
              },
              body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('user updated successfully')
            }
        })
        
    }

    return (
        <div>
            <h3>Update profile</h3>
            <p>{loadedUser.name}</p>
            <p>{loadedUser.email}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Edit;