import axios from 'axios';
import { useState, useEffect } from 'react';
import ElementShop from './ElementShop';
import Pagination from './Pagination';

function Shop() {
    const [option, setOption] = useState("All");
    const [lastPage, setLastPage] = useState(1);
    const [page, setPage] = useState(1);
    const [element, setElement] = useState([]);
    const [optionValue, setOptionValue] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3020/api/Subcategory/getAllSubCategory`)
        .then(res => {
            const sub = res.data.subCategory;
            for (let i = 0; i < sub.length; i++) {
                setOptionValue(optionValue => [...optionValue, sub[i].name]);
            }
        })
        .catch(error => console.log({ msg: error.message }))
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:3020/api/Subcategory/getSubCategorybyNAMEASC`, { params: { page: page, subcategory: option } })
        .then(res => {
            setElement(res.data.elem);
            setLastPage(res.data.lastPage);
        })
        .catch(error => console.log({ msg: error.message }))
    }, [page, option])
    return (
        <div className='allpage-shop'>
            <div className='select-shop' >
                <label className='label-shop'>Category</label>
                <select className='choose-shop' defaultValue={option} onChange={(e) => {setOption(e.target.value)
                setPage(1)}}>
                    <option className='test' value="All" key="All">All</option>
                    {optionValue.map(subcat => <option className='test' value={subcat} key={subcat} >{subcat}</option>)}
                </select> <br /><br /><br />
            </div>
            <div className='elements-shop'>
                {element.map((ele) =>
                    <ElementShop key={ele._id} _id={ele._id} />)}
            </div>
            <Pagination page={page} last={lastPage} change={setPage} />
        </div>
    )
}

export default Shop;