import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import NavbarMenuItem from './NavbarMenuItem';
import { HiMenuAlt2 } from "react-icons/hi";
import './styles/Header.css';
import { MdSanitizer, MdRestaurant, MdForest, MdOutlineWork, MdOutlineContactEmergency, MdKeyboardArrowRight } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { FaIndustry } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import QuadriniLogo from './QuadriniLogo';
import { useEffect, useState } from 'react';


function Header() {
  const menuItems = [
    {
      id: 'societa',
      label: 'Società',
      icon: <FaIndustry/>,
      subsections: [
        {
          label: 'EIA - Ecologia Igiene Alimenti',
          redirect: '',
          icon: <MdSanitizer/>
        },
        {
          label: 'TECNOSAN - Servizi e tecnologie sanificazione',
          redirect: '',
          icon: <MdSanitizer/>
        }
      ]
    },
    {
      id: 'servizi',
      label: 'Servizi',
      icon: <FaHandshakeSimple/>,
      subsections: [
        {
          label: 'Sanificazione e pulizie',
          redirect: '',
          icon: <MdSanitizer/>
        },
        {
          label: 'Disinfestazioni e serivizi ambientali',
          redirect: '',
          icon: <MdForest />
        },
        {
          label: 'Ristorazione collettiva & Catering',
          redirect: '',
          icon: <MdRestaurant/>
        },
        {
          label: 'Servizi Alberghieri',
          redirect: '',
          icon: <TbHanger/>
        }
      ]
    },
    {
      id: 'lavoraConNoi',
      label: 'Lavora con noi',
      subsections: [],
      redirect: '',
      icon: <MdOutlineWork/>
    },
    {
      id: 'contatti',
      label: 'Contatti',
      subsections: [],
      redirect: '',
      icon: <MdOutlineContactEmergency/>
    },
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [navbarClass, setNavbarClass] = useState('Header');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarClass('Header scrolling')
    } else {
      setNavbarClass('Header not-scrolling')
    }
  };
  return (
    <div className={navbarClass}>
      <QuadriniLogo />
      <div className='menu'>
        {menuItems.map((menuItem) => <NavbarMenuItem key={menuItem.id} title={menuItem.label} items={menuItem.subsections}/>)}
      </div>
      {/* HAMBURGER */}
      <div className='hamburger'>
        <HiMenuAlt2 className='hamburger-icon' onClick={onOpen}/>
        
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay style={{backgroundColor:'rgba(0,0,0,0.8)'}}/>
          <DrawerContent className='drawer'>
            <DrawerCloseButton />
            <DrawerHeader style={{marginTop: '15px'}}><QuadriniLogo md/></DrawerHeader>
            <DrawerBody>
              {menuItems.map((menuItem) => 
                <>
                  {menuItem.subsections.length > 0 &&
                    <>
                      <div className='menu-main-title'>
                        {/* <div className='icon'>{menuItem.icon}</div> */}
                        {menuItem.label}
                      </div>
                      <div className='menu-subsection-container'>
                        {menuItem.subsections.map((subsection) =>
                          <div className='menu-subsection-title hoverable'>
                            {/* <div className='icon'>{subsection.icon}</div> */}
                            {/* <div className='icon'><MdKeyboardArrowRight/></div> */}
                            {subsection.label}
                          </div>
                        )}
                      </div>
                    </>          
                  }
                  {menuItem.subsections.length == 0 &&
                    <>
                      <div className='menu-main-title hoverable'>  
                        {/* <div className='icon'>{menuItem.icon}</div> */}
                        {menuItem.label}
                      </div>
                    </>
                  }
                </>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
