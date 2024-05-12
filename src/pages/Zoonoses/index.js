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
    illnesses: 'Resfriado',
    address: 'Rua das Flores, 123',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Simba',
    species: 'Gato',
    race: 'Persa',
    sex: 'Macho',
    tutor: 'João Oliveira',
    chip: '987654321',
    veterinary: 'Dra. Santos',
    illnesses: 'Conjuntivite',
    address: 'Avenida Central, 456',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Mia',
    species: 'Gato',
    race: 'Angorá',
    sex: 'Fêmea',
    tutor: 'Maria Souza',
    chip: '567890123',
    veterinary: 'Dr. Pereira',
    illnesses: 'Otite',
    address: 'Rua dos Passarinhos, 789',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Oliver',
    species: 'Gato',
    race: 'Maine Coon',
    sex: 'Macho',
    tutor: 'Pedro Lima',
    chip: '321654987',
    veterinary: 'Dra. Almeida',
    illnesses: 'Obesidade',
    address: 'Travessa das Árvores, 234',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Chloe',
    species: 'Gato',
    race: 'Bengal',
    sex: 'Fêmea',
    tutor: 'Carla Santos',
    chip: '456789032',
    veterinary: 'Dr. Costa',
    illnesses: 'Alergia',
    address: 'Rua dos Gatos, 567',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Max',
    species: 'Gato',
    race: 'Ragdoll',
    sex: 'Macho',
    tutor: 'Fernanda Oliveira',
    chip: '789012345',
    veterinary: 'Dra. Lima',
    illnesses: 'Pulgas',
    address: 'Avenida dos Sonhos, 890',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Bella',
    species: 'Gato',
    race: 'Sphynx',
    sex: 'Fêmea',
    tutor: 'Rafaela Silva',
    chip: '234567890',
    veterinary: 'Dr. Ferreira',
    illnesses: 'Deficiência de vitaminas',
    address: 'Rua da Lua, 123',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Milo',
    species: 'Gato',
    race: 'British Shorthair',
    sex: 'Macho',
    tutor: 'Antônio Santos',
    chip: '890123456',
    veterinary: 'Dra. Martins',
    illnesses: 'Infecção urinária',
    address: 'Avenida das Estrelas, 456',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Lucy',
    species: 'Gato',
    race: 'Scottish Fold',
    sex: 'Fêmea',
    tutor: 'Mariana Oliveira',
    chip: '567890123',
    veterinary: 'Dr. Castro',
    illnesses: 'Artrite',
    address: 'Travessa da Primavera, 789',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Charlie',
    species: 'Gato',
    race: 'Exótico de Pêlo Curto',
    sex: 'Macho',
    tutor: 'Carlos Lima',
    chip: '321654987',
    veterinary: 'Dra. Nunes',
    illnesses: 'Estresse',
    address: 'Rua das Pedras, 234',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Whiskers',
    sex: 'Macho',
    race: 'Siamês',
    tutor: 'Ana Silva',
    chip: '057708592',
    species: 'Gato',
    veterinary: 'Dr. Marcos Silva',
    address: 'Rua dos Bandeirantes, 123',
    illnesses: 'Verminose',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Sasha',
    sex: 'Fêmea',
    race: 'Persa',
    tutor: 'José Santos',
    chip: '146223267',
    species: 'Gato',
    veterinary: 'Dra. Ana Souza',
    address: 'Avenida Brasil, 456',
    illnesses: 'Dermatite',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Tigger',
    sex: 'Macho',
    race: 'Maine Coon',
    tutor: 'Maria Oliveira',
    chip: '151725894',
    species: 'Gato',
    veterinary: 'Dr. Rodrigo Santos',
    address: 'Rua Augusta, 789',
    illnesses: 'Problemas dentários',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Muffin',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Carlos Souza',
    chip: '269308361',
    species: 'Gato',
    veterinary: 'Dra. Fernanda Oliveira',
    address: 'Avenida Paulista, 1011',
    illnesses: 'Insuficiência renal',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Shadow',
    sex: 'Macho',
    race: 'Bengal',
    tutor: 'Fernanda Costa',
    chip: '651574345',
    species: 'Gato',
    veterinary: 'Dr. Gustavo Costa',
    address: 'Rua da Consolação, 1213',
    illnesses: 'Diabetes',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Angel',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Paulo Pereira',
    chip: '815040135',
    species: 'Gato',
    veterinary: 'Dra. Mariana Almeida',
    address: 'Avenida Rio Branco, 1415',
    illnesses: 'Doença do trato urinário',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Boots',
    sex: 'Macho',
    race: 'Ragdoll',
    tutor: 'Juliana Rodrigues',
    chip: '030515604',
    species: 'Gato',
    veterinary: 'Dr. Lucas Martins',
    address: 'Rua Padre João, 1617',
    illnesses: 'Doença periodontal',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Cleo',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Marcos Martins',
    chip: '875183727',
    species: 'Gato',
    veterinary: 'Dra. Carla Lima',
    address: 'Rua General Osório, 1819',
    illnesses: 'Tumor',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Oliver',
    sex: 'Macho',
    race: 'Abissínio',
    tutor: 'Amanda Ferreira',
    chip: '783282898',
    species: 'Gato',
    veterinary: 'Dr. Rafael Gonçalves',
    address: 'Avenida Getúlio Vargas, 2021',
    illnesses: 'Anemia',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Missy',
    sex: 'Fêmea',
    race: 'British Shorthair',
    tutor: 'Luiz Almeida',
    chip: '355934673',
    species: 'Gato',
    veterinary: 'Dra. Juliana Ribeiro',
    address: 'Rua Barão de Itapetininga, 2223',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Finn',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Camila Lima',
    chip: '164692130',
    species: 'Gato',
    veterinary: 'Dr. André Carvalho',
    address: 'Avenida Presidente Vargas, 2425',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Lily',
    sex: 'Fêmea',
    race: 'Scottish Fold',
    tutor: 'Rafael Gonçalves',
    chip: '233181868',
    species: 'Gato',
    veterinary: 'Dra. Patrícia Cruz',
    address: 'Rua Marechal Deodoro, 2627',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Rocky',
    sex: 'Macho',
    race: 'Tonquinês',
    tutor: 'Patrícia Ribeiro',
    chip: '198039071',
    species: 'Gato',
    veterinary: 'Dr. Luiz Nascimento',
    address: 'Rua Professor Carlos de Carvalho, 2829',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Coco',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'André Sousa',
    chip: '570857239',
    species: 'Gato',
    veterinary: 'Dra. Camila Mendes',
    address: 'Avenida Atlântica, 3031',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Max',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Mariana Carvalho',
    chip: '617944627',
    species: 'Gato',
    veterinary: 'Dr. José Dias',
    address: 'Rua Visconde de Guarapuava, 3233',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Ginger',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Lucas Cruz',
    chip: '931881294',
    species: 'Gato',
    veterinary: 'Dra. Adriana Fernandes',
    address: 'Rua Quinze de Novembro, 3435',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Oreo',
    sex: 'Macho',
    race: 'Himalaia',
    tutor: 'Adriana Nascimento',
    chip: '747944809',
    species: 'Gato',
    veterinary: 'Dr. Paulo Pereira',
    address: 'Avenida Afonso Pena, 3637',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Lulu',
    sex: 'Fêmea',
    race: 'Norueguês da Floresta',
    tutor: 'Gustavo Mendes',
    chip: '350145939',
    species: 'Gato',
    veterinary: 'Dra. Amanda Sousa',
    address: 'Rua Padre Anchieta, 3839',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Milo',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Carla Dias',
    chip: '858751921',
    species: 'Gato',
    veterinary: 'Dr. Carlos Carvalho',
    address: 'Avenida República Argentina, 4041',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Ziggy',
    sex: 'Fêmea',
    race: 'Manx',
    tutor: 'Rodrigo Fernandes',
    chip: '320362664',
    species: 'Gato',
    veterinary: 'Dra. Bianca Rodrigues',
    address: 'Rua Francisco Rocha, 4243',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Luna',
    sex: 'Fêmea',
    race: 'Siamês',
    tutor: 'Ana Silva',
    chip: '161730960',
    species: 'Gato',
    veterinary: 'Dr. Marcos Silva',
    address: 'Rua dos Bandeirantes, 123',
    illnesses: 'Diabetes',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Simba',
    sex: 'Macho',
    race: 'Persa',
    tutor: 'José Santos',
    chip: '546961541',
    species: 'Gato',
    veterinary: 'Dra. Ana Souza',
    address: 'Avenida Brasil, 456',
    illnesses: 'Doença do trato urinário',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Mia',
    sex: 'Fêmea',
    race: 'Maine Coon',
    tutor: 'Maria Oliveira',
    chip: '829205088',
    species: 'Gato',
    veterinary: 'Dr. Rodrigo Santos',
    address: 'Rua Augusta, 789',
    illnesses: 'Doença periodontal',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Thor',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Carlos Souza',
    chip: '412498378',
    species: 'Gato',
    veterinary: 'Dra. Fernanda Oliveira',
    address: 'Avenida Paulista, 1011',
    illnesses: 'Tumor',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Bella',
    sex: 'Fêmea',
    race: 'Bengal',
    tutor: 'Fernanda Costa',
    chip: '242491306',
    species: 'Gato',
    veterinary: 'Dr. Gustavo Costa',
    address: 'Rua da Consolação, 1213',
    illnesses: 'Anemia',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Felix',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Paulo Pereira',
    chip: '290742530',
    species: 'Gato',
    veterinary: 'Dra. Mariana Almeida',
    address: 'Avenida Rio Branco, 1415',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Molly',
    sex: 'Fêmea',
    race: 'Ragdoll',
    tutor: 'Juliana Rodrigues',
    chip: '662027938',
    species: 'Gato',
    veterinary: 'Dr. Lucas Martins',
    address: 'Rua Padre João, 1617',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Leo',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Marcos Martins',
    chip: '284200271',
    species: 'Gato',
    veterinary: 'Dra. Carla Lima',
    address: 'Rua General Osório, 1819',
    illnesses: 'Obesidade',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Nina',
    sex: 'Fêmea',
    race: 'Abissínio',
    tutor: 'Amanda Ferreira',
    chip: '755433574',
    species: 'Gato',
    veterinary: 'Dr. Rafael Gonçalves',
    address: 'Avenida Getúlio Vargas, 2021',
    illnesses: 'Alergia',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Oscar',
    sex: 'Macho',
    race: 'British Shorthair',
    tutor: 'Luiz Almeida',
    chip: '894450715',
    species: 'Gato',
    veterinary: 'Dra. Juliana Ribeiro',
    address: 'Rua Barão de Itapetininga, 2223',
    illnesses: 'Pulgas',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Cleo',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Camila Lima',
    chip: '580838881',
    species: 'Gato',
    veterinary: 'Dr. André Carvalho',
    address: 'Avenida Presidente Vargas, 2425',
    illnesses: 'Deficiência de vitaminas',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Max',
    sex: 'Macho',
    race: 'Scottish Fold',
    tutor: 'Rafael Gonçalves',
    chip: '027253802',
    species: 'Gato',
    veterinary: 'Dra. Patrícia Cruz',
    address: 'Rua Marechal Deodoro, 2627',
    illnesses: 'Infecção urinária',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Lucy',
    sex: 'Fêmea',
    race: 'Tonquinês',
    tutor: 'Patrícia Ribeiro',
    chip: '175587266',
    species: 'Gato',
    veterinary: 'Dr. Luiz Nascimento',
    address: 'Rua Professor Carlos de Carvalho, 2829',
    illnesses: 'Artrite',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Tiger',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'André Sousa',
    chip: '258076239',
    species: 'Gato',
    veterinary: 'Dra. Camila Mendes',
    address: 'Avenida Atlântica, 3031',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Lola',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Mariana Carvalho',
    chip: '822736947',
    species: 'Gato',
    veterinary: 'Dr. José Dias',
    address: 'Rua Visconde de Guarapuava, 3233',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Charlie',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Lucas Cruz',
    chip: '769501844',
    species: 'Gato',
    veterinary: 'Dra. Adriana Fernandes',
    address: 'Rua Quinze de Novembro, 3435',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Coco',
    sex: 'Fêmea',
    race: 'Himalaia',
    tutor: 'Adriana Nascimento',
    chip: '113214974',
    species: 'Gato',
    veterinary: 'Dr. Paulo Pereira',
    address: 'Avenida Afonso Pena, 3637',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Rocky',
    sex: 'Macho',
    race: 'Norueguês da Floresta',
    tutor: 'Gustavo Mendes',
    chip: '870146635',
    species: 'Gato',
    veterinary: 'Dra. Amanda Sousa',
    address: 'Rua Padre Anchieta, 3839',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Misty',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Carla Dias',
    chip: '752834082',
    species: 'Gato',
    veterinary: 'Dr. Carlos Carvalho',
    address: 'Avenida República Argentina, 4041',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Gizmo',
    sex: 'Macho',
    race: 'Manx',
    tutor: 'Rodrigo Fernandes',
    chip: '050106534',
    species: 'Gato',
    veterinary: 'Dra. Bianca Rodrigues',
    address: 'Rua Francisco Rocha, 4243',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Paçoca',
    sex: 'Macho',
    race: 'Siamês',
    tutor: 'Ana Silva',
    chip: '514959372',
    species: 'Gato',
    veterinary: 'Dr. Marcos Silva',
    address: 'Rua dos Bandeirantes, 123',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Melancia',
    sex: 'Fêmea',
    race: 'Persa',
    tutor: 'José Santos',
    chip: '981125051',
    species: 'Gato',
    veterinary: 'Dra. Ana Souza',
    address: 'Avenida Brasil, 456',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Bolinha',
    sex: 'Macho',
    race: 'Maine Coon',
    tutor: 'Maria Oliveira',
    chip: '224470884',
    species: 'Gato',
    veterinary: 'Dr. Rodrigo Santos',
    address: 'Rua Augusta, 789',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Pipoca',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Carlos Souza',
    chip: '466817821',
    species: 'Gato',
    veterinary: 'Dra. Fernanda Oliveira',
    address: 'Avenida Paulista, 1011',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Frajola',
    sex: 'Macho',
    race: 'Bengal',
    tutor: 'Fernanda Costa',
    chip: '396663566',
    species: 'Gato',
    veterinary: 'Dr. Gustavo Costa',
    address: 'Rua da Consolação, 1213',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Amora',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Paulo Pereira',
    chip: '692007856',
    species: 'Gato',
    veterinary: 'Dra. Mariana Almeida',
    address: 'Avenida Rio Branco, 1415',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Biscoito',
    sex: 'Macho',
    race: 'Ragdoll',
    tutor: 'Juliana Rodrigues',
    chip: '238012421',
    species: 'Gato',
    veterinary: 'Dr. Lucas Martins',
    address: 'Rua Padre João, 1617',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Pituco',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Marcos Martins',
    chip: '910114573',
    species: 'Gato',
    veterinary: 'Dra. Carla Lima',
    address: 'Rua General Osório, 1819',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Pipoca',
    sex: 'Fêmea',
    race: 'Abissínio',
    tutor: 'Amanda Ferreira',
    chip: '141353361',
    species: 'Gato',
    veterinary: 'Dr. Rafael Gonçalves',
    address: 'Avenida Getúlio Vargas, 2021',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Pretinho',
    sex: 'Macho',
    race: 'British Shorthair',
    tutor: 'Luiz Almeida',
    chip: '633724621',
    species: 'Gato',
    veterinary: 'Dra. Juliana Ribeiro',
    address: 'Rua Barão de Itapetininga, 2223',
    illnesses: 'Obesidade',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Chiquinha',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Camila Lima',
    chip: '672930379',
    species: 'Gato',
    veterinary: 'Dr. André Carvalho',
    address: 'Avenida Presidente Vargas, 2425',
    illnesses: 'Alergia',
    image: 'https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Tutu',
    sex: 'Macho',
    race: 'Scottish Fold',
    tutor: 'Rafael Gonçalves',
    chip: '160932678',
    species: 'Gato',
    veterinary: 'Dra. Patrícia Cruz',
    address: 'Rua Marechal Deodoro, 2627',
    illnesses: 'Pulgas',
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Fumaça',
    sex: 'Macho',
    race: 'Tonquinês',
    tutor: 'Patrícia Ribeiro',
    chip: '305532550',
    species: 'Gato',
    veterinary: 'Dr. Luiz Nascimento',
    address: 'Rua Professor Carlos de Carvalho, 2829',
    illnesses: 'Deficiência de vitaminas',
    image: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Jujuba',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'André Sousa',
    chip: '015925215',
    species: 'Gato',
    veterinary: 'Dra. Camila Mendes',
    address: 'Avenida Atlântica, 3031',
    illnesses: 'Infecção urinária',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Xodó',
    sex: 'Macho',
    race: 'Indefinida',
    tutor: 'Mariana Carvalho',
    chip: '020099319',
    species: 'Gato',
    veterinary: 'Dr. José Dias',
    address: 'Rua Visconde de Guarapuava, 3233',
    illnesses: 'Artrite',
    image: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Chiclete',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Lucas Cruz',
    chip: '645161585',
    species: 'Gato',
    veterinary: 'Dra. Adriana Fernandes',
    address: 'Rua Quinze de Novembro, 3435',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Docinho',
    sex: 'Macho',
    race: 'Himalaia',
    tutor: 'Adriana Nascimento',
    chip: '184768266',
    species: 'Gato',
    veterinary: 'Dr. Paulo Pereira',
    address: 'Avenida Afonso Pena, 3637',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
  },
  {
    name: 'Tigrão',
    sex: 'Macho',
    race: 'Norueguês da Floresta',
    tutor: 'Gustavo Mendes',
    chip: '906928227',
    species: 'Gato',
    veterinary: 'Dra. Amanda Sousa',
    address: 'Rua Padre Anchieta, 3839',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Babi',
    sex: 'Fêmea',
    race: 'Indefinida',
    tutor: 'Carla Dias',
    chip: '409663163',
    species: 'Gato',
    veterinary: 'Dr. Carlos Carvalho',
    address: 'Avenida República Argentina, 4041',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Totó',
    sex: 'Macho',
    race: 'Manx',
    tutor: 'Rodrigo Fernandes',
    chip: '849961322',
    species: 'Gato',
    veterinary: 'Dra. Bianca Rodrigues',
    address: 'Rua Francisco Rocha, 4243',
    illnesses: 'Saudável',
    image: 'https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
]

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