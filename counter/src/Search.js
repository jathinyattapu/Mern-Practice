import React, {useState} from "react"

function Search(){

    const products = ["Apple","Banana","Kiwi","Grapes","Pomagranate","Mango"];

    const [fproduct,setProduct] = useState(products);

    const productsearch = (e)=>{
        if(e.target.value===""){setProduct(products); return;}  
            const searchprd = products.filter(
            (item)=> item.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1
        );
        setProduct(searchprd);
    }

    return<>
    <div className="container m-5 text-center">
        Search: <input type="text" name="query" onChange={productsearch}/>
        <hr></hr>
        {fproduct && fproduct.map((item,index)=>{return <div key={index}>{item}</div>})}
    </div>
    
    </>

}

export default Search;