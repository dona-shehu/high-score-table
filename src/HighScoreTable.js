import React from 'react';



const HighScoreTable = (props) => {
    return (
        <>
            <header>
                <h1>High Scores Per County </h1>
            </header>
            <div className='table-container'>
            {props.data.sort((a,b)=> a.name.localeCompare(b.name))
            .map((el,index) => {
                return (
                    <div className='card'>
                    <table className='table' key={index}>
                        <tr>
                            <th>High Scores: {el.name} </th>
                        </tr>
                            <tbody>
                            {el.scores.sort((a,b)=>a.s < b.s ? 1: -1).map((player, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{player.n.toUpperCase()}</td>
                                        <td className='numbers'>{parseInt(player.s).toLocaleString()}</td>
                                    </tr>
                                )
                            })}
                          </tbody >
                    </table>
                    </div>
                )
            })}
            </div>
        </>
    );
    
}
export default HighScoreTable;