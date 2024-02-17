import { useState } from 'react'
import { Grid, Paper, Box, Toolbar, IconButton, TextField } from '@mui/material'
import FormatDate from 'src/@core/components/format-date'
import FormLicenseFee from 'src/views/license-fee/form'
import DataGridComponent from 'src/@core/components/data-grid'
import { GridColDef } from '@mui/x-data-grid'
import ShowFilePDF from 'src/@core/components/show-file-pdf'
import DeleteData from 'src/@core/components/delete-data'
import GetAppIcon from '@mui/icons-material/GetApp'
import Error401 from 'src/pages/401'
import { checkAccessPermission } from 'src/@core/layouts/checkAccessPermission'
import { useRouter } from 'next/router'
import Breadcrumb from 'src/@core/components/breadcrumb'

const LandManagementCommon = () => {
  const [postSuccess, setPostSuccess] = useState(false)
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState)
  }
  console.log(postSuccess)
  const handleDownloadClick = () => {
    console.log(`Downloading file:`)
  }

  const data = [
    {
      id: 1,
      stt: 1,
      soQDTCQ: '19/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',
      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 2,
      stt: 2,
      soQDTCQ: '17/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      qd_bosung: { soQDTCQ: 'QD002', filePDF: 'path/to/pdf2.pdf' },
      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 3,
      stt: 3,
      soQDTCQ: '16/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 4,
      stt: 4,
      soQDTCQ: '15/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 5,
      stt: 5,
      soQDTCQ: '14/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 6,
      stt: 6,
      soQDTCQ: '10/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 7,
      stt: 7,
      soQDTCQ: '11/2023/TT-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 8,
      stt: 8,
      soQDTCQ: '08/VBHN-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 9,
      stt: 9,
      soQDTCQ: '06/VBHN-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    },
    {
      id: 10,
      stt: 10,
      soQDTCQ: '05/VBHN-BTNMT',
      ngayKy: '2024-02-02',
      trichyeuvb:'Dữ liệu phòng',

      filePath: 'path/to/pdf2.pdf'
    }
  ]

  // const [resData, setResData] = useState([]);
  // const [loading, setLoading] = useState(false)

  const columns: GridColDef[] = [
    { field: 'stt', headerAlign: 'center', align: 'center',headerName: 'STT', },
    {
      field: 'soQDTCQ',
      headerAlign: 'center',
      headerName: 'Số hiệu văn bản',
      renderCell: (data: any) => <ShowFilePDF name={data.row.soQDTCQ} src={data.row.filePDF} />
    },
    {
      field: 'ngayKy',
      align: 'center',
      headerAlign: 'center',
      headerName: 'Ngày ban hành',
      renderCell: (data: any) => FormatDate(data.row.ngayKy)
    },
    {
      field: 'trichyeuvb',
      headerAlign: 'center',
      headerName: 'Trích yếu văn bản',
      flex: 1
    },
    {
      field: 'downloadIcon',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Tệp đính kèm',
      sortable: false,
      renderCell: () => (
        <IconButton onClick={() => handleDownloadClick()}>
          <GetAppIcon />
        </IconButton>
      )
    },

    //Action
    {
      field: 'actions',
      headerAlign: 'center',
      headerName: 'Thao tác',
      sortable: false,
      renderCell: data => (
        <Box>
          <FormLicenseFee isEdit={true} data={data.row} setPostSuccess={handlePostSuccess} />
          <DeleteData url={'tien-cap-quyen'} data={data} setPostSuccess={handlePostSuccess} />
        </Box>
      )
    }
  ]

  const router = useRouter();
  const routePath = router.pathname; 
  const routeSegment = routePath.split('/')[1];

  return checkAccessPermission(routeSegment, 'view') ? 
  (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <Toolbar variant='dense'>
            <Grid container justifyContent={'end'}>
            <Grid item xs={12} sm={12} md={4}>
              <TextField sx={{ p: 0 }} size='small' fullWidth variant='outlined' placeholder='Số hiệu văn bản...' />
            </Grid>
              <Grid item>
                <FormLicenseFee setPostSuccess={handlePostSuccess} isEdit={false} />
              </Grid>
            </Grid>
          </Toolbar>
          <DataGridComponent rows={data} columns={columns} />
        </Paper>
      </Grid>
    </Grid>
  ) : <Error401 />
}

export default LandManagementCommon
