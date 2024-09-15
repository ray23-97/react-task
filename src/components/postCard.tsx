import React from 'react';
import { PostType } from '../types';

interface PostCardProps {
  post: PostType;
  onReadMore: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onReadMore }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p> {post.body}.</p>
      {/* <p>{post.body.substring(0, 100)}...</p> */}
      <button onClick={() => onReadMore(post.id)}>Read More</button>
    </div>
  );
};

export default PostCard;
