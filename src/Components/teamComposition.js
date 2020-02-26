import React, { useState } from 'react';
import ProjectTeamComponent from '../Components/projectTeamCost';


export default function TeamCompositionFun() {

    function limitCountRest(val) {

        if (jr > 0 && val === "jr") {
            jrCount(jr - 1)
        }
        if (mid > 0 && val === "mid") {
            midCount(mid - 1)
        }
        if (sr > 0 && val === "sr") {
            srCount(sr - 1)
        }
        if (techLead > 0 && val === "techLead") {
            techLeadCount(techLead - 1)
        }
        if (qa > 0 && val === "qa") {
            qaCount(qa - 1)
        }
        if (month > 1 && val === "month") {
            monthCount(month - 1)
        }
    }

    function limitCountSum(val) {
        if (jr < 5 && val === "jr") {
            jrCount(jr + 1)
        }
        if (mid < 5 && val === "mid") {
            midCount(mid + 1)
        }
        if (sr < 3 && val === "sr") {
            srCount(sr + 1)
        }
        if (techLead < 1 && val === "techLead") {
            techLeadCount(techLead + 1)
        }
        if (qa < 3 && val === "qa") {
            qaCount(qa + 1)
        }
        if (month < 12 && val === "month") {
            monthCount(month + 1)
        }
    }

    var sum = 0
    function calculate() {
        return sum = jr * 65
    }

    const [jr, jrCount] = useState(0);
    const [mid, midCount] = useState(0);
    const [sr, srCount] = useState(0);
    const [techLead, techLeadCount] = useState(0);
    const [engMan, engManCount] = useState(1);
    const [qa, qaCount] = useState(0);
    const [month, monthCount] = useState(1);

    return (
        <div className="container mt-3">
            <div className="input-group">
                <table className="table table-bordered text-center">
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
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("jr")}>-</button> <label className="card-text text-center ml-1 mr-2">{jr} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("jr")}>+</button></td>
                            <td><label className="card-text">{jr} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{jr} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">Mid Developer</th>
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("mid")}>-</button> <label className="card-text text-center ml-1 mr-2">{mid} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("mid")}>+</button></td>
                            <td><label className="card-text">{mid} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{mid} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">Senior Developer</th>
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("sr")}>-</button> <label className="card-text text-center ml-1 mr-2">{sr} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("sr")}>+</button></td>
                            <td><label className="card-text">{sr} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{sr} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">Technical Lead</th>
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("techLead")}>-</button> <label className="card-text text-center ml-1 mr-2">{techLead} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("techLead")}>+</button></td>
                            <td><label className="card-text">{techLead} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{techLead} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">QA</th>
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("qa")}>-</button> <label className="card-text text-center ml-1 mr-2">{qa} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("qa")}>+</button></td>
                            <td><label className="card-text">{qa} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{qa} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">Engagement Manager</th>
                            <td> <label className="card-text text-center ml-1 mr-2">{engMan}</label></td>
                            <td><label className="card-text">{engMan} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{engMan} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-active">Project Duration (months)</th>
                            <td> <button className="btn btn-info btn-sm" onClick={() => limitCountRest("month")}>-</button> <label className="card-text text-center ml-1 mr-2">{month} </label><button className="btn btn-info btn-sm" onClick={() => limitCountSum("month")}>+</button></td>
                        </tr>
                    </tbody>
                </table>
                <h1>{calculate()}</h1>
            </div>
        </div>
    );
}