import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ApprovalIcon from '@mui/icons-material/Approval';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

const QuickActions = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = JSON.parse(localStorage.getItem('auth'));
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  useEffect(() => {
    axios.get('https://farmersmarketapi-e0c4d5dpc7e7fwbd.northeurope-01.azurewebsites.net/api/v1/Users/farmers', config)
      .then(response => {
        setFarmers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleApprove = (f) => {
    f.farmerApproved = false
    axios.put(`https://farmersmarketapi-e0c4d5dpc7e7fwbd.northeurope-01.azurewebsites.net/api/v1/Users/${f.id}`, f)
    .then(response => {
      alert(`Farmer ${f.id} approved successfully!`);
      // Optionally refresh the user list or update the state accordingly
    })
    .catch(error => {
      alert(`Error approving farmer ${f.id}: ${error.message}`);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <h3>Pending Farmers</h3>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {farmers.map((f) => (
                <ListItem
                    key={f.id}
                    disableGutters
                    secondaryAction={
                        <IconButton aria-label="approve" onClick={() => handleApprove(f)}>
                          Approve
                          <ApprovalIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={`ID: ${f.id}`} />
                    <ListItemText primary={`Username: ${f.userName}`} />
                    <ListItemText primary={`Email: ${f.email}`} />
                    <ListItemText primary={`Phone number: ${f.phoneNumber}`} />
                </ListItem>
            ))}
        </List>
    </div>
  );
};

export default QuickActions;
