import React, { useState } from "react";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const DescribeHadoopComponent = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-describeHadoopComponent");
  };
  return (
    <div id="desc_hadoop_component" className="active">
      <section class="quick_link">
        <ul>
          <li>
            <a href="#DataNode">DataNode</a>
          </li>
          <li>
            <a href="#secondaryNameNode">SecondayNameNode</a>{" "}
          </li>
          <li>
            <a href="#nameNode">NameNode</a>{" "}
          </li>
        </ul>
      </section>
      <h2 id="nameNode">What is NameNode</h2>
      <p>
        <ul>
          <li>
            It maintenance and manages the block representative on the
            DataNodes.
          </li>
          <li>This is a Centre piece of HDFS.</li>
          <li>
            It maintenance directory tree in the file system but does not store
            the data of these files itself rather then storing the metadata of
            the file system, which includes information about the directory
            structure, file locations, permissions, and other details about the
            files and directories stored in HDFS
          </li>
          <li>Client application talk to nameNode to locate a file.</li>
          <li>
            It response to successful client request. It returns list of
            relevant dataNodes where data lives.
          </li>
          <li>
            Use heartbeats to detect dataNode failure and choose new datanodes
            for new replica.
          </li>
          <li>It's a single point of failure.</li>
        </ul>
      </p>
      <h2 id="secondaryNameNode">What is Secondary NameNode</h2>
      <p>
        <ul>
          <li>Assistant demon for monitoring the state of HDFs.</li>
          <li>
            Each cluster has one secondary NameNode residing on it own machie
          </li>

          <li>No other dataNodes or task tracker runs on secondary NameNode</li>

          <li>Does not receive any real time changes to HDFS</li>

          <li>
            It will take the snapshot of metadata at intervals defined by the
            cluster configuration. snapshot minimizes the downtime and loss of
            data.
          </li>
        </ul>
      </p>
      <h2 id="DataNode">What is DataNode</h2>
      <p>
        <ul>
          <li>
            DataNodes are responsible for storing the actual data blocks of the
            files and replicating them across the cluster.
          </li>
          <li>Individual machines in a cluster are referred to a dataNodes</li>
          <li>
            In hdfs files broken into blocks of fixed size and that block are
            stored inside dataNodes{" "}
          </li>
          <li>
            DataNodes communicate with other dataNodes to replicate data blocks
            for redundancy
          </li>
          <li>
            DataNode connect to Namenode to established the service and send
            heartbeats to the NameNode
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
        <ul id="comment-describeHadoopComponent">
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

export default DescribeHadoopComponent;
