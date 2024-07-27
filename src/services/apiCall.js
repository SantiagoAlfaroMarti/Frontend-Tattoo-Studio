const URL = 'http://localhost:4000/api';

export const registerUser = async (credentials) => { // Renombrar función
    try {
        const request = await fetch(`${URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!request.ok) { // Verificar si la respuesta es correcta
            throw new Error('La respuesta de la red no fue correcta');
        }

        const result = await request.json();
        return result;
    } catch (error) {
        console.error('Error en la llamada a la API:', error);
        return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
    }
};

export const userLogin = async (credentials) => {
    try {
    const request = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const result = await request.json();
    return result;
} catch (error) {
    console.error('Error en la llamada a la API:', error);
    return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
}
};

export const getUserProfile = async (token) => {
    try {
    const response = await fetch(`${URL}/users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json()
} catch (error) {
    console.error('Error en la llamada a la API:', error);
    return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
}
};

export const modifyUserProfile = async (changes, token) => {
    try {
    const response = await fetch(`${URL}/users/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(changes),
    });
    return await response.json()
} catch (error) {
    console.error('Error en la llamada a la API:', error);
    return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
}
};

export const getAllUsers = async (token) => {
    try {
    const response = await fetch(`${URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json()
} catch (error) {
    console.error('Error en la llamada a la API:', error);
    return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
}
};

export const deleteUserById = async (token, id) => {
    try {
	const response = await fetch(`${URL}/users/:id${+id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
	return await response.json()
} catch (error) {
    console.error('Error en la llamada a la API:', error);
    return { success: false, message: 'Algo salió mal' }; // Devolver un objeto de error predeterminado
}
};

export const createAppointments = async (data, token) => {
    data.service_id = parseInt(data.service_id);
    const response = await fetch(`${URL}/appointments/create`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    return await response.json();
  };

export const getAppointmentsUser = async (token) => {
    try {
        const response = await fetch(`${URL}/appointments/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching appointments:", error);
        throw error;
    }
}; 

export const deleteAppointmentsUser = async (token, id) => {
    try {
        const response = await fetch(`${URL}/appointments/${+id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Error deleting appointments:", error);
        throw error;
    }
}