import React from 'react';
import data from '../data/data.json';
import MenuLi from './Layout';
import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <motion.div
      className='menu-showed'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <ul className='menu'>
        {data.menu.map((li, i) => (
          <MenuLi
            key={i}
            delay={li.delay}
            icon={li.icon}
            content={li.content}
          />
        ))}
      </ul>
    </motion.div>
  );
}
