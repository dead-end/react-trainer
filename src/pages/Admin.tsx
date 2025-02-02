import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { TGithubConfig } from '../libs/types';
import { useConfigContext } from '../libs/hooks/useConfigContext';

const Admin = () => {
  const { config, setConfig } = useConfigContext();
  const [formData, setFormData] = useState<TGithubConfig>({
    user: config.user,
    repo: config.repo,
    token: config.token,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formData);
    setConfig(formData);
  };

  return (
    <Paper sx={{ paddingX: 8, paddingY: 4, marginTop: 4 }}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginY: 4 }}
      >
        <Typography variant='h6'>Github Configuration</Typography>
        <TextField
          label='User'
          name='user'
          value={formData.user}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label='Repository'
          name='repo'
          value={formData.repo}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label='Token'
          name='token'
          value={formData.token}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default Admin;
