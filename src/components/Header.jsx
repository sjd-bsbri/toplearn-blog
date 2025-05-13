import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Popover,
  Typography,
  useMediaQuery,
  Dialog,
  List,
  ListItem,
  ClickAwayListener,
  Popper,
  Grow,
  Paper,
  MenuList,
  MenuItem
} from "@mui/material";
import styled from "@emotion/styled";

import headerImage from "../assets/headerImage.jpg";
import logo from "../assets/logo.png";
import goldVip  from "../assets/goldVip.png";

import { Search, PersonOutline,KeyboardArrowDown } from "@mui/icons-material";

import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import GoogleAuth from "./GoogleAuth";
import Chat from "./Chat";

const Linkunderheader = styled(Link)({
  pt:"15px",textDecoration:"none",color:"#1e2f38",fontFamily:"vazir",letterSpacing:"-.5px",cursor:"pointer",transition:"all 0.2s linear 0s",":hover":{color:"#00b3e9"}
});
const pages = [
  "آخرین دوره ها ",
  "تخفیفات روزانه",
  "بلاگ",
  "فرصت های شغلی",
  "همکاری یا تاپ لرن",
  "مشاوره و رفع اشکال آنلاین",
  "لینک های مفید",
  "بیا چت کنیم!",
];

const linkCourses = [
  "آموزش برنامه نویسی به کودکان ",
  "آموزش ورود به دنیای برنامه نویسی",
  "دوره های مخصوص ناشنوایان",
]

const Header = () => {
  const theme = useTheme();
  const is2560 = useMediaQuery(theme.breakpoints.up('2559'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isDownXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isDownlg = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [chatOpen, setChatOpen] = useState(false);
  
  const handleChatOpen = () => {
    setChatOpen(true);
  };
  
  const handleChatClose = () => {
    setChatOpen(false);
  };
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPopover, setCurrentPopover] = useState('');
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event, popoverId) => {
    setAnchorEl(event.currentTarget);
    setCurrentPopover(popoverId);
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setCurrentPopover('');
  };

  const handleClickAway = () => {
    handlePopoverClose();
  };

  const handleMouseLeave = () => {
    handlePopoverClose();
  };

  const isPopoverOpen = (popoverId) => {
    return open && currentPopover === popoverId;
  };

  return (
    <>
    
    <Box
   
      sx={{
        background: `url(${headerImage}) no-repeat center center `,
        
        backgroundSize: "cover",
        height: isDownMd ? "74px" :isDownlg ? "100px" :"84px" ,
        boxShadow:"none",
        backgroundColor:"transparent",
       
      
        
      }}
    >
      <Box  
      sx={{ 
        display:isDownlg ? "block" : "flex",justifyContent:"space-evenly",alignItems:"center",
        py:"15px",
        px:isDownlg?"15px" : null,
        mx:isDownlg?"27px" : null,
        
        color:"#FFF"
        }}>
        
        <Box sx={{display:"flex"}}>
        <Avatar
        
        alt="toplearn"
        src={logo}
        variant="square"
        sx={{ width:isDownMd? 65:80, height:isDownMd?45: 54,cursor:"pointer", transform:isDownSm? "translateX(-20px)" :isDownMd?"translateX(-15px)":null}}
      />
       
      <Button disableRipple sx={{display:isDownMd?"none":"block"}} >
        {pages.map((page) => {
          if (page === "بیا چت کنیم!") {
            return (
              <Link 
                id="linkHeader" 
                onClick={handleChatOpen}
                sx={{  
                  fontSize: "13.5px",
                  color: "#fff",
                  mx: "11px",
                  cursor: "pointer",
                  ":hover":{textDecoration:"none"}
                }} 
                key={page}
              >
                {page}
              </Link>
            );
          }
          
          return (
            <Link 
              id="linkHeader" 
              sx={{  
                fontSize: "13.5px",
                color: "#fff",
                mx: "11px",
                ":hover":{textDecoration:"none"}
              }} 
              key={page}
            >
              {page}
            </Link>
          );
        })}
      </Button>
        </Box>
        
       
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position:isDownlg?"absolute":null,
            right:isDownlg?0:null,
            left:isDownMd?80:null,
            top:isDownMd?20:null,
            px:isDownlg?"15px" : null,
            mx:isDownlg?"27px" : null,
             }}
        >
          <Search
            sx={{
              fontSize: "21px",
              cursor: "pointer",
              ":hover": { color: "#00b3e9", transition: "all ease-in-out .5s" },
            }}
          />
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              borderColor: "#fff",
              height: "15px",
              mx: "7px",
              borderStyle: "inset",
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <GoogleAuth />
          </Box>
        </Box>
      </Box>
    </Box>
    
    <Popper
      id="mouse-over-popover"
      open={isPopoverOpen('linkunderheader')}
      anchorEl={anchorEl}
      placement="bottom-start"
      transition
      disablePortal
      style={{ zIndex: 1300 }}
      onMouseLeave={handleMouseLeave}
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: 'left top' }}
            timeout={200}
          >
            <Paper
              elevation={3}
              sx={{
                width: "280px",
                borderRadius: "8px",
                overflow: "hidden",
                mt: 0.5
              }}
              onMouseLeave={handleMouseLeave}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  p: 2, 
                  borderBottom: "1px solid #eef0f2", 
                  backgroundColor: "#f9f9f9", 
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#1e2f38"
                }}
              >
                دوره های برنامه نویسی و طراحی وب
              </Typography>
              
              <MenuList autoFocusItem={isPopoverOpen('linkunderheader')}>
                <MenuItem 
                  onClick={handlePopoverClose}
                  sx={{ py: 1.5, ":hover": { bgcolor: "#f5f9fd", color: "#00b3e9" } }}
                >
                  <Typography variant="body2">آموزش HTML و CSS مقدماتی تا پیشرفته</Typography>
                </MenuItem>
                <MenuItem 
                  onClick={handlePopoverClose}
                  sx={{ py: 1.5, ":hover": { bgcolor: "#f5f9fd", color: "#00b3e9" } }}
                >
                  <Typography variant="body2">آموزش جاوااسکریپت (JavaScript)</Typography>
                </MenuItem>
                <MenuItem 
                  onClick={handlePopoverClose}
                  sx={{ py: 1.5, ":hover": { bgcolor: "#f5f9fd", color: "#00b3e9" } }}
                >
                  <Typography variant="body2">برنامه نویسی با React.js</Typography>
                </MenuItem>
                <MenuItem 
                  onClick={handlePopoverClose}
                  sx={{ py: 1.5, ":hover": { bgcolor: "#f5f9fd", color: "#00b3e9" } }}
                >
                  <Typography variant="body2">برنامه نویسی با Node.js</Typography>
                </MenuItem>
                <MenuItem 
                  onClick={handlePopoverClose}
                  sx={{ py: 1.5, ":hover": { bgcolor: "#f5f9fd", color: "#00b3e9" } }}
                >
                  <Typography variant="body2">آموزش جامع PHP و Laravel</Typography>
                </MenuItem>
              </MenuList>
              
              <Box sx={{ display: "flex", justifyContent: "center", p: 1.5, borderTop: "1px solid #eef0f2", bgcolor: "#f9f9f9" }}>
                <Button 
                  onClick={handlePopoverClose}
                  size="small" 
                  sx={{ 
                    color: "#00b3e9", 
                    fontSize: "13px", 
                    ":hover": { backgroundColor: "rgba(0,179,233,0.08)" } 
                  }}
                >
                  مشاهده همه دوره‌ها
                </Button>
              </Box>
            </Paper>
          </Grow>
        </ClickAwayListener>
      )}
    </Popper>

    <Dialog
      open={chatOpen}
      onClose={handleChatClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ 
        sx: { 
          borderRadius: '16px',
          height: '90vh',
          maxHeight: '800px',
          overflowY: 'hidden'
        } 
      }}
    >
      <Chat onClose={handleChatClose} />
    </Dialog>
    
    <Box 
    
    sx={{
       boxShadow:"10px 0px 0px #ebf0f5", borderBottom:"1px solid #eef4f9",
        display:isDownMd?"none":"block"
      
    }}>
      <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",
       m:is2560?"0 180px":isDownXl ? '0px 0px 0 0px': isXl ?  "0px 65px" : '0px 105px 0 105px',

    
     
      }}>
        <Box sx={{display:"flex",
        }}
          >
        <Linkunderheader 
          id="basic-button"
          aria-controls={isPopoverOpen('linkunderheader') ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          aria-expanded={isPopoverOpen('linkunderheader') ? 'true' : undefined}
          onClick={(event) => handlePopoverOpen(event, 'linkunderheader')}
          sx={{
            display: "flex", 
            alignItems: "center",
            p: isDownlg ? "30px 10px 30px 0" : "30px 30px 30px 0",
            fontSize: isDownlg ? "14px" : "15px",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "20px",
              left: 0,
              right: 0,
              margin: "0 auto",
              width: isPopoverOpen('linkunderheader') ? "50%" : "0%",
              height: "2px",
              backgroundColor: "#00b3e9",
              transition: "width 0.3s ease-in-out"
            },
            "&:hover::after": {
              width: "50%"
            }
          }}
        >
          برنامه نویسی و طراحی وب
          <KeyboardArrowDown sx={{fontSize:"13px",m:"3px 0 0 3px"}}/>
        </Linkunderheader>
          
          {
            linkCourses.map((course,index)=>(
              <>
               <Linkunderheader sx={{p:isDownlg? "30px 15px 30px 0" :"30px 30px 30px 0",fontSize:isDownlg? "14px":"15px"}} key={index} >
          {course}
          </Linkunderheader>
              </>
            )
            )
          }
        </Box>
          
       
        <Box sx={{display:"flex",cursor:"pointer",alignItems:"center",}}>
        <Avatar
          alt="goldVip"
          src={goldVip}
          variant="circular"
          sx={{ width: 40, height: 40, }}
        />
          <Typography sx={{ml:"5px",fontSize:"13px",color:"#00b3e9",wordSpacing:"-2px",fontWeight:"bolder"}}> مخصوص اعضای ویژه</Typography>
        </Box>
      </Box>
    </Box>

    </>


      
  );
};

export default Header;
