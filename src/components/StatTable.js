import React from 'react';
import '../styles/StatTable.css'

export default function StatTable(props) {

    const { rows } = props;
    console.log(`props: ${JSON.stringify(props)}`)
    
    const renderTableHeader = function() {
        let header = Object.keys(rows[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderTableData = function() {
        return rows.map((field, index) => {
            const { id_pmu, date, pmu, dados_recebidos, latencia_conforme, latencia_minima, latencia_media, latencia_maxima, dados_adequados, configuracao, pmu_time_quality } = field;
            return (
                <tr key={id_pmu}>
                    <td>{id_pmu}</td>
                    <td>{pmu}</td>
                    <td>{dados_recebidos ? (dados_recebidos * 100).toFixed(2) : ''}</td>
                    <td>{latencia_conforme ? (latencia_conforme * 100).toFixed(2) : ''}</td>
                    <td>{latencia_minima}</td>
                    <td>{latencia_media}</td>
                    <td>{latencia_maxima}</td>
                    <td>{dados_adequados ? (dados_adequados * 100).toFixed(2) : ''}</td>
                    <td>{configuracao ? (configuracao * 100).toFixed(2) : ''}</td>
                    <td>{pmu_time_quality ? (pmu_time_quality * 100).toFixed(2) : ''}</td>
                </tr>
            )
        })
    }
    
    return (
        <>
        <table id="table-stat">
            <thead id="table-head">
                <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody id="table-body">
                {renderTableData()}
            </tbody>
        </table>
        </>
    )
}

