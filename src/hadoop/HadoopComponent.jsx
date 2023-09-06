import React, { useState } from 'react'
import lowLevelImg from '../img/low_level_dig.png'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';
const HadoopComponent = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-hadoopComponent");
  };
  return (
    <div id="hadoop_component" className='active'>
                <h2>Hadoop Component</h2>
                <img src={lowLevelImg} style={{width:'70%', height: '50%'}}/>

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
        <ul id="comment-hadoopComponent">
          {data.map((comment) => (
            <li key={comment.commentId}>
              <p>{comment.commentContent}</p>
            </li>
          ))}
        </ul>
      </span>
            </div>
  )
}

export default HadoopComponent
