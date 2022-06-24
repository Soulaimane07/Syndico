import React,{useState} from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import './App.css';
import './icons/css/all.min.css'
import './components/Navbar.css'
import './components/carousel.css'

import langs from './components/languages/language.json'
import fr from './components/languages/fr.json'
import en from './components/languages/en.json'
import ar from './components/languages/ar.json'

function App() {

    const [ show, setShow] = useState(false)
    const [ lang, setLang] = useState(0)

    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
        autoplaySpeed: 3000,
        appendDots: dots => (
        <div
            style={{
            position: "absolute",
            top: "0",
            width: "4%",
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
            right:"0%",
        }}
        >
            <ul style={{display:"grid"}}> {dots} </ul>
        </div>
        ),
        };

    return (
    <>

        <div className='carousel'>
        <Caroussel {...settings}>
            {lang ==0 && (fr.carousel.map((item,key)=>(
                <div className='item' key={key}>
                    <div className='bg'>
                        <img src={item.bgImg} />
                    </div>
                    <div className='info'>
                        <div>
                        <p>{item.para}</p>
                        <button> <h3> {item.button} </h3> <i className='fas fa-angle-right'></i> </button>
                        </div>
                    </div>
                </div>
            )))}
            {lang == 1 && (en.carousel.map((item,key)=>(
                <div className='item' key={key}>
                    <div className='bg'>
                        <img src={item.bgImg} />
                    </div>
                    <div className='info'>
                        <div>
                        <p>{item.para}</p>
                        <button> <h3> {item.button} </h3> <i className='fas fa-angle-right'></i> </button>
                        </div>
                    </div>
                </div>
            )))}
            {lang == 2 && (ar.carousel.map((item,key)=>(
                <div className='item-rtl item' key={key}>
                    <div className='bg'>
                        <img src={item.bgImg} />
                    </div>
                    <div className='info'>
                        <div>
                        <p>{item.para}</p>
                        <button> <h3> {item.button} </h3> <i className='fas fa-angle-right'></i> </button>
                        </div>
                    </div>
                </div>
            )))}
        </Caroussel>
        </div>

        <>

        <div className='navbar'>
            {lang==0 &&(
                <div className='ltr'>
                <div className='logo'>
                    <img src="/images/syndico.png" />
                </div>
                <ul>
                    {fr.navbar.map((item,key)=>(
                        <li key={key}> {item.title} </li>
                    ))}
                    <li onClick={()=> setShow(!show)}> <i className="fa-solid fa-globe"></i> </li>
                </ul>
                
                </div>
            )}
            {lang==1 &&(
                <div className='ltr'>
                <div className='logo'>
                    <img src="/images/syndico.png" />
                </div>
                <ul>
                    {en.navbar.map((item,key)=>(
                        <li key={key}> {item.title} </li>
                    ))}
                    <li onClick={()=> setShow(!show)}> <i className="fa-solid fa-globe"></i> </li>
                </ul>
                
                </div>
            )}
            {lang==2 &&(
                <div className='rtl'>
                <ul>
                    <li onClick={()=> setShow(!show)}> <i className="fa-solid fa-globe"></i> </li>
                    {ar.navbar.map((item,key)=>(
                        <li key={key}> {item.title} </li>
                        ))}
                </ul>
                <div className='logo'>
                    <img src="/images/syndico.png" />
                </div>
                </div>
            )}
        </div>
        {show?<div className='langs'>
            <ul>
                {langs.map((lang,key)=>(
                    <li onClick={()=> setLang(lang.id)} key={key}> {lang.sub} </li>
                ))}
            </ul>
        </div>:""}
        </>
    </>


  )
}

export default App

const Caroussel = styled(Slider)`
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: crimson;
    }
    button {
        z-index: 1;
    }
`