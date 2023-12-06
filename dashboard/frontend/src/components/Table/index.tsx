import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux'
import { ContentSelectors, ConceptData } from '@state/content';

import VoteButton from '@components/VoteButton';

export default function BasicTable() {
    const concepts = useSelector(ContentSelectors.selectContent).data as ConceptData[]

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell style={{minWidth:"20em"}} align="left">Concept Name</TableCell>
                {/* <TableCell align="right">Link</TableCell> */}
                <TableCell align="left">Vote</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {concepts.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {index}
                </TableCell>
                <TableCell style={{maxWidth:"30em", overflowX:"auto"}} align="left"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank">{row.concept_name}</a></TableCell>
                {/* <TableCell align="right"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank"><AthenaLogo height="1.5em" /></a></TableCell> */}
                <TableCell align="right"><VoteButton concept_id={row.concept_id} concept_name={row.concept_name} formSpecification={row.formSpecification} /></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}