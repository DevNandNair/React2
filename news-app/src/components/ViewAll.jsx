import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState( [] )
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/testapi/news.json").then(
            (response)=>{
                changeData(response.data)
            }
        ) 
    }
    useEffect(()=>{fetchData()},[])
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3" >
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={value.urlToImage} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">Nam of the author: {value.author} </p>
                                                <p class="card-text">{value.description} </p>
                                                <p class="card-text"><small class="text-body-secondary">Name:{value.source.name},    </small></p>
                                                <p class="card-text"><small class="text-body-secondary">Published At:{value.publishedAt}</small></p>
                                                <Link to={value.url}>URL to site</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll