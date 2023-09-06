import React, { useState } from "react";
import nameNode from "../img/namenode.png";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const MapReduce = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-mapreduce");
  };

  return (
    <div id="map_reduce" className="active">
      <section class="quick_link">
        <ul>
          <li>
            <a href="#task_tracker">TaskTracker</a>
          </li>
          <li>
            <a href="#job_tracker">JobTracker</a>{" "}
          </li>
        </ul>
      </section>
      <h2>What is MapReduce</h2>
      <p>
        <ul>
          <li>A s/w framework design for processing large volume of data.</li>
          <li>
            Divides data into set of implementation tasks to run in parallel on
            machine
          </li>
          <li>
            It will operates in 2 steps
            <ol>
              <li>Map Step (Mapper)</li>
              <li>Reduce Step (Reducer)</li>
            </ol>
          </li>
        </ul>
      </p>
      <h2>What is Mapper</h2>
      <p>
        <ul>
          <li>
            Master node takes the input (files) , then partition it into
            sub-problems and distributes it worker nodes.
          </li>
          <li>
            Map function takes a series of key/value pair. it process and
            generates 0 or more output key/value pair.
          </li>
        </ul>
      </p>
      <h2>What is Reducer</h2>
      <p>
        <ul>
          <li>
            The master node collects the ouptput of all sub-problems and combine
            them in some ways to form actual output.
          </li>
        </ul>
      </p>
      <section id="hadoop_terminology">
        <h2>Hadoop Terminology</h2>
        <p>
          <b>Job: </b>It is an executation of mapper and reducer across the
          dataset. So Every job have task
        </p>
        <p>
          <b>Task: </b>An executation of mapper or reducer on a slice of data
        </p>
        <p>
          <b>Task Attempt: </b>Particular instance of an attemt to execute a
          task on a machine
        </p>
      </section>
      <p>
        <li>
          Job tracker will take the input of a file and talk to the task tracker
        </li>
        <li>
          Map and reduce go to the every machine with the help of job tracker
        </li>
      </p>
      <img
        src={nameNode}
        alt="NameNode"
        style={{ height: "250px", width: "642px" }}
      />
      <h2>What is Job Tracket and Task Tracker</h2>
      <p id="job_tracker">
        <b>Job Tracker: </b>
        <ul>
          <li>The Job Tracker is the Part of NameNode.</li>
          <li>
            It is the central component responsible for coordinating and
            managing MapReduce jobs across the cluster
          </li>
          <li>
            It received job submissions, scheduled the tasks to different
            TaskTrackers, monitored their progress, and handled task failures by
            reassigning tasks to other available TaskTrackers.
          </li>
        </ul>
      </p>
      <p id="task_tracker">
        <b>Task Tracker: </b>
        <ul>
          <li>The Task Tracker is the Part of DataNode.</li>
          <li>It ran on each individual node in the cluster.</li>
          <li>
            It was responsible for executing the tasks assigned to it by the
            JobTracker.
          </li>
          <li>
            Each TaskTracker managed the execution of Map and Reduce tasks
            locally on that node and reported the status back to the JobTracker.
          </li>
        </ul>
      </p>
      <p>
        <h2>Overview of Hadoop</h2>
        <ul>
          <li>hadoop has a single point of name node</li>
          <li>
            If NameNode down, then Secondary NameNode come back. it is taking
            hour of time and secondary NameNode comes to back is a manual
            process
          </li>
          <li>
            we have to copy the image file and editlog then it will come back
          </li>
          <li>
            What is NameNode, Secondary NameNode, DataNode ? we will discus on
            next chapter.
          </li>
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
        <ul id="comment-mapreduce">
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

export default MapReduce;
