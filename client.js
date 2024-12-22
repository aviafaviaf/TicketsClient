import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


export async function createEvent(eventData) {
    try {
        const response = await apiClient.post('/admin/event', eventData);
        alert('Мероприятие создано');
        return response.data;
    } catch (error) {
        console.error(error);
        alert('Ошибка создания мероприятия');
    }
}

export async function deleteEvent(eventId) {
    try {
        const response = await apiClient.delete(`/admin/event/${eventId}`);
        alert('Мероприятие удалено');
        return response.data;
    } catch (error) {
        console.error(error);
        alert('Ошибка удаления мероприятия');
    }
}

export async function getEvents(searchWord = '') {
    try {
        const response = await apiClient.get('/events', { params: { searchWord } });
        return response.data.events;
    } catch (error) {
        console.error(error);
        alert('Ошибка загрузки мероприятий');
    }
}

export async function getEventInfo(eventId) {
    try {
        const response = await apiClient.get(`/events/${eventId}`);
        return response.data.event;
    } catch (error) {
        console.error(error);
        alert('Ошибка загрузки информации о мероприятии');
    }
}

export async function login(email, password) {
    try {
        const response = await apiClient.post('/users/login', { email, password });
        alert('Успешный вход');
        return response.data;
    } catch (error) {
        console.error(error);
        alert('Ошибка авторизации');
    }
}

export async function register(userData) {
    try {
        const response = await apiClient.post('/users/registration', userData);
        alert('Регистрация успешна');
        return response.data;
    } catch (error) {
        console.error(error);
        alert('Ошибка регистрации');
    }
}

export async function getUserInfo(username) {
    try {
        const response = await apiClient.get(`/users/${username}`);
        return response.data.user;
    } catch (error) {
        console.error(error);
        alert('Ошибка загрузки данных пользователя');
    }
}

export async function createOrder(eventId) {
    try {
        const response = await apiClient.post('/users/order', { eventId });
        alert('Билет успешно куплен');
        return response.data;
    } catch (error) {
        console.error(error);
        alert('Ошибка покупки билета');
    }
}