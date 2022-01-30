import React from 'react'
import axios from "axios";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {
    id: 'fecha_gps',
    label: 'Fecha',
    minWidth: 100,
    align: 'center',
    
  },
 
  { id: 'text_corto', label: 'Vehiculo', minWidth: 100 },
  {
    id: 'nombre_evento_trd',
    label: 'Alerta',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'detalle_evento',
    label: 'Detalle',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'georeferencia',
    label: 'Georeferencia',
    minWidth: 170,
    align: 'right',
    
  },
  
];

export default function Alertas() {
   const [rows1, setAlarma] = React.useState([]);
  async function  PeticionAlertas() {
    try {
      const data1 = "fc_function=BucarClientesCuenta";
      const Cliente = await axios.post("/portal/data/Adm_Alarmas.php", data1);
      const id_cliente= Cliente.data[0].id_cliente
      const data2 = 'fc_function=searchAdm_AlarmasAll&id_cliente='+id_cliente+"&desde=panel"
      const alarma = await axios.post("/portal/data/Adm_Alarmas.php", data2);
      setAlarma(alarma.data)
    } catch (error) {
      console.log(error)
    }
  }
 
  React.useEffect(() => {
    PeticionAlertas()
    console.log(rows1)
  }, []);
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return (
    <>  
    <Paper sx={{ width: '100%', overflow: 'hidden',height: '85vh' }}>
      <TableContainer sx={{ height: '93%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id_gestor}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:13}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id_gestor} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ fontSize:11}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
    )
}
