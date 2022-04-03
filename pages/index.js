import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Script from 'next/script'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';

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
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={7} md={5} lg={4}>
              <div className={`${styles.auth_wrapper}`}>
                <img src='img/logo-md.png' />
                  <form className={`${styles.form}`}>
                    <TextField id="email" label="Email" variant="standard" color="secondary" />
                    <TextField id="password" type="password" label="Senha" color="secondary" variant="standard" />
                    <Button variant="text" color="secondary">Entrar</Button>
                  </form>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}
