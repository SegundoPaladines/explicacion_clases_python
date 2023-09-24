import './App.css';
import { Container, Button, Box } from '@mui/material';
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
        texto="
          Una clase, dentro del paradigma de la POO, es una plantilla que sirve para crear objetos
          y permite representar elementos del mundo real, una clase puede definir cualidades(atributos) 
          y comportamientos(métodos) de los objetos que sean creados a partir de la misma.
        "
codigo={`
class Persona:

    #Constructor
    def __init__(self, cedula, nombre, apellido, edad):
        #Atributos
        #Para inicializar y definir atributos se utiliza self.atributo
        self.cedula = cedula
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    #El self es equivalente al this te Java, hacen referencia al contexto del objeto

    #Funciónes
    def presentarse(self):
        return "Hola, mi nombre es "+self.nombre+" "+self.apellido+" y tengo "+self.edad+" años"
    
    def imprimirPersona(self):
        return "Cedula: "+self.cedula+" nombre: "+self.nombre+" apellido: "+self.apellido+" edad "+self.edad
`}
        />

        <Diapositiva
        titulo="Objetos"
        texto="
          Un objeto, dentro del paradigma de la POO, puede definirse como la instancia de una clase,
          es decir, este tendrá unica y especificamente los atributos y metodos de la clase de la cual fue
          creado.
        "
codigo={`
#Si la clase está en otro archivo, esta debera importarse
from persona import Persona
from profesor import Profesor
from estudiante import Estudiante
#.
#.
#.
  #crear un objeto persona
  cedula = input("cedula: ")
  nombre = input("nombre: ")
  apellido = input("apellido: ")
  edad = input("edad: ")

  persona1 = Persona(cedula, nombre, apellido, edad)

  #crear un objeto profesor
  cedula = input("cedula: ")
  nombre = input("nombre: ")
  apellido = input("apellido: ")
  edad = input("edad: ")
  materia = input("Materia que dicta: ")
  ieducativa = input("Insttitución educativa donde trabaja: ")

  profe = Profesor(cedula, nombre, apellido, edad, materia, ieducativa)

  #Crear un objeto estudiante
  cedula = input("cedula: ")
  nombre = input("nombre: ")
  apellido = input("apellido: ")
  edad = input("edad: ")
  carrera = input("Carrera que cursa: ")
    
  Estudiante(cedula, nombre, apellido, edad, carrera, [])
  #.
  #.
  #.
  #Llamada a métodos
  print(persona1.presentarse())
  #Llamada a atributos
  print(persona1.nombre)
  #.
  #.
  #.
`}
        />
        <Diapositiva
        titulo="Encapsulamiento"
        texto="
          El encapsulamiento, dentro del paradigma de la POO, puede definirse como una serie de practicas y métodos
          utilizados para tratar de ocultar la información sencible de una clase, mientras se expone unicamente
          las interfaces y funcionalidades necesarias para el correco desempeño del objeto.
        "
codigo={`
class Persona:

  #Constructor
  def __init__(self, cedula, nombre, apellido, edad):
      #Un atributo privado se dentota de la siguiente manera self._atributo
      self._cedula = cedula
      self._nombre = nombre
      self._apellido = apellido
      self._edad = edad

  #Getters y setters, no coloco el set_cedula porque no se me da la gana
  def get_cedula(self):
      return self._cedula
  
  def get_nombre(self):
      return self._nombre

  def set_nombre(self, nombre):
      self._nombre = nombre

  def get_apellido(self):
      return self._apellido
  
  def set_apellido(self, apellido):
      self._apellido = apellido

  def get_edad(self):
      return self._edad
  
  def set_edad(self, edad):
      self._edad = edad

  #Una funcion pues
  def presentarse(self):
      return "Hola, mi nombre es "+self._nombre+" "+self._apellido+" y tengo "+self._edad+" años"
  
  def imprimirPersona(self):
      return "Cedula: "+self._cedula+" nombre: "+self._nombre+" apellido: "+self._apellido+" edad "+self._edad

  #OJO, LOS ATRIBUTOS, AL SER PRIVADOS, FUERA DE LA CLASE, SOLO PUEDEN SER LEIDOS MEDIANTE LOS GETTERS Y 
  #EDITADOS MEDIANTE LOS SETTERS
`}
        />
        <Diapositiva
        titulo="Herencia"
        texto="
          La herencia, dentro del paradigma de la POO, puede definirse como la capacidad que tienen
          las clases para ser creadas a partir de otras clases preexistentes. Las clases que sirven
          de base para crear otras clases se conocen como clases padre o super clases y las creadas
          a partir de estas se conoces como subclases o clases hijo.
        "
codigo={`
from persona import Persona

# Digo que Profesor es una subclase de persona
class Profesor(Persona):

  #Constructor
  def __init__(self, cedula, nombre, apellido, edad, materia, ieducativa):
      self._materia = materia
      self._ieducativa = ieducativa
      #llamar a la funcion init del padre para que setee los atributos de la persona
      super().__init__(cedula, nombre, apellido, edad)

  #getters y setters
  def get_materia(self):
      return self._materia
  
  def set_masteria(self, materia):
      self._materia = materia

  def get_ieducativa(self):
      return self._ieducativa
  
  def set_ieducativa(self, ieducativa):
      self._ieducativa = ieducativa
  
  def presentarse(self):
      presentacion = "Hola, mi nombre es "+super().get_nombre()+" "+super().get_apellido()
      presentacion += " y dicto la meteria de "+self._materia+" en la "+self._ieducativa
      
      return presentacion
  
  def imprimirProfesor(self):
      return super().imprimirPersona()+" materia: "+self._materia + "Institucion Educativa: "+self._ieducativa
`}
        />
      <Diapositiva
        titulo="Polimorfismo"
        texto="
          La herencia, dentro del paradigma de la POO, puede definirse como la capacidad que tienen
          los objetos que pertenecen a una misma jerarquia de clases para responder de forma diferente
          a la invocacion de un método.
        "
codigo={`

#persona <- clase padre
def presentarse(self):
  return "Hola, mi nombre es "+self._nombre+" "+self._apellido+" y tengo "+self._edad+" años"
#----------------------------------------------------------------------------------------------

#profesor <- subclase de persona
  def presentarse(self):
      presentacion = "Hola, mi nombre es "+super().get_nombre()+" "+super().get_apellido()
      presentacion += " y dicto la meteria de "+self._materia+" en la "+self._ieducativa
      
      return presentacion

#--------------------------------------------------------------------------------------

#estudiante <- subclase de persona
def presentarse(self):
  return super().presentarse() + ", estudio "+self._carrera
`}
        />

        <Box
          sx={{
            mt:9,
            background:'black',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            padding:'10%'
          }}
        >
          <div>
            <div>
              <Button variant='outlined'
                onClick={() => {
                  window.location.href = "https://github.com/SegundoPaladines/ClasesPython";
                }}
              >Ver Ejemplo de Aplicacion 1</Button>
            </div>
            <div>
              <Button variant='outlined'
                onClick={() => {
                  window.location.href = "https://github.com/SegundoPaladines/ZombieKiller";
                }}
              >Ver Ejemplo de Aplicacion 2</Button>
            </div>
          </div>
        </Box>

      </Container>
    </div>
  );
}

export default App;
