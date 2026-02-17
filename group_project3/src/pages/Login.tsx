import React from 'react'



import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


const Login: React.FC = () => {
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">
 
                <Container maxWidth="sm" sx={'400'}>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                </Container>
                {/* <Grid size={2}>
                    <Item>2</Item>
                </Grid> */}
            </Box>
        </div>
    )
}

export default Login
