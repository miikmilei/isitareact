import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//? Importar regalos
//---
import { Modal, Box, Typography, AppBar, Container, Grid, Toolbar } from '@mui/material';

//? Amo a mi niña hermosaa<3
function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    

    <Box>
      
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography color="secondary" textAlign={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Para mi amorcitooo:3
            </Typography>
            <Typography>
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography textAlign={'center'} variant="h3">Tienes una Nueva carta de tu niño^^</Typography>
        <center>
        <Typography>
          Holaaa isa, sabes estoy muy enamorado de tiii, quiero decirte que este 21 de septiembre
          es tu dia, eres mi niña y de verdad, lo mejor fue volver a hablar porque al final yo siento
          que los dos estaremos juntitosss^^
        </Typography>
        <h1></h1>
        <Typography>
          Sabes, amo hablar contigo porque me sacas todas las tristezas, tanto que estoy programando esta carta para que sepas
          lo linda y importante que eres tu, contigo se van los dolores, las melancolias, contigo doy paso a un nuevo corazon
          para amarte
        </Typography>
        <h1></h1>
        <Typography>
          Me haces olvidar lo triste que estoy a veces, porque aunque no lo creas, desde que hablamos me he sentido muy bien,
          y he subido de peso, lo cual es bueno porque hace unas semanas pesaba 7 kilos menos
        </Typography>
        <h1></h1>
        <Typography>
          Pero hey, no estamos hablando de peso, estamos hablando de tu corazon y de tus lindos sentimientos, de lo bella y unica que
          eres, sabes, amo ver tus fotos en destacadas, siento tanto y no sé como explicar lo que siento pero es una sensacion que las
          palabras no podrian describir pero si una palabra, que es:
        </Typography>
        <Typography>
          <h1>Amor^^</h1>
        </Typography>
        <Typography>
          Sabes isa, siento mucho por ti y aunque suene dificil de explicar, cuando no hablabamos te extrañaba un monton
          pero yo siento que cuando un amor es tal para cual, cuando hay diferencias siempre vamos a volver a nuestros lugares
          seguros, y mi lugar seguro eres tu, isabella duarte para todos, pero para mi eres
        </Typography>
        <h1></h1>
        <Typography>
          <h1>La niña mas hermosa de este mundo^^</h1>
        </Typography>
        <Typography>
          Sabes, estoy muy enamorado de ti, recuerdo cuando estaba viendo tiktok en 2023 y me aparecio ese video de esa niña de pelo corto y lentes,
          cuando la vi, senti mucho, a pesar de que en ese momento no la conocia, estaba muy enamorado de ella, luego, en la mañana de una clase la cual
          teniamos tiempo libre, veo que me aceptas la solicitud de instagram, y veo que tienes una historia que decia algo sobre esperar a que llegue tu
          amor, la verdad isa, sin esa historia nunca me hubiera motivado a escribirle a la niña que le daria sentido al amor desde ese dia, recuerdo la
          tarde een la que te escribi, estaba acostado en el sofa de casa de mi abuela con poca pila y algo nervioso esperando hasta que respondas jsjsjs,
          y vi que respondiste, me puse muuuuy contento pero tenia muchos nervios, y decidi preguntarle algo tonto, si tenia spotify y al poco rato, me senti
          muy feliz de hablarle a esa chica, sabiendo que estaba en un mal momento emocional, y aunque aun me siento mal, esa niña de pelo corto y lentes la
          cual llamo ahora mi amorcito me hace muy feliiiz
        </Typography>
        <h1>Mi amorcito jsjs^^</h1>
        <Typography>Amo poner tu nombre en las notas de codigo</Typography>
        <img src='https://i.imgur.com/hsQOzxK.png' width={300}></img>
        <Typography>Estas fueron notas de las practicas antes del torneo el cual te dedique mi amorcito </Typography>
        <h1>Mi amorcito, compre un regalito para ti</h1>
        </center>
      </Box>
      <center>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Para mi amorcito 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Yo se que te gusta mucho el roblox"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <center><h3>RE-BBAC-WF4C-YJXM-YCK4</h3></center>
            <center>
            <p>Puedes escanearlo aqui</p>
            <Button href='https://www.roblox.com/redeem'>Roblox Reedem</Button>
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <h3>Quiero dedicarte esta cancion la cual estuve escuchando mucho desde que hago la carta</h3>
      <Button variant="contained" href='https://open.spotify.com/track/3k9dGCm2R2Y70e87aMHYC3?si=5e157cb1b750409e'>Cancion^^</Button>
      <h4>Siento que esta cancion es lo que significan mis poemas para ti, siento que no te estoy hablando a ti, si no a tu corazon,
        al corazon de la chica mas linda del mundo la cual me da todo su amor a mi, porque no importan las palabras, lo que importa es nuestro
        amor, porque al final te estoy hablando a tu corazon, te amo mi niña hermosa
      </h4>
      <h1>Sabes...</h1>
      <p>Eres todo lo que busco en un amor, hablar contigo me derrite el alma, me hace descartar todo lo malo y me hace caer en amor
        porque al final, eres el amor de mi vida mi niña hermosa, amo darte los buenos dias todas las mañanas para recordarte lo hermosa
        y importante que es mi niña para mi, eres bella como un atardecer, como la noche estrellada de van gogh, bella como una noche estrellada
        en la cual eres la estrella mas brillante
      </p>
      <h4>No tengo mucho mas por decir, pero a la vez tengo mucho por decirte, asi que te lo puedo decir todos los dias cuando te doy amor jsjsjsjs</h4>
      <h2>Atentamente:</h2>
      <h2>Mikel, o tu niño jsjsjs^^</h2>
      <p>Amo a mi niña hermosa diossss 😭</p>
      <p>Esta carta no se pudo haber hecho con todo el amor que me ha dado isita o tambien, mi niña hermosa</p>
      <p>Quiero que este dia sea para tii, para la niña que me alegra mis dias^^</p>
      <h2>Te amoo^^</h2>
      </center>
    </Box>
    
  );
}

export default App;
