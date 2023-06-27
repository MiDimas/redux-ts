import {FC} from "react";
import {IPost} from "../../types-toolkit/IPost";

interface PostItemProps {
    post: IPost;
    updatePost: (post: IPost) => void;
    removePost: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, updatePost, removePost}) => {

    const removeHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        removePost(post);
    }
    const updateHandler = () => {
        const newTitle = prompt("Введите новое название") ||  '';
        updatePost({...post, title: newTitle});
    }

    return (
        <div onClick={updateHandler} className='post'>
            <div>{post.id}. {post.title}</div>
            <button onClick={removeHandler}>Удалить пост</button>
        </div>
    );
};

export default PostItem;