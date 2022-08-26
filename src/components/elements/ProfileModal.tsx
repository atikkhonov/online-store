import React from 'react'
import ValidationForm from '../UI/ValidationForm';

interface ProfileModalProps {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ activeModal, setActiveModal }) => {

  return (
    <div 
      className={activeModal ? "modal modal-active" : "modal"}
      onClick={() => setActiveModal(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <ValidationForm/>
      </div>
    </div>
  )
}

export default ProfileModal