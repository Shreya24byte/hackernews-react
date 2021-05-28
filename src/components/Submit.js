import { Button, Grid, Paper, TextField} from '@material-ui/core';
import React, {useState} from 'react'

export const Submit = () => {
    const paperStyle={backgroundColor:'#fafaf0', padding :20,height:'50vh',width:300, margin:"20px auto"};
    const btnstyle={margin:'8px 0'};

    const [title, setTitle] = useState('');
    const [url, seturl] = useState('');
    const [text, setText] = useState('');
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <h2>Submit</h2>
                </Grid>
                <TextField  value={title} onChange={(e) => setTitle(e.target.value)} label='Title' placeholder='Enter title' fullWidth required/>
                <TextField value={url} onChange={(e) => seturl(e.target.value)} label='Url' placeholder='Enter url' type='text' fullWidth />
                <p>or</p>
                <TextField
          id="outlined-full-width"
          label="Text"
          style={{ margin: 8 }}
          placeholder="Enter text"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={text}
          onChange={() => setText()}
        />
                <Button type='submit'  variant="contained" style={btnstyle} fullWidth>Submit</Button>
            <Grid align='center'>
                </Grid>
            </Paper>
        </Grid>
    )
}
