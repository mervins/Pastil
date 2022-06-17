import './main.css';
import pastilMain from '../assets/pastil.png';  
import logov2 from '../assets/logov3.png'; 
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'; 
import Slide from 'react-reveal/Slide';  
import GroupImage,{MealTime} from '../components/GroupImage';
import { FloatingButton } from '../components/buttons/buttons';
import Modal,{ModalTitle,ModalContent,ModalCard} from '../components/Modal/modal';
import { FcCurrencyExchange,FcCandleSticks,FcFactory,FcMoneyTransfer,FcServices,FcGlobe,FcPodiumWithSpeaker,FcTwoSmartphones } from "react-icons/fc";  
import { useState } from 'react';

const LETSTALK = [
    {
    title:'How much? It cost P25.00 only',
    icon:<FcCurrencyExchange/>
    },
    {
    title:'The pastil has two variety: Spicy and not spicy',
    icon:<FcCandleSticks/>
    },
    {
    title:`Store: In the meantime, we don't have a physical store`,
    icon:<FcFactory/>
    },
    {
    title:'Services: We do delivery and pick-up',
    icon:<FcServices/>
    },
    {
        title:`Policy for Delivery: Minimum of 5pcs pastil. Add P40.00 for delivery fee around Malaybalay City`,
        icon:<FcGlobe/>
    },
    {
        title:`Pick-up location: San Jose Crossing Mabuhay`,
        icon:<FcPodiumWithSpeaker/>
    },
    {
        title:`Payment Policy: Cash and Gcash`,
        icon:<FcMoneyTransfer/>
    },{
        title:<p>Contact us: +639362701121 or direct to our <a href="https://www.facebook.com/Pastil-Ni-Babo-109602631786226">Facebook Page</a></p>,
        icon:<FcTwoSmartphones/>
    }

]

const Main = ()=>{
    const [showInfo,setShowInfo] = useState(false);
    const [showList,setShowList] = useState(false)
    const imageGroup = MealTime.map((item,index)=>{
        return <GroupImage item={item} key={index}></GroupImage>
    }) 
    return(
        <div className='container'> 
            {showInfo && 
            <Modal onClose={()=>{setShowInfo(false); setShowList(false);}}>
                <ModalCard>
                    <ModalTitle><center><h1>Let's Talk</h1></center></ModalTitle>
                    <ModalContent> 
                    <Zoom left cascade when={showList}>  
                        <div>
                            {
                            LETSTALK.map((item,index)=>{
                                return( 
                                    <div className='boxList' key={index}>
                                        <div className='insideBoxCircle'>{item.icon}</div>
                                        <div className='boxContent'>{item.title}</div>
                                    </div>  
                                )
                            })
                            }
                        </div>
                    </Zoom> 
                    </ModalContent>
                </ModalCard> 
            </Modal>}
            
            <div className="mainPage">
            <Fade left>
                <div className='logo'>
                    <div>
                        <img src={logov2}/>
                    </div>
                    <div>
                        Pastil Ni Babo
                    </div>
                </div>
            </Fade>
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
                      <div><img src={pastilMain} alt="Main-Pastil"/></div> 
                    </div>
                    </Zoom>
                    <Slide bottom>
                    <div className="card">
                        <div className='line-header'></div>
                        <div className='card-content'>
                            <h2>WELCOME TO</h2>
                            <h2 className='pastil-ni-babo'>Pastil ni Babo</h2>
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
                        {/* <img src={footerimg} alt="pastil"/> */}
                    </div>
                </footer>
                <div onClick={()=>{
                    setShowInfo(true);
                    const timer = setTimeout(() => { 
                        setShowList(true);
                      }, 40);
                    }}>
                    <FloatingButton>Let's Talk</FloatingButton>
                </div>
                
            </div>
            {/* <div className='secondPage'>
                    <center>PAGE 2</center>
            </div> */}
        </div>
    )
}
export default Main;