import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import AddBlog from './components/AddBlog'
import BlogDetails from './components/BlogDetails'
import EditBlog from './pages/EditBlog'




 const getAllBlogs=async()=>{
  let allBlogs=[]
  await axios.get("http://localhost:5001/blog/all").then(res=>
    allBlogs=res.data
  )
  return allBlogs
 }

 const getBlog=async({params})=>{
  let blogs=[]
  await axios.get(`http://localhost:5001/blog/count/${params.id}`).then(res=> blogs=res.data)
  return blogs
 }

 


 const router=createBrowserRouter([
  {path:"/", element:<MainNavigation/>,children:[
    {index:true, element:<Home/>,loader:getAllBlogs},
    {path:"/addBlog", element:<AddBlog/>},
    {path:"/blogDetails/:id", element:<BlogDetails/>, loader:getBlog},
    {path:"/editblog/:id", element:<EditBlog/>, loader:getBlog}
  ]}
 ])
 export default function App() {
  
 
  return (
    <>
     <RouterProvider router={router}>

     </RouterProvider>
    </>
  )
}
