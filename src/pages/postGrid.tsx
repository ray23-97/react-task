import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/post';
import { fetchComments } from '../api/comment';
import Modal from '../components/modal';
import PostCard from '../components/postCard';
import { PostType, CommentType } from '../types';

const PostsGrid: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const openModal = async (postId: number) => {
    const comments = await fetchComments(postId);
    setComments(comments);
    setSelectedPostId(postId);
    setModalOpen(true);
  };

  const getRandomAvatar = () => {
    const avatars = [
      'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
      'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
      'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  return (
    <div>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onReadMore={openModal} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            {/* <img src={getRandomAvatar()} alt="avatar" />
            <p><strong>{comment.name}</strong> ({comment.email})</p>
            <p>{comment.body}</p> */}
              <img src={getRandomAvatar()} alt="avatar" className="comment-avatar" />
      <div className="comment-body">
        <p className="comment-name">{comment.name}</p>
        <p className="comment-text">{comment.body}</p>
      </div>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default PostsGrid;
