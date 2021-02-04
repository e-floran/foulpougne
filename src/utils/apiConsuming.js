import axios from "axios";

const back = process.env.APP_BACK;

export default function getSummaries(){
    return axios
      .get(`${back}/api/summaries`)
      .then((results) => results.data);
}