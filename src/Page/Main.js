import './main.css';
import pastilMain from '../assets/pastil.png'; 
import footerimg from '../assets/footer.png';
import p1 from '../assets/pater1.jpg';
import p2 from '../assets/pater2.jpg';
import p3 from '../assets/pater3.jpg';
const Main = ()=>{
    return(
        <>
            <div className="mainPage">
               <div className='main-conatent'>
                <div className='titles'>
                        <div className='title1'>
                            <span>Damn Tasty</span>
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
                            <h2>Pastil ni Babo</h2>
                            <div className='description'>
                            Pastil which is known to have been originated in Maguindanao is an easy to cook ulam composed of rice, topped with sautéed chicken, fish, or beef flakes. This banana leaf wrapped 
                            meal is a staple in Maguindanao’s market places, sidewalks, and alleys. With its affordable price, it has been dubbed as a “Poor Man’s Meal.
                            </div> 
                        </div>
                        <div className='card-images'>
                                <div>
                                    <img className='pastil' src={p1} ></img> 
                                </div>
                                <div>
                                    <img className='pastil' src={p2}  ></img> 
                                </div>
                                <div>
                                    <img className='pastil' src={p3}  ></img> 
                                </div>
                            </div>
                    </div>
               </div>
                <footer> 
                    <div className='images-set'>
                        <img src={footerimg}></img> 
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Main;