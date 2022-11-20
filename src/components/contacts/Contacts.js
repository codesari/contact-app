import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

//?custom hook'u import ediyoruz
import { deleteUser, useFetch } from "../../utils/functions";
const Contacts = ({ editUser }) => {
  //* custom hook'u kullanırken return degerlerini suslu icine yazip kullaniyoruz
  const { isLoading, contact } = useFetch();

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* NOT : A */}
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : contact?.length === 0 ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Data not found.
                </TableCell>
              </TableRow>
            ) : (
              contact?.map((item, index) => {
                const { username, phone, gender, id } = item;
                return (
                  <TableRow>
                    <TableCell align="center">{username}</TableCell>
                    <TableCell align="center">{phone}</TableCell>
                    <TableCell align="center">{gender}</TableCell>
                    <TableCell align="center" onClick={() => deleteUser(id)}>
                      {<DeleteIcon />}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => editUser(id, username, phone, gender)}
                    >
                      {<EditIcon />}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;

//? NOT:A
//* gelen verinin 3 durumu olabilir:
//? 1-veri gelmedigi durumda loading görünsün
//? 2-veri geldi fakat içi boşsa veri bulunamadi mesaji
//? 3-veriler basariyla geldi.bunlarin yazilma islemi
