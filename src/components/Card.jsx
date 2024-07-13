import React, { useState } from 'react';
import swords from '../Images/swords.png';
import dot from '../Images/dot.png';
import Menu from './Menu';
import { motion } from 'framer-motion';
import PenBox from '../../public/edit.png';
import Share from '../../public/share.png';
import Trash from '../../public/trash.png';

const Card = ({ img, title }) => {
  const [showMenu, setShowMenu] = useState(false);

  const OpenMenu = () => {
    setShowMenu(!showMenu);
  };
  const CloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className='w-[411px] h-[475px] rounded-3xl p-[18px] bg-white border border-[#E4E4EB]'>
      <div>
        <img src={img} alt='' className='rounded-[18px] mb-[18px]' />

        <div className='flex flex-col gap-y-[55px] w-[375px] h-[158px] '>
          <div>
            <div className='flex justify-between  mb-[12px] '>
              <h1 className='font-medium text-xl'>{title}</h1>
              <span className='text-xs bg-[#CFD2DD] bg-opacity-40 p-1.5 rounded-md'>
                Premium
              </span>
            </div>
            <p className='text-[#090C15] opacity-50 text-[15px] '>
              Recreate this wallpaper using AI.
            </p>
          </div>
          <div className='flex  justify-between'>
            <button className='flex items-center gap-[9px] w-[190px] h-[43px] buttonShadow py-[9px] px-[12px] border border-[#E4E4EB] rounded-xl font-medium text-lg'>
              <img src={swords} alt='swords' />
              Start Challenge
            </button>
            <div>
              <button
                onClick={OpenMenu}
                className='  gap-[9px] w-[44.94px] h-[43px] buttonShadow py-[9px] px-[12px] border border-[#E4E4EB] rounded-xl font-medium text-lg'
              >
                <img src={dot} alt='dot' className='mx-auto' />
              </button>
              <div className='relative z-[999]'>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => OpenMenu(!showMenu)}
                >
                  <div className='size-0.5 rounded-full bg-primary'></div>
                  <div className='size-0.5 rounded-full bg-primary'></div>
                  <div className='size-0.5 rounded-full bg-primary'></div>
                </motion.div>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className='absolute z-[999] top-[calc(100%+2px)] origin-top-left flex flex-col p-1.5  gap-2 bg-white border border-primary rounded-[12px] w-[163px] h-[115px]'
                  >
                    <p className=' text-xs flex items-center px-1.5 py-1.5  rounded-[8px] cursor-pointer hover:bg-[#CFD2DD]/20  '>
                      <img src={PenBox} alt='PenBox' className='mr-[9px]' />
                      Edit Challenge
                    </p>
                    <p className='text-xs flex items-center px-1.5 py-1.5  rounded-[8px] cursor-pointer hover:bg-[#CFD2DD]/20 '>
                      <img src={Share} alt='Share' className='mr-[9px]' />
                      Share Challenge
                    </p>
                    <p className='text-[#D73F3E]/90 text-xs flex items-center px-1.5 py-1.5  rounded-[8px] cursor-pointer hover:bg-[#CFD2DD]/20  '>
                      <img src={Trash} alt='Trash' className='mr-[9px]' />
                      Delete Challenge
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMenu && <div onClick={CloseMenu}></div>}
    </div>
  );
};

export default Card;
