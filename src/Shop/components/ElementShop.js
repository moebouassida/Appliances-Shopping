import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Shop.css"

function ElementShop(props) {
  const [elem, setElem] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3020/api/Element/getElement`, { params: { id: props._id } })
    .then(res => setElem(res.data))
    .catch(error => console.log({ msg: error.message }))
  }, [])
  if (!elem) return null;
  return (
    <div className="contenaire1-shop">
      <div className='contenaire2-shop'>
      <img src={elem.element.picture[0].picture} className="image-shop" alt="element image" />
      </div>
      <div className='contenaire3-shop'>
      <h5 className='elemName-shop'>{elem.element.name}</h5>
      <div className='contenaire4-shop'>
      <h5 className="elemName-shop">${elem.element.price}</h5>
      <button className='button-shop' >Shop Now</button>
      </div>
      </div>
    </div>
  )

}

export default ElementShop;