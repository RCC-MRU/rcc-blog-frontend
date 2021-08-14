
import React, { useEffect, useState} from "react";
import axios from "axios";



const AddComment = (props) => {


    const [comments, setComments] = useState([]);

  useEffect(() => {
    axios({
      url: `http://localhost:3003/showPostComments?blogId=${props.blogId}`,
      method: "GET",
    }).then((data) => {
      setComments(data.data.result);
      //console.log(data.data.result);
    });
  }, [props.blogId]);



    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("comment added");
    }

    return ( 

        <div className='comment'>
            <div className="add-comment">
                <form className="form-center" onSubmit={handleSubmit}>
                    <div className="comment">
                    <label>Comments</label>
                    <br />
                    <textarea
                        rows="4"
                        name="comment"
                        placeholder="Add a public comment"
                        required
                    />
                    </div>
                    <div className="comment-submit">
                    <button type="submit" className="comment-btn">
                        Add Comment
                    </button>
                    </div>
                </form>
            </div>
            

            <div className="show-comment" style={{ boxShadow:"1px 2px 3px 1px gray", marginTop:"2rem", borderRadius:"4px"}}>
                    <p>comment here</p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                        Date here
                        </p> 

                {comments.map((item) => {
                    return (
                    <div key={item.blogId}>
                    <p>{item.comment}</p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                        posted at {new Date(item.createdAt).toLocaleDateString()}
                        </p> 
                    </div>
                    );
                })}
            </div>
         </div>


     );
}
 
export default AddComment;