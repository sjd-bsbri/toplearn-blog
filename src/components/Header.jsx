import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";

import headerImage from "../assets/headerImage.jpg";
import logo from "../assets/logo.png";
import goldVip  from "../assets/goldVip.png";

import { Search, PersonOutline,KeyboardArrowDown } from "@mui/icons-material";

import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import GoogleAuth from "./GoogleAuth";
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
  "تماس با ما",
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

 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
        <Linkunderheader  id="basic-button"
               aria-owns={open ? 'mouse-over-popover' : undefined}
               aria-haspopup="true"
               onMouseEnter={handlePopoverOpen}
               onMouseLeave={handlePopoverClose}
               sx={{display:"flex",alignItems:"center",
                p:isDownlg? "30px 10px 30px 0" :"30px 30px 30px 0",
                fontSize:isDownlg? "14px":"15px",
              }}
              >
          برنامه نویسی و طراحی وب
          <KeyboardArrowDown sx={{fontSize:"13px",m:"3px 0 0 3px"}}/>
          </Linkunderheader>
          
          <Popover
          
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          "& .MuiPopover-paper":{boxShadow:"none",border:"1px solid grey"}
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography  sx={{ p: 1 }}>I use Popover.</Typography>
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
         
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
