import React, { useState, useEffect } from "react";
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
    veterinary: 'Dr. Mendes',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    illnesses: 'Nenhuma',
    address: 'Rua das Flores, 123'
  },
  {
    name: 'Simba',
    species: 'Gato',
    race: 'Persa',
    sex: 'Macho',
    tutor: 'João Oliveira',
    chip: '987654321',
    veterinary: 'Dra. Santos',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    illnesses: 'Esporotricose',
    address: 'Avenida Central, 456'
  },
  {
    name: 'Mia',
    species: 'Gato',
    race: 'Angorá',
    sex: 'Fêmea',
    tutor: 'Maria Souza',
    chip: '567890123',
    veterinary: 'Dr. Pereira',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    illnesses: 'Toxoplasmose',
    address: 'Rua dos Passarinhos, 789'
  },
  {
    name: 'Oliver',
    species: 'Gato',
    race: 'Maine Coon',
    sex: 'Macho',
    tutor: 'Pedro Lima',
    chip: '321654987',
    veterinary: 'Dra. Almeida',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    illnesses: 'Raiva',
    address: 'Travessa das Árvores, 234'
  },
  {
    name: 'Chloe',
    species: 'Gato',
    race: 'Bengal',
    sex: 'Fêmea',
    tutor: 'Carla Santos',
    chip: '456789032',
    veterinary: 'Dr. Costa',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80',
    illnesses: 'Nenhuma',
    address: 'Rua dos Gatos, 567'
  },
  {
    name: 'Max',
    species: 'Gato',
    race: 'Ragdoll',
    sex: 'Macho',
    tutor: 'Fernanda Oliveira',
    chip: '789012345',
    veterinary: 'Dra. Lima',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    illnesses: 'Nenhuma',
    address: 'Avenida dos Sonhos, 890'
  },
  {
    name: 'Bella',
    species: 'Gato',
    race: 'Sphynx',
    sex: 'Fêmea',
    tutor: 'Rafaela Silva',
    chip: '234567890',
    veterinary: 'Dr. Ferreira',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    illnesses: 'Nenhuma',
    address: 'Rua da Lua, 123'
  },
  {
    name: 'Milo',
    species: 'Gato',
    race: 'British Shorthair',
    sex: 'Macho',
    tutor: 'Antônio Santos',
    chip: '890123456',
    veterinary: 'Dra. Martins',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    illnesses: 'Nenhuma',
    address: 'Avenida das Estrelas, 456'
  },
  {
    name: 'Lucy',
    species: 'Gato',
    race: 'Scottish Fold',
    sex: 'Fêmea',
    tutor: 'Mariana Oliveira',
    chip: '567890123',
    veterinary: 'Dr. Castro',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    illnesses: 'Nenhuma',
    address: 'Travessa da Primavera, 789'
  },
  {
    name: 'Charlie',
    species: 'Gato',
    race: 'Exótico de Pêlo Curto',
    sex: 'Macho',
    tutor: 'Carlos Lima',
    chip: '321654987',
    veterinary: 'Dra. Nunes',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    illnesses: 'Nenhuma',
    address: 'Rua das Pedras, 234'
  }
];

const Zoonoses = () => {
  const [state, setState] = useState({
    logged: false, openModal: false, comp: true,
    dataTable: JSON.parse(sessionStorage.getItem("cats")) || [],
    dataPrev: JSON.parse(sessionStorage.getItem("cats")) || [],
  })


  const handleCloseModal = () => {
    setState(prev => ({ ...prev, openModal: false, comp: true }))
  }

  const handleOpenModal = () => {
    setState(prev => ({ ...prev, openModal: true }))
  }

  const submitLogin = () => {
    setState(prev => ({ ...prev, openModal: false, logged: true }))
  }

  const handleComponent = () => {
    setState(prev => ({ ...prev, comp: !prev.comp }))
  }

  const handleDataTable = (data) => {
    const cats = JSON.parse(sessionStorage.getItem("cats"))
    sessionStorage.setItem("cats", JSON.stringify([...cats, data]));

    setState(prev => ({ ...prev, dataTable: [...prev.dataTable, data], dataPrev: [...prev.dataTable, data] }))
  }

  const handleFiltro = (chip, clear) => {
    if (clear) {
      setState(prev => ({ ...prev, dataTable: prev.dataPrev }))
    } else {
      if (chip) setState(prev => ({ ...prev, dataTable: prev.dataTable.filter(i => i.chip === chip) }))
    }
  }

  useEffect(() => {
    const cats = JSON.parse(sessionStorage.getItem("cats"))
    if (!cats) {
      sessionStorage.setItem("cats", JSON.stringify(gatos))
      setState(prev => ({ ...prev, dataTable: gatos, dataPrev: gatos }))
    }
  }, [])

  return (
    <>
      <BasicModal open={state.openModal} handleClose={handleCloseModal} submitLogin={submitLogin} />
      <Header logged={state.logged} comp={state.comp} handleOpenModal={handleOpenModal} handleComponent={handleComponent} />

      {
        state.comp ? <TableUI handleFiltro={handleFiltro} dataTable={state.dataTable} basic={state.logged} /> : <TableInsert handleDataTable={handleDataTable} />
      }
    </>
  )
}

export default Zoonoses