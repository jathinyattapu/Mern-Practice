import { getData, deleteData, postData, putData } from "./Data";
import {useEffect, useState} from 'react';
import Table from "./Table";
import Form from "./Form";

function App(){

    const [products, setProducts] = useState([]);
    const [openform, setForm] = useState(false);
    const [edit, setEdit] = useState(false);
    const [initialForm, setInput] = useState({name:'',price:''})

    let showForm = ()=>{
        setForm(true);
        setInput({name:'',price:''})
    }
    let closeForm = ()=>{
        setForm(false);
    }

    let getProducts = async ()=>{
        let res = await getData();
        setProducts(res.data);
    }

    let delProduct = async (id)=>{
        await deleteData(id);
        getProducts()
    }

    let postProduct = async (product)=>{
        let data = {
            name:product.name,
            price:product.price
        }

        if(edit)
        await putData(data,product.id);
        else
        await postData(data);
        getProducts()
        setForm(false)
    }

    let editProduct = async (data)=>{
        setInput(data)
        setForm(true)
        setEdit(true)
    }
    
    useEffect(
        ()=>{
            getProducts()
        },[]
    )



    return(
        <div className="container my-5">
            <button className="btn btn-info" 
            onClick={(e)=>{
                e.preventDefault();
                showForm()
            }}
            >Add Product</button>
        <h1 className="text-center">Mobile Data</h1>
        <Table products={products} delete={delProduct} edit={editProduct}></Table>
        {openform && <Form close={closeForm} data={initialForm} add={postProduct}></Form>}
        </div>
    )
}
export default App;