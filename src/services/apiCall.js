const URL = 'http://localhost:4000/api'

export const registerUser = async (credentials) => {
    const request = await fetch(`${URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const result = await request.json();
    return result;
}

export const loginUser = async (credentials) => {
    const request = await fetch(`${URL}/login`, {
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
    const response = await fetch(`${URL}/users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json()
}

export const updateProfile = async (changes, token) => {
    const response = await fetch(`${URL}/profile/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(changes),
    });
    return await response.json()
}

export const getUsers = async (token) => {
    const response = await fetch(`${URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json()
}

export const deleteUserById = async (token, id) => {
	const response = await fetch(`${URL}/users/${+id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
	return await response.json()
}