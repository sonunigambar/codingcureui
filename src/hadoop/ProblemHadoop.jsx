import React, { useState } from "react";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const ProblemHadoop = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-problemInHadoop");
  };
  return (
    <div id="problem_in_hadoop" className="active">
      <h2>Problem in Hadoop (1.0)</h2>
      <p>
        <ul>
          <li>Hadoop has a single point of NameNode. </li>
          <li>
            if NameNode down then secondary nameNode comes back. It is it taking
            hour of time and secondary NameNode come to back is a manual
            process.
          </li>
          <li>
            we have to copy the image file and editlog then it will come back.
          </li>
          <li>
            But on top of the HDFS only 1 technique is there. i.e, MapReduce.
          </li>
          <li>MapReduce is done using the help of job Tracker.</li>
          <li>
            When we submit a job, then jobTracker will do the clustor resource
            management.
          </li>
          <h5>What is cluster Resource Management</h5>
          which machine have how many cpu & how many cpu give to which job.
          <li>
            MapReduce doesnn't have capable of 1000 jobs , more cpu , more RAM,
            more use casses to run job Tracker can't take more then that.
          </li>
          <li>Single NameNode, single point of failure.</li>
          <li>client & cluster must be at same version</li>
          <li>Single job Tracker recive all the job as paralel</li>
          <li>That's why Hadoop 2.0 came to the industry.</li>
        </ul>
      </p>
      <span className="comment-box">
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            cols={150}
            placeholder="Enter your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit" className="cmt_btn">
            send
          </button>
        </form>
      </span>
      <span className="comment-list">
        <ul id="comment-problemInHadoop">
          {data.map((comment) => (
            <li key={comment.commentId}>
              <p>{comment.commentContent}</p>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default ProblemHadoop;
