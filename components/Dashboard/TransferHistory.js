import React from 'react'
import Typography from '@mui/material/Typography';  
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(account, amount) {
    return { account, amount };
  }

const rows = [
    createData('123633434434',  -1234),
    createData('123565657878',  +10000),
    createData('45453545435', -12323),
    createData('45454354545', +232),
    createData('23234535455', +12321),
  ];
  

function TransferHistory() {
  return (
    <>

    <Typography variant = "h5" color = "primary">
                Recent Transactions
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Account Number</TableCell>
            <TableCell align="right">Amount</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.account}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.account}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default TransferHistory