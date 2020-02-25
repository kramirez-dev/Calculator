import React, { useState } from 'react';

export default function TeamCompositionFun(){

    function limitCountRest(val){
        switch (val){
            case jr:
                if(jr > 0)
                jrCount( jr-1 )
            case mid: 
                if(mid > 0)
                 midCount( mid-1 ) 
        }
    }

    function limitCountSum(val){
        switch (val){
            case jr:
                if(jr < 5)
                jrCount( jr+1 )
            case mid: 
                if(mid < 5)
                 midCount( mid+1 ) 
        }
    }
    
    const [jr , jrCount] = useState(0);
    const [mid , midCount] = useState(0);
    const [sr , srCount] = useState(0);
    const [techLead , techLeadCount] = useState(0);
    const [engMan , engManCount] = useState(0);
    const [qa , qaCount] = useState(0);
    const [month , monthCount] = useState(0);

    return (
        <div className="container mt-3">
          <div className="input-group">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" className="table-active">Team Composition</th>
                <th scope="col" >In-House US</th>
                <th colSpan="2">Nearshore</th>
                <th colSpan="2">Offshore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="table-active"></th>
                <td></td>
                <td>Off-site</td>
                <td>On-site</td>
                <td>Off-site</td>
                <td>On-site</td>
              </tr>
              <tr>
                <th scope="row" className="table-active">Jr Developer</th>
                <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest(jr)}>-</button> <label className="card-text">{jr} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum(jr)}>+</button></td>
                <td><label className="card-text">{jr} </label></td>
                <td><label className="card-text">0 </label></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="table-active">Mid Developer</th>
                <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest(mid)}>-</button> <label className="card-text">{mid} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum(mid)}>+</button></td>
                <td><label className="card-text">{mid} </label></td>
                <td><label className="card-text">0 </label></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="table-active">Senior Developer</th>
                <td> <button className="btn btn-info btn-sm" onClick={() => srCount( sr-1 )}>-</button> <label className="card-text">{sr} </label><button className="btn btn-info btn-sm" onClick={() => srCount(sr+1)}>+</button></td>
                <td><label className="card-text">{sr} </label></td>
                <td><label className="card-text">0 </label></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="table-active">Technical Lead</th>
                <td> <button className="btn btn-info btn-sm" onClick={() => techLeadCount( techLead-1 )}>-</button> <label className="card-text">{techLead} </label><button className="btn btn-info btn-sm" onClick={() => techLeadCount(techLead+1)}>+</button></td>
                <td><label className="card-text">{techLead} </label></td>
                <td><label className="card-text">0 </label></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="table-active">Engagement Manager</th>
                <td> <button className="btn btn-info btn-sm" onClick={() => engManCount( engMan-1 )}>-</button> <label className="card-text">{engMan} </label><button className="btn btn-info btn-sm" onClick={() => engManCount(engMan+1)}>+</button></td>
                <td><label className="card-text">{engMan} </label></td>
                <td><label className="card-text">0 </label></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="table-active">QA</th>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <th scope="row" className="table-active">Project Duration (months)</th>
              <td></td>
            
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      );
}