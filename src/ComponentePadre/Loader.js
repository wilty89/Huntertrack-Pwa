import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


export default function Loader(props) {

  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, props.time);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    handleToggle();
    handleClose();
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
