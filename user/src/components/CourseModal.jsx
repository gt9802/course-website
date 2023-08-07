import React from 'react'
import { Modal, Box } from '@mui/material'
import { useState } from 'react';
function CourseModal({open, handleClose}) {
       
  return (
    <Modal >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          
          <h2>Modal Title</h2>
          <p>Modal content goes here.</p>
        </Box>
      </Modal>
  )
}

export default CourseModal