import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FeedbackContext } from "../contexts/FeedbackContext";

export default function FeedbackItem({ feedback }) {
  var { removeFeedback, editFeedbackHandler } = useContext(FeedbackContext);

  return (
    <div className="card">
      <button className="close" onClick={() => removeFeedback(feedback._id)}>
        <FaTimes color="purple" />
      </button>
      <button
        className="close"
        style={{ marginTop: "30px" }}
        onClick={() => editFeedbackHandler(feedback)}
      >
        <FaEdit color="orange" />
      </button>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </div>
  );
}
