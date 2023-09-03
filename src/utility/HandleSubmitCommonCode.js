import axios from 'axios';

export const handleFormSubmit = (comment, contenId, setComment, whereToApply) => {
  if (comment.trim() === '') return;

  const payload = {
    "commentContent": comment,
    "commentType": contenId
  };

  const listItem = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = comment;
  listItem.appendChild(paragraph);
  const commentList = document.getElementById(whereToApply);
  commentList.appendChild(listItem);

  https://sweet-creator-production.up.railway.app/api/comments?commentType=
  axios.post("https://sweet-creator-production.up.railway.app/api/saveComment", payload)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });

  setComment('');
};
