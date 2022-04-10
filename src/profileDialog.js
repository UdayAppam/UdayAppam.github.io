import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const ProfileDialog = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Dialog fullScreen open={isOpen} onClose={handleClose}>
        <DialogTitle>
          uday_appam Resume{' '}
          <a
            href="https://docs.google.com/document/d/1GxKh9eG_YAr0yz3749-Vn564bEewCfWS/edit?usp=sharing&ouid=105106680656256650190&rtpof=true&sd=true"
            target="_blank"
            color="primary"
          >
            (Download Resume)
          </a>
        </DialogTitle>
        <DialogContent dividers>
          <iframe
            width="100%"
            height="100%"
            src="https://docs.google.com/document/d/e/2PACX-1vSBDRJN1PbXrQwuPY2r9vWMxquHayYjomq76a8dcVdRtG_X9Wn6wI49j8luyfKD1w/pub?embedded=true"
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileDialog;
