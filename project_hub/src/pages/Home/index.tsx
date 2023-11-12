import './styles.css';
import data from '../../assets/projects.json';

function Home() {
  var projects: any = data;
  const start_date: Date = new Date("2023-11-11 00:00:00");
  let current_date: Date = new Date();
  console.log(current_date, start_date)
  let current_day: string = String(current_date.getDate() - start_date.getDate());
  var project = projects[current_day]
  return (
    <div>
      <i className="fa-brands fa-github-square"></i>  
      <h1> Projeto {current_day}: - {project.name}</h1>
      <p>Complexidade: {project.dificulty} / 5</p>
      <p>{project.description}</p>
      
      <small>Site em desenvolvimento, alguns features não estão disponíveis</small>
    </div>
  );
}

export default Home;
