import './main.css';
import pastilMain from '../assets/pastil.png';
import f1 from '../assets/f1.JPG';
import f2 from '../assets/f2.JPG';
import f3 from '../assets/f3.JPG';
const Main = ()=>{
    return(
        <>
            <div className="mainPage">
               <div className='titles'>
                    <div className='title1'>
                        <div>Damn Tasty</div>
                    </div>
                    <div className='title2'>
                         <div>COMFORT</div>
                    </div>
                    <div className='title3'>
                        <div>FOOD</div>
                    </div>
               </div>
                <div className="image_Pastil">
                    <img src={pastilMain} alt="Main-Pastil"/>
                </div>
                <div className="card">
                    <div className='line-header'></div>
                    <div className='card-content'>
                        <h2>WELCOME TO</h2>
                        <div className='description'>
                        Pastil which is known to have been originated in Maguindanao is an easy to cook ulam composed of rice, topped with sautéed chicken, fish, or beef flakes. This banana leaf wrapped 
                        meal is a staple in Maguindanao’s market places, sidewalks, and alleys. With its affordable price, it has been dubbed as a “Poor Man’s Meal.
                        </div>
                    </div>
                </div>
                <footer> 
                    <div className='images-set'>
                        <img src={f1}></img>
                        <img src={f2}></img>
                        <img src={f3}></img>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Main;