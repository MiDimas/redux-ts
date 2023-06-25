import {postAPI} from "../../services/PostService";
import PostItem from "../postItem/PostItem";

const PostsList = () => {
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(10);
    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка загрузки</h1>}
            {posts && posts.map(value => (
                <PostItem key={value.id} post={value}/>
            ))}
        </div>
    );
};

export default PostsList;