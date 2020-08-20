import React from 'react';

export default function SearchBar(props) {
    return (
        <div className="grid">
            <div className="crud">
                <h1 id="list-data">Listar Dados por Data</h1>
                <input 
                    id="date" 
                    name="list"
                    value={props.date}
                    type="date"
                    onChange={e => props.setDate(e.target.value)}
                />
                <input 
                    type="submit" 
                    onClick={props.getData}
                />
            </div>
        </div>
    )
}