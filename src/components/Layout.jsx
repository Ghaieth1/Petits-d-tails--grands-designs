import React from 'react';
import { motion } from 'framer-motion';

export default function Layout({ delay, icon, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-15px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-15px' }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, delay: delay }}
    >
      <li className='menu-li'>
        <img src={icon} alt='' />
        {content}
      </li>
    </motion.div>
  );
}
