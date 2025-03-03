import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'


export const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.liked?Heart:NotLike} /*If like button click then heart will be show otherwise it show not like heart*/
            alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color:"var(--gray)", fontsize:"12px"}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
)
}
