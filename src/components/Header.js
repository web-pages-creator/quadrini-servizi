import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import NavbarMenuItem from './NavbarMenuItem';
import { HiMenuAlt2 } from "react-icons/hi";
import './styles/Header.css';
import { MdSanitizer, MdRestaurant, MdForest, MdOutlineWork, MdOutlineContactEmergency, MdKeyboardArrowRight } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { FaIndustry } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";


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
  return (
    <div className="Header">
      <div className='logo-container'>
        Quadrini
      </div>
      <div className='menu'>
        {menuItems.map((menuItem) => <NavbarMenuItem id={menuItem.id} title={menuItem.label} items={menuItem.subsections}/>)}
      </div>
      {/* HAMBURGER */}
      <div className='hamburger'>
        <HiMenuAlt2 className='hamburger-icon' onClick={onOpen}/>
        
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Quadrini</DrawerHeader>
            <DrawerBody>
            <Accordion allowMultiple isFocusable defaultIndex={[0, 1]}>
              {menuItems.map((menuItem) => 
                <>
                  {menuItem.subsections.length > 0 &&
                      <AccordionItem className='accordion-item'>
                        <>
                          <AccordionButton className='accordion-button'>
                            <div className='icon'>{menuItem.icon}</div>
                            {menuItem.label}
                          </AccordionButton>
                          {menuItem.subsections.map((subsection) =>
                            <AccordionPanel isExpanded className='accordion-panel' key={subsection.label}>
                              {/* <div className='icon'>{subsection.icon}</div> */}
                              <div className='icon'><MdKeyboardArrowRight/></div>
                              {subsection.label}
                            </AccordionPanel>
                          )}
                        </>
                      </AccordionItem>
                  }
                  {menuItem.subsections.length == 0 &&
                    <AccordionItem className='accordion-item'>
                        <AccordionButton className='accordion-button'>
                            <div className='icon'>{menuItem.icon}</div>
                            {menuItem.label}
                        </AccordionButton>
                    </AccordionItem>
                  }
                </>
              )}
            </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
