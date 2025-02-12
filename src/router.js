import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { Main } from "./pages/Main/Main";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { PostsPage } from "./pages/Posts/PostsPage";
import { PostPage } from "./pages/Post/PostPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Main/>,
            },
            {
                path: 'projects',
                element: <ProjectsPage/>,
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'posts/:_id',
                element: <PostPage/>
            }
        ]
    }
]);