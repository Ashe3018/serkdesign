import { Close } from '@mui/icons-material';
import { Alert, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, IconButton } from '@mui/material'
import React from 'react'

const Alerts = ({open,handleClose,handleDelete,type="alert",message="",severity=""}) => {
  return (
    <div className="m-2">
      {type === "alert" ? (<Collapse in={open}><Alert
          variant="outlined"
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert></Collapse>
        
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description" >
              Are you sure you want to delete this product?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleDelete} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default Alerts;