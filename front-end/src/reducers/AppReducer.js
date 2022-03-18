export default function AppReducer(state, action) {
    switch (action.type) {
        case "CURRENT_USER":
            return {
                ...state,
                user: action.payload
            };
        case "GET_ALL_POSTS":
            return {
                ...state,
                posts: action.payload
            };
        case "CREATE_ONE_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case "UPDATE_ONE_POST":
            return {
                ...state,
                posts: state.posts.map((post) => {
                    return post._id === action.payload._id ? { ...post, ...action.payload } : post;
                })
            };
        case "DELETE_ONE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => action.payload._id !== post._id)
            };
        default:
            return state;
    }
}