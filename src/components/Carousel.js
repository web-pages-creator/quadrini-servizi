import { useEffect, useRef, useState } from 'react';
import './styles/Carousel.css';
import { CiCircleChevRight } from "react-icons/ci";
import ambienteImg from './../static/images/ambiente.jpeg'
import cateringImg from './../static/images/catering.jpeg'
import cleaningImg from './../static/images/cleaning.jpeg'

function Carousel() {

  const titleRef = useRef(null)
  const imgRef = useRef(null)
  const containerRef = useRef(null)
  /* const moreRef = useRef(null) */

  const data = [
    {
      src: ambienteImg,
      title: 'Ambiente',
      color: 'linear-gradient(45deg, green, 40%, yellow)',
      sottotitolo: <div className='text text-normal'>Investiamo in soluzioni <span className='text text-hype' style={{ '--after-bg-color': 'linear-gradient(45deg, green, 40%, yellow)' }}>eco-compatibili</span> e adotta pratiche sostenibili per <span className='text text-hype' style={{ '--after-bg-color': 'linear-gradient(45deg, green, 40%, yellow)' }}>proteggere l'ambiente</span> e garantire un futuro migliore per le prossime generazioni</div>
    },
    {
      src: cateringImg,
      title: 'Catering',
      color: 'linear-gradient(45deg, red, 40%, yellow)',
      sottotitolo: <div className='text text-normal'>Il nostro servizio da anni <span className='text text-hype' style={{ '--after-bg-color': 'linear-gradient(45deg, red, 40%, yellow)' }}>soddisfa le esigenze</span> di importanti istituzioni e di molte aziende. Dal piccolo coffee break, al pranzo del congresso, dalla cena di gala fino al grande evento <span className='text text-hype' style={{ '--after-bg-color': 'linear-gradient(45deg, red, 40%, yellow)' }}>per festeggiare insieme alle persone care e colleghi.</span></div>
    },
    {
      src: cleaningImg,
      title: 'Cleaning',
      color: 'linear-gradient(45deg, blue, 40%, purple)',
      sottotitolo: <div className='text text-normal'>Offriamo un servizio di sanificazione professionale che unisce <span className='text text-hype' style={{ '--after-bg-color': 'linear-gradient(45deg, blue, 40%, purple)' }}>oltre 20 anni di esperienza</span> a servizi ideati e progettati su misura per il cliente.</div>
    }
  ]

  let dataObjectPosition = 0
  const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth })
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [currentObject, setCurrentObject] = useState(data[dataObjectPosition])
  const height = window.innerHeight
  const width = window.innerWidth
  let isFirstTime = true

  function animation() {
    if (allImagesLoaded) {
      titleRef.current.classList.add('title-fade-in');
      containerRef.current.classList.add('container-fade-in');
      imgRef.current.classList.add('img-fade-in');
      /* moreRef.current.classList.add('img-fade-in'); */
      setTimeout(() => {
        titleRef.current.classList.remove('title-fade-in');
        imgRef.current.classList.remove('img-fade-in');
        /* moreRef.current.classList.remove('img-fade-in'); */
        titleRef.current.classList.add('title-fade-out');
        imgRef.current.classList.add('img-fade-out');
        /* moreRef.current.classList.add('img-fade-out'); */
        containerRef.current.classList.remove('container-fade-in');
        containerRef.current.classList.add('container-fade-out');
        setTimeout(() => {
          dataObjectPosition = dataObjectPosition == data.length - 1 ? 0 : dataObjectPosition + 1
          setCurrentObject(data[dataObjectPosition])
          titleRef.current.classList.remove('title-fade-out');
          containerRef.current.classList.remove('container-fade-out');
          imgRef.current.classList.remove('img-fade-out');
          /* moreRef.current.classList.remove('img-fade-out'); */
        }, 1000);
      }, 6000);
    }
  }

  function handleResize() {
    setDimensions({height: window.innerHeight, width: window.innerWidth})
  }


  useEffect(() => {
    const interval = setInterval(() => {
      animation()
    }, 7000);

    if (isFirstTime) {
      animation()
      isFirstTime = false
    }

    window.addEventListener('resize', handleResize)
  
    return () => clearInterval(interval);
  }, [allImagesLoaded]);

  useEffect(() => {

    let loadedImagesCount = 0;
    const images = data.map(d => d.src)
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImagesCount ++;
        if (loadedImagesCount === images.length) setAllImagesLoaded(true)
      }
    } )
  }, []);


  return (
    <div className="Carousel" style={{height: height, width: width}}>
      { allImagesLoaded 
        ? <>
            <div className='content'>
              <div className='carousel-title title-fade-in' ref={titleRef} style={{ '--after-bg-color': currentObject.color }}>{currentObject.title}</div>
              <div className='container' ref={containerRef}>{currentObject.sottotitolo}</div>
            </div>
            {/* <div className='scopri-container' ref={moreRef}>Scopri di più<CiCircleChevRight /></div> */}
            <img src={currentObject.src} ref={imgRef} className='image img-fade-in'></img>
          </>
        : <div style={{color:'white'}}>Still loading</div>
      }
    </div>
  );
}

export default Carousel;
