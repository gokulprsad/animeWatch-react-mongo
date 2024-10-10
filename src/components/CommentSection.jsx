import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment(''); 
        }
    };


    return (
        <div className="p-4 bg-emerald-200 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add your comment..."
                    className="w-full h-24 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-100 rounded-lg shadow-md"
                        >
                            <p className="text-gray-700">{comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;
