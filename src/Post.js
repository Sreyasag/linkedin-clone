import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({name,description, message, photoUrl}) {
    return (
        <div className='post'>

            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption 
                    title="like" 
                    Icon={ThumbUpAltOutlinedIcon} 
                    color="grey" 
                />
                <InputOption 
                    title="comment" 
                    Icon={ChatOutlinedIcon} 
                    color="grey" 
                />
                <InputOption 
                    title="share" 
                    Icon={ShareOutlinedIcon} 
                    color="grey" 
                />
                <InputOption 
                    title="send" 
                    Icon={SendOutlinedIcon} 
                    color="grey" 
                />
            </div>

        </div>
    )
}

export default Post