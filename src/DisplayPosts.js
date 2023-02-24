import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostAddModal from './PostAddModal';
import { post_dislike, post_like } from './redux/reducer/post';

function DisplayPosts() {
    const {name,pic} = useSelector((state)=>state.reddit_auth)
    const { posts } = useSelector((state) => state.reddit_post);
    const { users } = useSelector((state) => state.reddit_user);
    const dispatch = useDispatch()
    // const commentRef = useRef(null)

    const get_user_pic = (name)=>{
        const checkUser = users.filter(
          (item) =>(item.name && item.name.includes(name))
        );
        if(checkUser.length!==0){
          return checkUser[0].pic
        }else{
          return null
        }
    }

    const checkLike = (postId) =>{
        const post = posts.find((post) => post.id === postId);
        if(post || post?.like_users){
          if(post.like_users.some(like=>like===name)){
            return true
          }
        }
        return false
    }
    
    const checkDisLike = (postId) =>{
      const post = posts.find((post) => post.id === postId);
      if(post || post?.dislike_users){
        if(post.dislike_users.some(dislike=>dislike===name)){
          return true
        }
      }
      return false
  } 

    // const commentAddHandle=(postId)=>{
    //   dispatch(post_coment({id:postId,by:name,comment:commentRef.current.value}))
    //   commentRef.current.value=null
    // }
   
  return (
    <>
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <img
            src={pic}
            alt="Avtar"
            className="rounded-circle"
            width="40px"
            height="40px"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="text-center">
          <button
            type="button" className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#postModal"
          >
            Start New Post
          </button>
          </div>
          <PostAddModal />
        </div>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="card mt-2">
            <div className="card-header border-0 bg-white d-flex">
              <img
                src={
                  get_user_pic(post.postedBy)
                    ? get_user_pic(post.postedBy)
                    : "./images/avatar.webp"
                }
                alt="avtar"
                className="rounded-circle"
                width="50px"
                height="50px"
                style={{
                  objectFit: "cover",
                }}
              />
              <h6 className="ms-3 fw-bold mt-2">
                {post.postedBy}
                <br />
                <span
                  className="small fw-normal ms-1"
                  style={{ fontSize: "10px" }}
                >
                  {moment(post.postedDate).format(" Do MMM YY")}
                </span>
              </h6>
            </div>

            <div className="card-body">
              <h4 className="p-1">{post.postTitle}</h4>
            </div>

            <div className="card-body">
              <p className="small p-1">{post.postText}</p>
            </div>

            <div className="card-footer border-0 bg-white ">
              <div className="d-flex small p-2">
                <span className="">{post.like_users.length} UpVote</span>
                <span className="ms-auto">{post.dislike_users.length} DownVote</span>
              </div>
              <hr className="p-0 m-0" />
              <div className="row">
                <div className="col-6">
                  <button
                    className="btn text-center p-1 m-1 w-100"
                    onClick={() =>
                      dispatch(post_like({ id: post.id, login_user: name }))
                    }
                  >
                    <i
                      className={`${
                        checkLike(post.id)
                          ? "fa-solid fa-thumbs-up text-primary"
                          : "fa-regular fa-thumbs-up"
                      } fa-lg me-2`}
                    ></i>
                    UpVote
                  </button>
                </div>

                <div className="col-6">
                  <button
                    className="btn text-center p-1 m-1 w-100"
                    onClick={() =>
                      dispatch(post_dislike({ id: post.id, login_user: name }))
                    }
                  >
                    <i
                      className={`${
                        checkDisLike(post.id)
                          ? "fa-solid fa-thumbs-down text-primary"
                          : "fa-regular fa-thumbs-down"
                      } fa-lg me-2`}
                    ></i>
                    DownVote
                  </button>
                </div>      
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisplayPosts;