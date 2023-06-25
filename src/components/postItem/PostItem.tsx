import {FC} from "react";
import {IPost} from "../../types-toolkit/IPost";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className='post'>
            <div>{post.id}. {post.title}</div>
            <button>Удалить пост</button>
        </div>
    );
};

export default PostItem;