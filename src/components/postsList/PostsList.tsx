import {postAPI} from "../../services/PostService";

const PostsList = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(5);
    return (
        <div>
            {posts && posts.map(value => (
                <div key={value.id}> {value.id}. {value.title}</div>
            ))}
        </div>
    );
};

export default PostsList;