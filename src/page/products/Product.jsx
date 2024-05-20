import axios from 'axios'
import './Product.scss'
import { useEffect, useState } from 'react'
const Product = () => {
    const [data,setData] = useState([])
   const fetchData = async()=>{
    try{
        const {data} = await axios.get('https://fakestoreapi.com/products');
        setData(data)
        console.log(data);
    }catch(err){
        console.log(err);
    }
   }
   useEffect(() =>{
    fetchData()
   },[])
  return (
    <div className='container'>
       <div className="cartContainer">
       {
        data.map((element,index) =>(
                <div className="card" key={index}>
                  <img className="card__img" src={element.image} alt="" />
                <div className="crad__body">
                    <h5 className="card__title">{element.title.substring(1,20)}..</h5>
                    <p className="card__desc">{element.description.substring(1,60)}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        ))
       }    
       </div>
    </div>
  )
}

export default Product