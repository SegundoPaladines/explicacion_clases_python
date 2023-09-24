import './App.css';
import { Container, Button } from '@mui/material';
import { NavBar, HeaderComponent, Fondo, Diapositiva, Code} from './components/index';

function App() {
  return (
    <div>
      <NavBar />
      <div>
          <Fondo
            img = "https://user-images.githubusercontent.com/99047308/270136639-ff576329-0a42-4094-b34d-841a9c6d0756.jpg"
            alto ='100%'
            ancho = '100%'
          />
        </div>
        <div style={{
          position:'relative'
        }}>
          <HeaderComponent 
            title='Python'
            descripton='Clases, Objetos, Herencia, Polimorfismo y Encapsulamiento.'
          />
        </div>
      <Container 
        maxWidth="xl"
        sx={{
          background:'gray',
          width:"80%",
          position:"relative",
          padding:"2rem",
        }}
      >
        <Diapositiva
        titulo="Clases"
codigo={`
def otroEjemplo():
  print('otro ejemplo')
`}
        />
      </Container>
    </div>
  );
}

export default App;
