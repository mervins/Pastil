import './GroupImage.css';
import bfast from '../assets/breakfast.png'; 
import lunch from '../assets/lunch.png'; 
import dinner from '../assets/dinner.png';
import p1 from '../assets/pater1.jpg';
import p2 from '../assets/pater2.jpg';
import p3 from '../assets/pater3.jpg';  

export const MealTime = [
    {
        title:bfast,
        name:'Breakfast',
        icon:p1
    },
    {
        title:lunch,
        name:'Lunch',
        icon:p2
    },
    {
        title:dinner,
        name:'Dinner',
        icon:p3
    }
]

const GroupImage = (props)=>{
    const {item} = props
    return(
        <>
            <div className='pastil1'>
                <div>
                    <img className='pastil' src={item.icon} alt="pastil"/> 
                </div>
                <div className='icon-pastil'>
                    <div className='icon-content'>
                        <img src={item.title} alt="pastil"/>
                    </div>  
                    <div><h3>{item.name}</h3></div>
                </div>
            </div> 
        </>
    )
}

export default GroupImage;