import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function AddBlog() {

   const [blogData,setBlogData]=useState({})
   const navigate = useNavigate()
   const onhandleChange= (e)=>{
    setBlogData(pre=>({...pre,[e.target.name]:e.target.value}))
   }
const onSubmitChange =async(e)=>{
       e.preventDefault()
       await axios.post("http://localhost:5001/blog/create",blogData)
       navigate("/")
}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title </label>
                                <input type="text" name="title" className="form-control" onChange={onhandleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description </label>
                                <textarea type="text" name="description" rows="10" className="form-control" onChange={onhandleChange} />
                            </div>
                            <div className="text-center">
                                <button type="submit"  onClick={onSubmitChange} className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
