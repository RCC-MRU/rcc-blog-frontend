import React, { useState, useEffect } from "react";
import { showComments } from "../../Util/axios";

const AddComment = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    showComments(slug)
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, [slug]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comment">
      <div className="add-comment">
        <h3>Comments</h3>
        <form className="form-center mr-2" onSubmit={handleSubmit}>
          <div class="form-group">
            <textarea
              class="form-control"
              id="blog-comment"
              rows="3"
              placeholder="Add your comment"
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn bg-dark-red btn-sm edit-font mb-2"
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>

      {comments.map((item) => {
        return (
          <div className="comment-box">
            <div key={item.blogId}>
              <p style={{ textAlign: "left", color: "gray" }}>
                {item.author} &nbsp;
                <span style={{ fontSize: "12px" }}>
                  on {new Date(item.createdAt).toLocaleDateString()}
                </span>{" "}
              </p>
              <p style={{ fontSize: "20px" }}>{item.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddComment;
