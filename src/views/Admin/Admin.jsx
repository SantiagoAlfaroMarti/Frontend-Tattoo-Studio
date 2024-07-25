import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/apiCalls";
import "./Admin.css"

export const Admin = () => {
  const [users, setUsers] = useState([]);

  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token;

  useEffect(() => {
    const bringAllUsers = async () => {
      const allUsers = await getAllUsers(token);
      console.log(allUsers);
      setUsers(allUsers.data)
    };
    bringAllUsers()
  }, []);

  return (
    <>
      <h1>Admin</h1>
      <div className="users-container">
        <div className="table-row">
            <div className="content">id</div>
            <div className="content">email</div>
            <div className="content">active</div>
            <div className="content">actions</div>
        </div>
        { users.length && users.map((user) => {
            return (
            <div className="table-row" key={user.id}>
                <div className="content">{user.id}</div>
                <div className="content">{user.email}</div>
                <div className="content">{user.is_active ? "active" : "inactive"}</div>
                <div className="content">actions</div>
            </div>
            )
        })}
      </div>
    </>
  );
};