import React from 'react';



const HighScoreTable = (props) => {
    return (
        <div className="App">
            <header>
                <h1>High Scores Per Countries </h1>
            </header>
            {props.data.map((el,index) => {
                return (
                    <table key={index}>
                        <tr>
                            <th>High Scores: {el.name} </th>
                        </tr>
                       
                            {el.scores.map((player, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{player.n.toUpperCase()}</td>
                                        <td>{player.s}</td>
                                    </tr>
                                )
                            })}
                        
                    </table>
                )
            })}
        </div>
    );
}
export default HighScoreTable;