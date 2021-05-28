import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography} from '@material-ui/core';

export const Login = () => {
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');

    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <h2>Log In</h2>
                </Grid>
                <TextField  value={name}  onChange={(e) => setname(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField  value={password}  onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Typography style={{margin: 4}} >
                     <Link to="/forgot" >
                        Forgot password ?
                </Link>
                </Typography>
                <Button type='submit'  variant="contained" style={btnstyle} fullWidth>Login</Button>
            <Grid align='center'>
                    <h2>Create Account</h2>
                </Grid>
                <TextField value={name}  onChange={(e) => setname(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField  value={password}  onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Create Account</Button>
            </Paper>
        </Grid>
    )
}
