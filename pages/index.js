import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Script from 'next/script'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Test() {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/p5.js" />
      </Head>
      <div className={`${styles.background}`}></div>
      <Script src="/sketch.js" />
      <div className={`${styles.grid_wrapper}`}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container  justifyContent="flex-end">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={`${styles.auth_wrapper}`}>
              <img src='img/logo.png' />
              <div >
                <form className={`${styles.form}`}>
                  <TextField id="email" label="Email" variant="standard" />
                  <TextField id="password" type="password" label="Senha" variant="standard" />
                  <Button variant="text">Entrar</Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
        </Box>
      </div>
    </>
  )
}
