import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy.jsx';
import { useStateContext } from '../contexts/ContextProvider';

const Drawer = ({ title, children }) => {
  const { setColor, setMode, currentMode, currentColor, setDrawer } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-800">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">{title || "Form"}</p>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>

        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          {children} 
        </div>
      </div>
    </div>
  );
};

export default Drawer;
