import { Link } from "react-router-dom";
import "./employee.css";

export default function Employee() {
  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <Link to="/newEmployee">
          <button className="employeeAddButton">Create</button>
        </Link>
      </div>
      <div className="employeeContainer">
        
        <div className="employeeUpdate">
          <span className="employeeUpdateTitle">Edit</span>
          <form className="employeeUpdateForm">
            <div className="employeeUpdateLeft">
              <div className="employeeUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="New employee name"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="New phone number"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Monthly Pay</label>
                <input
                  type="text"
                  placeholder="New monthly pay"
                  className="employeeUpdateInput"
                />
              </div>

              <div className="employeeUpdateLeft">
              <button className="employeeUpdateButton">Update</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
