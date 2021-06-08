import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContentPlaceholder } from './ContentPlaceholder'
import './Footer.css'
import { Link } from 'react-router-dom'
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded'
import CleanFooter from './cleaning/CleanFooter'

const Accordion = ({
  i,
  expanded,
  setExpanded,
  linkHeading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}) => {
  const isOpen = i === expanded

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        className='accordion__header'
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <Link>{linkHeading}</Link>
        <div className='accordion__icon'>
          {isOpen ? (
            <KeyboardArrowUpRoundedIcon fontSize='large' />
          ) : (
            <KeyboardArrowDownRoundedIcon fontSize='large' />
          )}
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className='accordion__section'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const Footer = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  //   const [expanded, setExpanded] = (useState < false) | (1 > 0)
  const [expanded, setExpanded] = useState()

  return (
    <>
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Domestic Maintainance'
        i={0}
        link1='window Cleaning'
        link2='Office Cleaning'
        link3='Medical Cleaning '
        link4='School Cleaning'
        link5='Birds And Pets Control'
        link6='Block Maintainance'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Cleaning Services'
        i={1}
        link1='Upholsery & Furniture Clean'
        link2='AirCraft And AirPort Cleaning'
        link3='Apartment/Block Maintainance'
        link4='Bioharzard/Specialsed Cleaning'
        link5='Boats & Marine Cleaning'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='commercial Clean'
        i={2}
        link1='Appliances Cleaning'
        link2='Car Washing & valeting'
        link3='Oven/BBQ Deep clean'
        link4='Carpet & Rug Cleaning'
        link5='Train & Bus Cleaning'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Accreditations'
        i={3}
        link1='ISO 9001 for quality standards'
        link2='ISO 14001 for environmental systems'
        link3='ISO 18001 for health and safety systems'
        link4='ISO 27001 for information security'
      />
       <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Memberships'
        i={4}
        link1='BICSc'
        link2='BIFM'
        link3='CHAS'
        link4='CSSA Safe Contractor'
        link5='BFA Full Member'
      />
      <CleanFooter />
    </>
  )
}

const accordionIds = [0, 1, 2, 3]
