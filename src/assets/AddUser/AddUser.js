import React from 'react'

const AddUser = ({ card }) => {
    console.log(card);
    return (
        <div>
            <table>
                <tr>
                    <th>FirstName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Alfreds Futterkiste</td>                  
                </tr>
                
            </table>
        </div>
    )
}

export default AddUser