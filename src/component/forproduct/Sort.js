import React, { useEffect, useState } from 'react';
import './sort.css';
import { FiGrid } from "react-icons/fi";
import { FaListUl, FaList } from "react-icons/fa";

import { BsFillGridFill, BsList } from "react-icons/bs";
import postSlice, { currentsortvalue, fetchPost, gridView, listView, sortingproductStor } from '../pages/slices/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


const Sort = () => {

  const dispatch = useDispatch()
  const t_f = useSelector((state) => state.posts.grid_view);
  const products = useSelector((state) => state.posts.products);
  const slect = useSelector((state) => state.posts.sorting_value);

  const sorting = (e) => {
    dispatch(currentsortvalue(e));
  }
  
  const sortData = products.sort((a, b) => {
     if(slect === "lowest"){
      return a.price - b.price;
     }
     if(slect === "highest"){
      return b.price - a.price;
     }
     if(slect === "a-z"){
      return a.name.localeCompare(b.name)
     }
     if(slect === "z-a"){
      return b.name.localeCompare(a.name)
     }
  });

  dispatch(sortingproductStor(sortData));
  // console.log(sortData);




  return (
    <div className='sort'>
      <div className="view">
        <Link 
          className={t_f ? "view-btn active" : "view-btn"}
          onClick={() =>{dispatch(gridView())}}
        >
          <FiGrid className="icon" />
        </Link>
        <Link 
          className={t_f ? "view-btn" : "view-btn active"}
          onClick={() => {dispatch(listView())}}
        >
          <FaListUl className="icon" />
        </Link>
      </div>

      <div className="all-products">
        <h4 className='abaila'>{`${products.length} Product Availavle`}</h4>
      </div>

      <div className="price-config">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onChange={(e) => {sorting(e.target.value)}} className='select'>
            <option value="lowest" className='option'>Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest" className='option'>Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z" className='option'>Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a" className='option'>Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort
