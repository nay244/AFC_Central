import "./employeeList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { employeeRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EmployeeList() {
  const [data, setData] = useState(employeeRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="employeeListUser">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "phone", headerName: "Phone Number", width: 200 },
    {
      field: "monthlypay",
      headerName: "Monthly Pay",
      width: 150,
    },
    {
      field: "joindate",
      headerName: "Join Date",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/employee/" + params.row.id}>
              <button className="employeeListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="employeeListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="employeeList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
