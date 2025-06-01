import React, { useRef } from "react";

import { motion, useInView } from 'framer-motion';

import workInProgress from "../../assets/images/workInProgress.jpg";

const InProgress = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-auto sm:h-[300px]"
      initial={{ x: '100%', opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
          type: 'spring',
          stiffness: 180,
          damping: 15,
      }}
    >
      
      <div className="w-full h-[200px] overflow-hidden sm:w-1/2 sm:h-full">
        <img
          src={workInProgress}
          alt="En desarrollo"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="w-full flex flex-col justify-between p-6 sm:w-1/2">

        <div>
          <h3 className="text-[16px] sm:text-xl font-bold text-[#303e49]">Próximamente</h3>
          <p className="text-[13px] sm:text-[16px] text-gray-700 mt-2">
            Actualmente en desarrollo, estará disponible muy pronto.
          </p>
        </div>

        <div className="mt-6">
          <span className="text-[12px] text-sm italic text-gray-400">Actualización pendiente</span>
        </div>

      </div>

    </motion.div>
  );
};

export default InProgress;