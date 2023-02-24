import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { post_add } from './redux/reducer/post';

function PostAddModal() {
    const { name, pic } = useSelector((state) => state.reddit_auth);
    const [text,setText] = useState('');
    const [title, setTitle] = useState("");
    const modalCloseRef = useRef(null)
    const dispatch = useDispatch()

    const handelSubmit = (e)=>{
        e.preventDefault()
        dispatch(post_add({
            postedBy:name,
            postTitle: title,
            postText:text
        }))
        setText('');
        setTitle("");
        modalCloseRef.current.click()
    }

  return (
    <div

      className="modal fade"
      id="postModal"
      tabindex="-1"
      aria-labelledby="postModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="postModalLabel">
              Create Post
            </h1>
            <button
              ref={modalCloseRef}
              onClick={()=>{
                setText('');
                setTitle("");
              }}  
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <img
                src={pic}
                alt="Avtar"
                className="rounded-circle"
                width="50px"
                height="50px"
                style={{
                  objectFit: "cover",
                }}
              />
              <h6 className="text-center fw-bold ms-2 mt-2">{name}</h6>
            </div>
            <form onSubmit={handelSubmit}>
              <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Enter title"
              className="mt-2"
                rows='8'
                style={{
                  borderStyle: "none",
                  bordercolor: "transparent",
                  overflow: "auto",
                  outline: "none",
                  width: '100%'
                }}
                required
              />
              <textarea
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="What do you want to talk about?"
                className="mt-2"
                rows='8'
                style={{
                  borderStyle: "none",
                  bordercolor: "transparent",
                  overflow: "auto",
                  outline: "none",
                  width: '100%'
                }}
                required
              ></textarea>
              <div className="d-flex">
                <input
                  type="submit"
                  value="Post"
                  className="btn btn-primary rounded-pill ms-auto"
                  disabled={(text && title) ? false:true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostAddModal