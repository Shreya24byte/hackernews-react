import React from 'react';
import { Button, Grid, Paper, TextField, Typography} from '@material-ui/core';

export const ForgotPassword = () => {
    const paperStyle={padding :20,height:'40vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return (
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <h2>Reset password</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' fullWidth required/>
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Send Email</Button>
        </Paper>
    )
}
