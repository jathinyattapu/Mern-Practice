function Table(props){
    return(
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                        props.products.map((data,i)=>{
                        return <tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>
                                <button className="btn btn-primary mx-3"
                                onClick={()=>{
                                    props.edit(data)
                                }}
                                >Edit</button>
                                <button className="btn btn-danger mx-3"
                                 onClick={()=>{props.delete(data.id)}}
                                 >Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default Table;