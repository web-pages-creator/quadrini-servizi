import { useEffect, useRef, useState } from 'react';
import './styles/NavbarMenuItem.css';
import { Popover, PopoverTrigger, PopoverContent, Button, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';

function NavbarMenuItem(props) {
  const titleRef = useRef(null);
  const navbarRef = useRef(null);

  const [navbarClass, setNavbarClass] = useState('NavbarMenuItem');

  function handleOpen() {
    console.log('t', titleRef.current)
    titleRef.current.classList.add('hover')
  }

  function handleClose() {
    titleRef.current.classList.remove('hover')
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setNavbarClass('NavbarMenuItem scrolling')
    } else {
      setNavbarClass('NavbarMenuItem not-scrolling')
    }
  };

  return (
    <div ref={navbarRef} className="NavbarMenuItem">
      <Popover trigger="hover" placement='bottom-start' onOpen={handleOpen} onClose={handleClose}>
        <PopoverTrigger trigger="hover">
          <div className='title' ref={titleRef}>{props.title}</div>
        </PopoverTrigger>
        {props.items && props.items.length > 0 && 
          <PopoverContent className='dropdown'>
            {props.items.map((item) => <div key={item.label} className='dropdown-item'><PopoverBody>{item.label}</PopoverBody></div>)}
          </PopoverContent>
        }
      </Popover>
    </div>
  );
}

export default NavbarMenuItem;
