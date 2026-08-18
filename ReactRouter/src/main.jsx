import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// const router=createBrowserRouter([
//   // this is method take array as argument and in this array we provide all our list
//   {
//     path:'/',  // its a top level element
//     element : <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// easiest way of routing 

const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route
        loader={githubInfoLoader}
       path="github"
        element={<Github/>}/>
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />   
  </StrictMode>,
  //  RouterProvider is a wrapper which wrap all things(all routers and components) inside it and render on browser screen
)
