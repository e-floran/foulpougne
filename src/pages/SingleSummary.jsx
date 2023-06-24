import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import data from "../utils/data/data.json";
import "../styles/summaries.css";

export default function SingleSummary() {
  const [summary, setSummary] = useState(null);
  const [paragraphs, setParagraphs] = useState(null);
  const [pictures, setPictures] = useState(null);
  const { id } = useParams();

  let stockParagraphs = [];
  let stockPictures = [];

  useEffect(() => {
    setPictures(null);
    setSummary(() => {
      return data.summaries.find((ev) => ev.eventReference === id);
    });
    if (summary) {
      for (let i = 0; i < summary.eventText.length; i++) {
        stockParagraphs.push(<p key={i}>{summary.eventText[i]}</p>);
      }
      setParagraphs(stockParagraphs);
      if (summary.eventPictures.length > 1) {
        for (let i = 1; i < summary.eventPictures.length; i++) {
          stockPictures.push(
            <img
              key={i}
              src={summary.eventPictures[i]}
              alt={summary.eventTitle}
            />
          );
        }
        setPictures(stockPictures);
      }
    }
    // eslint-disable-next-line
  }, [id, summary]);

  return (
    <div className="pageContainer">
      <section className="innerMenu">
        <ul>
          {data.summaries.map((ev) => (
            <Link
              key={ev.id}
              to={"/summaries/" + ev.id}
              title={ev.eventReference}
            >
              <li>{ev.eventReference}</li>
            </Link>
          ))}
        </ul>
      </section>
      {summary && (
        <section className="summariesContent">
          <h2>{summary.eventTitle}</h2>
          <h3>{summary.eventDate}</h3>
          <article className="firstPictureContainer">
            <img src={summary.eventPictures[0]} alt={summary.eventTitle} />
          </article>
          <article className="textContainer">{paragraphs}</article>
          <article className="otherPicturesContainer">{pictures}</article>
        </section>
      )}
    </div>
  );
}
