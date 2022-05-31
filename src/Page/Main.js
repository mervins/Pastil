import './main.css';
import pastilMain from '../assets/pastil.png'; 
import footerimg from '../assets/footer.png';
import p1 from '../assets/pater1.jpg';
import p2 from '../assets/pater2.jpg';
import p3 from '../assets/pater3.jpg';
import bfast from '../assets/breakfast.png'; 
import lunch from '../assets/lunch.png'; 
import dinner from '../assets/dinner.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Main = ()=>{
    return(
        <>
            <div className="mainPage">
               <div className='main-conatent'>  
                    <div className='titles'>
                        <Fade left cascade>
                            <div className='title1'>
                                <span>Damn Tasty</span>
                            </div> 
                        </Fade>
                         
                        <div className='title2'>
                            <div><Fade right cascade>COMFORT </Fade> </div>
                        </div>
                       
                            <div className='title3'>
                                <div><Fade left cascade>FOOD</Fade></div>
                            </div> 
                    </div>
                    <Zoom>
                    <div className="image_Pastil">
                        <img src={pastilMain} alt="Main-Pastil"/>
                    </div>
                    </Zoom>
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
                                <div className='pastil1'>
                                    <div>
                                        <img className='pastil' src={p1} alt="pastil"/> 
                                    </div>
                                    <div className='icon-pastil'>
                                        <div className='icon-content'>
                                            <img src={bfast} alt="pastil"/>
                                        </div>  
                                        <div><h3>Breakfast</h3></div>
                                    </div>
                                </div>
                                <div className='pastil1'>
                                    <div>
                                        <img className='pastil' src={p2} alt="pastil"/>
                                    </div>
                                    <div className='icon-pastil'>
                                        <div className='icon-content'>
                                            <img src={lunch} alt="pastil"/>
                                        </div>  
                                        <div><h3>Lunch</h3></div>
                                    </div>   
                                </div> 
                                <div className='pastil1'>
                                    <div>
                                    <img className='pastil' src={p3}  alt="pastil"/>
                                    </div>
                                    <div className='icon-pastil'>
                                        <div className='icon-content'>
                                            <img src={dinner} alt="pastil"/>
                                        </div>  
                                        <div><h3>Dinner</h3></div>
                                    </div>   
                                </div>  
                            </div>
                    </div>
               </div>
                <footer> 
                    <div className='images-set'>
                        <img src={footerimg} alt="pastil"/>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Main;