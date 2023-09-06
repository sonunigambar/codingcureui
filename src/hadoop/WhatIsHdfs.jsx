import React, { useState } from "react";
import hadoopImage from "../img/hadoop.png";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const WhatIsHdfs = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-interface");
  };

  return (
    <div class="active" id="what_is_hadoop">
      <h2>What is HDFS</h2>
      <p>
        <i>
          It is a distributed file system designed to store vast amounts of data
          across multiple machines in a Hadoop cluster. Hadoop is an open-source
          framework that enables distributed processing of large datasets across
          clusters of commodity hardware.
        </i>
        <p>
          <b>1. Distributed Storage:</b> HDFS breaks large files into smaller
          blocks and stores these blocks across multiple machines in the
          cluster. This distributed storage approach ensures scalability and
          fault-tolerance.
        </p>
        <p>
          <b>2. Replication:</b>HDFS replicates each data block multiple times
          across different nodes in the cluster. This replication ensures data
          redundancy and fault tolerance. By default, HDFS replicates each block
          three times, but this value can be configured according to the
          cluster's requirements.
        </p>

        <li>HDFS stands for hadoop distributed file system</li>
        <li>This is Primary storage system for Hadoop</li>
        <li>Distributed, portable, scalable file system written in java</li>
        <li>Files are broken down and stored into multiple machine</li>
        <li>Designed for large scale distributed data processing</li>
        <li>It follows master and slave architecture</li>
      </p>
      <p>
        HDFS consist of Name node Secondary Name node Data node Job Tracker Task
        Tracker
        <li>Namenode server to host the filesystem index</li>
        <li>Datanodes, where the data blocks are stored</li>
        <li>Seconday NameNode takes snapshot of Name node memory sttusture</li>
        <li>
          Name node has 2 component
          <ol>
            <li>Image</li>
            <li>Editlog</li>
          </ol>
          <ul>
            <li>
              Whenever we write the file to the machine, the slave node sending
              thier information. Then someone will receive that information.i.e,
              nothing but Editlog. So Editlog have all the information.
            </li>
            <li>
              Let's say Namenode crashed, then when coming back the NameNode the
              editlog send the metadata to the RAM
            </li>
            <li>
              When we rebuilding the editlog goes to the RAM as well as image.
              Then the editlog has cleared
            </li>
            <li>
              When all the slavenode sending metadata to the Namenode, it is
              commiting the log into secondary namenode also
            </li>
            <li>
              But for Secondary NameNode Editlog can not go to RAM rather then
              it only goes to image
            </li>
            <img src={hadoopImage} style={{ width: "70%", height: "50%" }} />
          </ul>
        </li>
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
        <ul id="comment-interface">
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

export default WhatIsHdfs;
