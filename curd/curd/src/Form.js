import { useState } from "react";

function Form(props){

    let [product, setProduct] = useState(props.data)

    let changeFormData = (e)=>{
        const {name,value} = e.target;

        setProduct({...product,[name]:value})
    }

    return <div className="container">
        <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2" type="text" name="name" value={product.name} 
                    onChange={changeFormData}/>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control mt-2" type="number" name="price" value={product.price}
                    onChange={changeFormData}/>
                </div>
            <button className="btn btn-primary float-start m-2"
            onClick={(e)=>{
                e.preventDefault();
                props.add(product);
            }}
            >Add</button>

            <button className="btn btn-danger float-end m-2"
            onClick={
                (e)=>{
                    e.preventDefault();
                    props.close();
                }
            }
            >Cancel</button>
        </form>
    </div>
}
export default Form;