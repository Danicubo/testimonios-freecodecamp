import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='contenedor-principal'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
        <Testimonio
        nombre='Shawn Wang'
        pais='Singapore'
        imagen='Shawn'
        cargo='Ingeniero Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. 
        Solo gané confianza en que podía codificar trabajando en 
        los cientos de horas de lecciones gratuitas en freeCodeCamp. 
        En un año tenía un trabajo de seis cifras como ingeniero de software. 
        freeCodeCamp cambió mi vida.'
         />
        <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='Sarah'
        cargo='Ingeniera Software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel de mucha confianza. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble.'
         />
         <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='Emma'
        cargo='Ingeniera Software'
        empresa='Spotify'
        testimonio='Siempre me ha costado aprender JavaScript. He tomado muchos cursos pero el curso de freeCodeCamp fue el que se mantuvo. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
         />
      </div>
      
    </div>
  );
}

export default App;
