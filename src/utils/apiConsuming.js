import axios from "axios";

// const back = process.env.APP_BACK;

export default function getSummaries(){
    return axios
      .get(`http://localhost:5000/api/summaries`)
      .then((results) => results.data);
}