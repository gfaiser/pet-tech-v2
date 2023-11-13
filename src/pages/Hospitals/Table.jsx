import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../lib/firebase'


export default function Orders() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'hospitals'), orderBy('name', 'desc'))
        onSnapshot(q, (querySnapshot) => {            
            setTasks(querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        })
    }, [])

    return (
        <>
            <Typography>Cadastrados recentes</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Telefone</TableCell>
                        <TableCell>Endereço</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.length > 0 && tasks.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{row.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}