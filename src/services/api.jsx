import axios from "axios"

//00000000/json/   <-- exemplo de string depois do baseURL
const api = axios.create({
    baseURL: "https://viacep.com.br/ws"
});

export default api;