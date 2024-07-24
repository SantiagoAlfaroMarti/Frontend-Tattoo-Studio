const URL = 'http://localhost:4000/api';

export const getAllServices = async () => {
    const response = await fetch(`${URL}/api/services`);
    return await response.json();
};

export const register = async (credentials) => {
    const request = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const result = await request.json();
    return result;
}
export const userLogin = async (credentials) => {
    const request = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const result = await request.json();
    return result;
}
export const getUserProfile = async (token) => {
    const response = await fetch(`${URL}/api//users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json()
}
export const showMyAppointments = async (token) => {
    const response = await fetch(`${URL}/api/appointments/scheduled`, {
        method: "GET",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    return await response.json();
};

export const modifyUserProfile = async (changes, token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(changes),
    });

    return await response.json();
};

export const getAllUsers = async (token) => {
    const response = await fetch(`${URL}/api/users`, {
        method: "GET",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    return await response.json();
};