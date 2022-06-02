import './main.css';
import pastilMain from '../assets/pastil.png'; 
import footerimg from '../assets/footer.png'; 
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'; 
import Slide from 'react-reveal/Slide'; 
import GroupImage,{MealTime} from '../components/GroupImage';

const Main = ()=>{
    const imageGroup = MealTime.map((item)=>{
        return <GroupImage item={item}></GroupImage>
    })

    return(
        <div className='container'>
            <div className="mainPage">
               <div className='main-content'>  
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
                    <Slide bottom>
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
                           {imageGroup}
                        </div> 
                    </div>
                    </Slide>
               </div>  
                <footer> 
                    <div className='images-set'>
                        <img src={footerimg} alt="pastil"/>
                    </div>
                </footer>
            </div>
            <div className='secondPage'>
                    <center>PAGE 2</center>
            </div>
        </div>
    )
}
export default Main;