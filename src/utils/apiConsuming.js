import axios from "axios";

// const back = process.env.APP_BACK;

export default function getSummaries(setter){
  axios
  .get("http://localhost:5000/api/summaries")
  .then((response) => response.data)
  .then((data) => {
    setter(data)
  });
}