import axios from "axios";

export const createConnectAccount = async (token) =>
    await axios.post(
        `http://localhost:5050/api/create-connect-account`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );