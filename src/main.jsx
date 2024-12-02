import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import About from './components/About/About.jsx';
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Education/Education.jsx'
import Skill from './components/Skill/Skill.jsx'
import Services from './components/Services/Services.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/blog",
    element: <Blog></Blog>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/education",
    element: <Education></Education>
  },
  {
    path: "/skill",
    element: <Skill></Skill>
  },
  {
    path: "/services",
    element: <Services></Services>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {Children}
    </RouterProvider>
  </StrictMode>,
)
