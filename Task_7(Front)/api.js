// GET 'http://localhost:3050/api/v1/users' - получение всех пользователей
//  GET 'http://localhost:3050/api/v1/users/:id' - получение текущего пользователя
// POST 'http://localhost:3050/api/v1/users/' - создание пользователя
// PUT 'http://localhost:3050/api/v1/users/:id' - обновление пользователя
// DELETE  'http://localhost:3050/api/v1/users/:id' - удаление пользователя
// PATCH 'http://localhost:3050/api/v1/users//:id/favorite' - обновление favorite

const BASE_URL = 'http://localhost:3050/api/v1/users'

class API {
    constructor(url) {
        this.url = url
    }

    async getAllUsers() {
        try {
            const response = await fetch(`${this.url}?limit=100`)
            const result = await response.json()
            return result
        } catch (error) {
            console.error('Error in getAllUsers:', error.message);
        }
    }

    async getUserById(id) {
        try {
            const response = await fetch(`${this.url}/${id}`)
            const result = await response.json()
            return result
        } catch (error) {
            console.error('Error in getUserById:', error.message);
        }
    }

    async createUser(data) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.message || `HTTP error: ${response.status}`);
            }
            return result
        } catch (error) {
            console.error('Error in createUser:', error.message);
            throw error
        }
    }

    async updateUser(id, data) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.message || `HTTP error: ${response.status}`);
            }
            return result
        } catch (error) {
            console.error('Error in updateUser:', error.message);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return result
        } catch (error) {
            console.error('Error in deleteUser:', error.message);
            throw error;
        }
    }
    
    async updateFavorite(id) {
        try {
            const response = await fetch(`${this.url}/${id}/favorite`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return result
        } catch (error) {
            console.error('Error in updateFavorite:', error.message);
        }
    }
}

const api = new API(BASE_URL);
export default api;