import React, { useState } from "react";
import TableUI from './TableUI'
import Header from './Header'
import BasicModal from "./ModalLogin";
import TableInsert from './TableInsert'

const Zoonoses = () => {
    const [state, setState] = useState({
        logged: false, openModal: false, comp: true, dataTable: [{
            name: 'Olive',
            species: 'Cachorro',
            race: 'Indefinida',
            sex: 'Fêmea',
            tutor: 'Bruna Alves',
            chip: '66543647547645765',
            veterinary: 'Anna Julia de Oliveira'
        }]
    })

    const handleCloseModal = () => {
        setState(prev => ({ ...prev, openModal: false, comp: true }))
    }

    const handleOpenModal = () => {
        setState(prev => ({ ...prev, openModal: true }))
    }

    const submitLogin = (data) => {
        setState(prev => ({ ...prev, openModal: false, logged: true }))
    }

    const handleComponent = () => {
        setState(prev => ({ ...prev, comp: !prev.comp }))
    }

    const handleDataTable = (data) => {
        setState(prev => ({ ...prev, dataTable: [...prev.dataTable, data] }))
    }

    return (
        <>
            <BasicModal open={state.openModal} handleClose={handleCloseModal} submitLogin={submitLogin} />
            <Header logged={state.logged} comp={state.comp} handleOpenModal={handleOpenModal} handleComponent={handleComponent} />

            {
                state.comp ? <TableUI dataTable={state.dataTable} /> : <TableInsert handleDataTable={handleDataTable} />
            }
        </>
    )
}

export default Zoonoses