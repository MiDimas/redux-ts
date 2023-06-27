import {postAPI} from "../../services/PostService";
import PostItem from "../postItem/PostItem";
import {IPost} from "../../types-toolkit/IPost";

const PostsList = () => {
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(50);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [removePost, {}] = postAPI.useRemovePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    const handleClick = async () => {
        const title = prompt("Введите имя поста");
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка загрузки</h1>}
            {posts && posts.map(value => (
                <PostItem key={value.id} removePost={removePost} updatePost={updatePost} post={value}/>
            ))}
            <button onClick={handleClick}>Добавить пост</button>
        </div>
    );
};

export default PostsList;