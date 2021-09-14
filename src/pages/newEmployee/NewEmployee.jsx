import "./newEmployee.css";

export default function NewEmployee() {
  return (
    <div className="newEmployee">
      <h1 className="newEmployeeTitle">New Employee</h1>
      <form className="newEmployeeForm">
        <div className="newEmployeeItem">
          <label>Full Name</label>
          <input type="text" placeholder="Enter employee name" />
        </div>
        <div className="newEmployeeItem">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter employee phone number" />
        </div>
        <div className="newEmployeeItem">
          <label>Password</label>
          <input type="password" placeholder="Enter employee Password" />
        </div>
        <div className="newEmployeeItem">
          <label>Monthly Pay</label>
          <input type="number" placeholder="Enter employee pay" />
        </div>
        <div className="newEmployeeItem">
          <label>Join Date</label>
          <input type="date" placeholder="" />
        </div>
  
        <div className="newEmployeeItem">
          <label>Gender</label>
          <div className="newEmployeeGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        
        <button className="newEmployeeButton">Create</button>
      </form>
    </div>
  );
}
