import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { Main } from "./pages/Main/Main";
import { Projects } from "./pages/Projects/Projects";
import { PostsPage } from "./pages/Posts/PostsPage";


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
                element: <Projects/>,
            },
            {
                path: 'posts',
                element: <PostsPage/>
            }
        ]
    }
]);