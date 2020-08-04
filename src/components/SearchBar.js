import React from 'react';

import '../styles/SearchBar.css'

export default function SearchBar(props) {

    return (
        <div className="grid">
                {/* <div className="crud">
                    <h1>Inserir no Banco de Dados</h1>
                    <label>
                        Date:
                        <input 
                            type="text"
                            name="insert"
                            value={props.date}
                            onChange={e => props.setDate(e.target.value)}
                        />
                    </label>
                    <input 
                        type="submit" 
                        onClick={props.sendDate}
                    />
                </div> */}
                 <>
                 </>
                <div className="crud">
                    <h1 id="list-data">Listar Dados por Data</h1>
                    <input 
                        id="date" 
                        name="list"
                        value={props.date}
                        type="date"
                        onChange={e => props.setDate(e.target.value)}
                    />
                    {/* <label>
                        Date:
                        <input 
                            type="text"
                            name="list"
                            value={props.date}
                            onChange={e => props.setDate(e.target.value)}
                        />
                    </label> */}
                    <input 
                        type="submit" 
                        onClick={props.getData}
                    />
                    
                </div>
                {/* <div className="crud">
                    <h1 id="list-data">Deletar Dados por Data</h1>
                    <label>
                        Date:
                        <input 
                            type="text"
                            name="delete"
                            value={props.date}
                            onChange={e => props.setDate(e.target.value)}
                        />
                    </label>
                    <input 
                        type="submit" 
                        onClick={props.sendDate}
                    />
                    
                </div> */}
            </div>
    )

}