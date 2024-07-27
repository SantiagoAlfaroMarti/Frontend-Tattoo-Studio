import React, { useEffect, useState } from 'react';
import { CInput } from '../../Components/CInput/CInput';
import { useNavigate } from 'react-router-dom'
import { getUserProfile, modifyUserProfile } from '../../services/apiCall';
import "./Profile.css";

export const Profile = () => {
    const [profileData, sedProfileData] = useState({ name: "", email: "", CreatedAt: "" })
    const [editData, sedEditData] = useState({
        name: "",
        email: ""
    })
    const [editting, sedEditing] = useState(false)
    const passport = JSON.parse(localStorage.getItem("passport"))
    const navigate = useNavigate()

    useEffect(() => {
        if (!passport) {
            navigate("/login")
        } else {
            const bringMyProfile = async () => {
                const response = await getUserProfile(passport.token)
                sedProfileData(response.data)
                console.log(response)
            }
            bringMyProfile()
        }
    }, [])

    const editButtonHandler = () => {
        sedEditData({
            name: profileData.name,
            email: profileData.email
        })
        sedEditing(!editting)
    }

    useEffect(() => {
    }, [profileData])

    const editInputHandler = (e) => {
        sedEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const confirmButtonHandler = async () => {
        const token = passport.token;
        const response = await modifyUserProfile(editData, token)
        if (response.success) {
            const newData = await getUserProfile(token)
            sedProfileData(newData.data)
            sedEditing(!editting)
        }
    }

    const logout = () => {
        localStorage.removeItem("passport")
        navigate("/login")
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg p-4">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Profile</h1>
                            <h2 className="text-center mb-4">Welcome {profileData.email}</h2>
    
                            <div className={`mb-3 ${editting ? "" : "d-none"}`}>
                                <CInput
                                    type="text"
                                    name="first_name"
                                    placeholder="Name"
                                    className="form-control"
                                    emitFunction={editInputHandler}
                                />
                            </div>
                            <p className={`mb-3 ${editting ? "d-none" : ""}`}>
                                Name: {profileData.first_name || "Not available"}
                            </p>
    
                            <div className={`mb-3 ${editting ? "" : "d-none"}`}>
                                <CInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    emitFunction={editInputHandler}
                                />
                            </div>
                            <p className={`mb-3 ${editting ? "d-none" : ""}`}>
                                Email: {profileData.email}
                            </p>
    
                            <p className="mb-4">
                                Created_at: {profileData.created_at}
                            </p>
    
                            <div className="text-center">
                                <CInput
                                    type="button"
                                    name="edit"
                                    value={!editting ? "Edit" : "Cancel"}
                                    className="btn btn-primary"
                                    emitOnClickButton={editButtonHandler}
                                />
                                <CInput
                                    type="button"
                                    name="save"
                                    value="Save changes"
                                    className={`btn btn-success mx-2 ${!editting ? "d-none" : ""}`}
                                    emitOnClickButton={confirmButtonHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}