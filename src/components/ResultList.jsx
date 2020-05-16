import React from 'react';




function ResultList(props) {


    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                {props.result.map((result, index) => (
                    <tr key={index}>
                        <td><img src={result.picture.large} alt="person head shot"/></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.email}</td>
                       
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
}

export default ResultList;