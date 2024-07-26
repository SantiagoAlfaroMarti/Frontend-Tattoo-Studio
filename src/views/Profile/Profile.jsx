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
    const token = passport.token
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
        console.log("estamos editando", profileData)
    }, [profileData])

    const editInputHandler = (e) => {
        sedEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const confirmButtonHandler = async () => {
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
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">Profile</h1>
                <h2 className="profile-email">Welcome {profileData.email}</h2>
                {editting ? (
                    <>
                        <div className="profile-field">
                            <CInput
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="profile-input"
                                emitFunction={editInputHandler}
                            />
                        </div>
                        <div className="profile-field">
                            <CInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="profile-input"
                                emitFunction={editInputHandler}
                            />
                        </div>
                        <button
                            className="profile-button profile-save"
                            onClick={confirmButtonHandler}
                        >
                            Save changes
                        </button>
                        <button
                            className="profile-button profile-cancel"
                            onClick={editButtonHandler}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <p className="profile-detail">Name: {profileData.first_name || "Not available"}</p>
                        <p className="profile-detail">Email: {profileData.email}</p>
                        <p className="profile-detail">Created_at: {profileData.created_at}</p>
                        <button
                            className="profile-button profile-edit"
                            onClick={editButtonHandler}
                        >
                            Edit
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}