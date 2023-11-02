import './styles.css';

function Card({id, image, title, date, description} : {id:string, image:string, title:string, date: string, description: string}) {
  return (
    <div className='card-container'>
        <div className='card-img'>
            <img src={image} alt="picsum photo" />
        </div>
        <div className='card-body'>
            <div className='card-title'> {title}</div>
            <div className='card-desc'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;
