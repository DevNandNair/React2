import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("https://api.restful-api.dev/objects").then(
            (response)=>{
                changeData(response.data)
            }
        ) 
    }
    useEffect(()=>{fetchData()},[])

    const getKeysWithAttributes = (obj) => {
        return Object.keys(obj).filter((key) => obj[key] !== null && typeof obj[key] !== 'undefined');
      };
    

    return (
        <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                {data.map((value, index) => (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                    <div className="card h-100 border-0 shadow-sm bg-light">
                      <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        {value.data ? (
                          getKeysWithAttributes(value.data).map((key) => (
                            <p className="card-text" key={key}>
                              <strong>{key}:</strong> {value.data[key]}
                            </p>
                          ))
                        ) : (
                          <p className="card-text">No additional details available</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ViewAll