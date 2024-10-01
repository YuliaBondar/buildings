import { cloneElement, useEffect, useState, Children} from 'react';
import './Carousel.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Page_Width = 350;
export const Carousel = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    
    const handleArrowLeftClick = () =>{
        console.log("llsl");
        setOffset((currentOffset)=>{
            const newOffset =currentOffset + Page_Width

            return Math.min(newOffset,0);
        })
    }
    const handleArrowRightClick = () =>{
        console.log("qqqql");
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - Page_Width

            const maxOffset =-( Page_Width * (pages.length - 1))
            return Math.max(newOffset, maxOffset);
        })
      }
    useEffect(()=>{
        setPages(
            Children.map(children, (child) =>{
                return cloneElement(child, {
                    style:{
                        height:'100%',
                        minWidth:`${Page_Width}px`,
                        maxWidth:`${Page_Width}px`,
                       
                    },
                })
            })
        )
    }, [children])
    
    return (
        <div className="main-containers">
            <FaChevronLeft className='arrow' onClick={handleArrowLeftClick}/>
            <div className="window">
                <div className="all-pages-container"
                style={{
                    transform:`translateX(${offset}px)`,
                }}>
                    {pages}</div>
            </div>
            <FaChevronRight className='arrow' onClick={handleArrowRightClick}/>
        </div>
    )
}