import React, { useState } from "react";
import TableUI from './TableUI'
import Header from './Header'
import BasicModal from "./ModalLogin";
import TableInsert from './TableInsert'

const gatos = [
    {
      name: 'Luna',
      species: 'Gato',
      race: 'Siamês',
      sex: 'Fêmea',
      tutor: 'Ana Silva',
      chip: '123456789',
      veterinary: 'Dr. Mendes'
    },
    {
      name: 'Simba',
      species: 'Gato',
      race: 'Persa',
      sex: 'Macho',
      tutor: 'João Oliveira',
      chip: '987654321',
      veterinary: 'Dra. Santos'
    },
    {
      name: 'Mia',
      species: 'Gato',
      race: 'Angorá',
      sex: 'Fêmea',
      tutor: 'Maria Souza',
      chip: '567890123',
      veterinary: 'Dr. Pereira'
    },
    {
      name: 'Oliver',
      species: 'Gato',
      race: 'Maine Coon',
      sex: 'Macho',
      tutor: 'Pedro Lima',
      chip: '321654987',
      veterinary: 'Dra. Almeida'
    },
    {
      name: 'Chloe',
      species: 'Gato',
      race: 'Bengal',
      sex: 'Fêmea',
      tutor: 'Carla Santos',
      chip: '456789012',
      veterinary: 'Dr. Costa'
    },
    {
      name: 'Max',
      species: 'Gato',
      race: 'Ragdoll',
      sex: 'Macho',
      tutor: 'Fernanda Oliveira',
      chip: '789012345',
      veterinary: 'Dra. Lima'
    },
    {
      name: 'Bella',
      species: 'Gato',
      race: 'Sphynx',
      sex: 'Fêmea',
      tutor: 'Rafaela Silva',
      chip: '234567890',
      veterinary: 'Dr. Ferreira'
    },
    {
      name: 'Milo',
      species: 'Gato',
      race: 'British Shorthair',
      sex: 'Macho',
      tutor: 'Antônio Santos',
      chip: '890123456',
      veterinary: 'Dra. Martins'
    },
    {
      name: 'Lucy',
      species: 'Gato',
      race: 'Scottish Fold',
      sex: 'Fêmea',
      tutor: 'Mariana Oliveira',
      chip: '567890123',
      veterinary: 'Dr. Castro'
    },
    {
      name: 'Charlie',
      species: 'Gato',
      race: 'Exótico de Pêlo Curto',
      sex: 'Macho',
      tutor: 'Carlos Lima',
      chip: '321654987',
      veterinary: 'Dra. Nunes'
    }
];
  

const Zoonoses = () => {
    const [state, setState] = useState({
        logged: false, openModal: false, comp: true, dataTable: gatos, dataPrev: gatos
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
        setState(prev => ({ ...prev, dataTable: [...prev.dataTable, data], dataPrev: [...prev.dataTable, data] }))
    }

    const handleFiltro = (chip, clear) => {
        if(clear) {
            setState(prev => ({ ...prev, dataTable: prev.dataPrev }))
        } else {
            if(chip) setState(prev => ({ ...prev, dataTable: prev.dataTable.filter(i => i.chip === chip) }))
        } 
    }

    return (
        <>
            <BasicModal open={state.openModal} handleClose={handleCloseModal} submitLogin={submitLogin} />
            <Header logged={state.logged} comp={state.comp} handleOpenModal={handleOpenModal} handleComponent={handleComponent} />

            {
                state.comp ? <TableUI handleFiltro={handleFiltro} dataTable={state.dataTable} /> : <TableInsert handleDataTable={handleDataTable} />
            }
        </>
    )
}

export default Zoonoses