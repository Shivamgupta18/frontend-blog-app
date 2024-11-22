import { useLoaderData, useNavigate } from "react-router-dom"


export default function BlogDetails() {
    const blog=useLoaderData()
    const navigate=useNavigate()
    console.log(blog)
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">

                <h2>{blog.title}</h2>
                <h5>{blog.date}</h5>

                <button onClick={()=>navigate(`/editblog/${blog.id}`)} className="btn btn-success">Edit</button>
                <h6 className="mt-4 border p-3">{blog.description}</h6>
                </div>
        </div>
    </div>
    </>
  )
}
