import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, Box, CardActionArea } from '@mui/material'

// ** Next Imports
import Link from 'next/link'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

const Home = () => {
  return (
    <>
      <Box sx={{ p: 2, display: 'flex', background: '#00466e', alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid  alignItems='center' sx={{display:'flex'}}>
          <Avatar
                src="/images/logos/logo_sotnmt.png"
                sx={{ width: 60, height: 60,marginRight:"10px"}}
              />
          <Typography
            align='left'
            sx={{
              color: '#fff !important',
              p: 2,
              lineHeight: 1,
              fontWeight: 500,
              textTransform: 'uppercase',
              fontSize: '1.4rem !important'
            }}
          >
            CỔNG THÔNG TIN DỮ LIỆU TÀI NGUYÊN MÔI TRƯỜNG TỈNH SƠN LA
          </Typography>
        </Grid>
        <Grid container md={6} alignItems='center' justifyContent='flex-end'>
          <Link passHref href='/'>
            <Typography sx={{ color: '#fff', fontSize: '12px' }}>Hướng dẫn sử dụng</Typography>
          </Link>
          <Typography variant='h6' align='right' sx={{ color: '#fff' }}>
            &nbsp;|&nbsp;
          </Typography>
          <UserDropdown />
        </Grid>
      </Box>
      <Grid container className='background-home'>
        <Grid container xs={12} md={12} justifyContent='center' sx={{pt:40,mb:20}}>
          <Grid container direction='row' justifyContent='center' spacing={1} xs={10} md={9} sx={{ p: 2 }}>
            <Link href='/dat-dai/chung'>
              <Grid item xs={6} md={2}>
                <Card sx={{ maxWidth: 200 }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image='/images/logos/geological-sign.png'
                      alt='geological-sign'
                      sx={{ margin: '20px auto', width: '75%' }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component='div'
                        align='center'
                        sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}
                      >
                        Đất đai
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Link>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/giadat.png'
                    alt='giadat'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Giá đất & GPMB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/hydrometeorology-sign.png'
                    alt='hydrometeorology-sign'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      TNN, KS, KTTV
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/env-sign.png'
                    alt='env-sign'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Môi trường
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/logo_sotnmt.png'
                    alt='logo_sotnmt'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Thanh tra
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/office.png'
                    alt='office'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Văn phòng
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='center' spacing={1} xs={10} md={9} sx={{ p: 2 }}>
           
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/office-dkdd.png'
                    alt='office-dkdd'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Văn phòng ĐKĐĐ
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/waterresources-sign.png'
                    alt='waterresources-sign'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Quan trắc
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/slack.png'
                    alt='slack'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      CNTT
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='/images/logos/quydat.png'
                    alt='quydat'
                    sx={{ margin: '20px auto', width: '75%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom align='center' component='div' sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                      Phát triển quỹ đất
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="footer" sx={{ display:'flex',flexDirection:'column' }}>
        <Typography sx={{ color: '#fff', fontSize: '24' }}>Sở TNMT Sơn La</Typography>
        <Typography sx={{ color: '#fff', fontSize: '24' }}>Viện thủy văn môi trường và biến đổi khí hậu</Typography>
        <Typography sx={{ color: '#fff', fontSize: '24' }}>mail</Typography>
        <Typography sx={{ color: '#fff', fontSize: '24' }}>số điện thoại</Typography>
        <Typography sx={{ color: '#fff', fontSize: '24' }}>địa chỉ</Typography>
      </Grid>
    </>
  )
}

export default Home
