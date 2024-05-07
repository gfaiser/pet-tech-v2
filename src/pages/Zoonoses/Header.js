import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function ButtonAppBar({ logged, handleOpenModal, handleComponent, comp }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#eee' }}>
                <Toolbar style={{ justifyContent: "flex-end" }}>
                    {logged ? (
                        <div>
                            <Button disabled={!comp} variant="contained" onClick={handleComponent} style={{ marginRight: 16 }}>Cadastrar</Button>
                            <Button disabled={comp} variant="contained" color="secondary" onClick={handleComponent}>Tabela</Button>
                        </div>
                    ) : <Button variant="contained" onClick={handleOpenModal}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}