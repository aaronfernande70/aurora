// Modal.stories.tsx

import React, { useState } from 'react';
import Modal from  "@/components/Modal/Modal";
import Button from '@/components/Button';

export default {
  component: Modal,
  argTypes: {
    onClose: { action: 'onClose' },
    title: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
};

export const ModalStory = (args: any) => {
  const [open, setOpen] = useState(args.isOpen);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    args.onClose(); // Log the action in Storybook
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} isOpen={open} onClose={handleClose}>
        <p>This is modal content.</p>
      </Modal>
    </>
  );
};

