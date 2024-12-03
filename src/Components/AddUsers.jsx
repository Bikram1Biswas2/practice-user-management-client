const AddUsers = () => {

    const handleAddUser = e =>{
        e.preventDefault()

        const form = e.target 
        const name = form.name.value
        const email = form.email.value
        const gender = form.gender.value
        const status = form.status.value
        const newUser = {name,email,gender,status}
        console.log(newUser);

        fetch('http://localhost:7000/users',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

  return (
    <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold mb-6">Add User </h2>
      <form onSubmit={handleAddUser} className="">
        <label className=" w-full max-w-xs">
          <div className="">
            <span className="">Your Name</span>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className=" w-full max-w-xs">
          <div className="">
            <span className="">Your Email</span>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="block font-semibold mb-2">Gender:</label>
        <label className="inline-flex items-center">
          <input type="radio" name="gender" value="Male" className="mr-2" />
          Male
        </label>
        <label className="inline-flex items-center ml-4">
          <input type="radio" name="gender" value="Female" className="mr-2" />
          Female
        </label>

        <label className="block font-semibold mb-2">Status:</label>

        <label className="inline-flex items-center">
          <input type="radio" name="status" value="Active" className="mr-2" />
          Active
        </label>
        <label className="inline-flex items-center ml-4">
          <input type="radio" name="status" value="Inactive" className="mr-2" />
          Inactive
        </label>
        <br />
        <input className="btn btn-secondary" type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUsers;
