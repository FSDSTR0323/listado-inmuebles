import './styles.css';
import realstate from './realstate.png'

const Button = (props) => (
  <p><button>{props.msg}</button></p>
)

const Box = (props) => (
  <div className={`box-${props.type}`}>
    {props.children}
  </div>
)

const Message = (props) => (
  <Box type={props.type}>
    <h2>{props.title}</h2>
    <p>{props.msg}</p>
    <Button msg="Cerrar mensaje" />
  </Box>
)

const Form = () => (
  <Box type="">
    <form>
      <p>Introduce tu e-mail:</p>
      <input type="text" />
      <Button msg="Enviar" />
    </form>
  </Box>
)

const CardSlider = () => (
  <div>
    <img src="https://picsum.photos/200/150" />
  </div>
)

const CardDetails = (props) => (
  <div>
      <p><a href="#">{props.inmueble.title}</a></p>
      <h2>{props.inmueble.price} €</h2>
      <p>
        <span>{props.inmueble.rooms} hab.</span>
        <span>81m2</span>
        <span>Planta 1ª interior con ascensor</span>
      </p>
      <p>{props.inmueble.sup}m2 Precio por m2: {Math.round(props.inmueble.price/props.inmueble.sup)}€</p>
      <p>Certificado de eficiencia energética: {props.inmueble.energyCertification} </p>
      <p className="description">Vivienda a un patio de manzana amplio...</p>
      <p>
        <a href="#">Ver teléfono</a>
        <a href="#"> Contactar</a>
        <button>Descartar</button>
        <button>Guardar</button>
      </p>
    </div>
)

const Card = (props) => (
  <div className="card">
    <CardSlider />
    <CardDetails 
      inmueble = {props.inmueble}
    />
  </div>
  )
  

function App() {

  const inmuebles = [
    {
        title: "Piso en Henao, Ensanche-Moyua, Bilbao",
        price: 430000,
        rooms: 2,
        sup: 81,
        elevator: true,
    },
    {
        title:"Piso en avenida del Ferrocarril, 1, ...",
        price: 515000,
        rooms: 3,
        sup: 108,
        elevator: false,
        energyCertification: "C"
    },
    {
      title: "Piso en Henao, Ensanche-Moyua, Bilbao",
      price: 430000,
      rooms: 2,
      sup: 81,
  },
  {
      title:"Piso en avenida del Ferrocarril, 1, ...",
      price: 515000,
      rooms: 3,
      sup: 108,
  }

  ]

  return (
    <>
      <h1>Clase REACT: Composición y Especialización</h1>
      <img src={realstate} width="100%" />
      {
        inmuebles.map((inmueble)=>(
            <Card inmueble = {inmueble} />
        ))
      }

    </>
  );
}

export default App;
