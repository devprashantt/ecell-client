import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_HOST,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

//Get all events
export const getEvents = () => {
    return apiClient.get("/event");
};

//Get event by id
export const getEvent = id => {
    return apiClient.get("/event/" + id);
};

//Create event
export const createEvent = event => {
    return apiClient.post("/event/create", event);
};

//Update event
export const updateEvent = (id, event) => {
    return apiClient.put("/event/update/" + id, event);
};

//Delete event
export const deleteEvent = id => {
    return apiClient.delete("/event/delete/" + id);
};
