import React from 'react';
import s from './MyModal.module.css'
const MyModal = ({ children, visible, setVisible }) => {
   return (
      <div className={visible ? `${s.myModal} ${s.active}` : s.myModal} onClick={() => setVisible(false)}>
         <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   );
}

export default MyModal;
