import React, { useState } from 'react';
import { getUser, removeUserSession } from '../utils/Common';
import api from '../global/api'

// import Components
import StatTable from '../components/StatTable'
import SearchBar from '../components/SearchBar'

export default function Dashboard(props) {

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newDate = month + "-" + day + "-" + year;

    const initialStat = [
        { id_pmu: '', pmu: '', dados_recebidos: '', latencia_conforme: '', latencia_minima: '', latencia_media: '', latencia_maxima: '', dados_adequados: '', configuracao: '', pmu_time_quality: '' },  
    ]
    
    const [date, setDate] = useState(newDate);
    const [rows, setRows] = useState(initialStat);
    
    const user = getUser();

    //handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    const sendDate = () => {
        api.post('/api/stat', {
            date
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    
    async function getData() {
        try {
            // fetch data from a url endpoint
            const response = await api.get('/api/stat', {
                params: {
                    date
                }
            });
            
            console.log(`response: ${JSON.stringify(response)}`)
            setRows(response.data);

        } catch (error) {
            setRows(initialStat);
            console.log(error);
        }
    }


    return (
        <div>
            Bem-vindo, {user.name}!<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />

            <SearchBar date={date} setDate={setDate} getData={getData} sendDate={sendDate} />
            
            <>
                <h1 id="title">Stream Statistics - MedFasee BT Brasil</h1>
                <StatTable rows={rows} />
            </>
            
        </div>
        
    );
}

