import React from 'react'

function Post(props) {

  return (
    <div className="post">
        <h2>{props.postData.title}</h2>
        <p>{props.postData.body}</p>
    </div>
  )
}

export default Post