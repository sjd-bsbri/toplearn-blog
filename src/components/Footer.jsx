import { Avatar, Badge, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography, useMediaQuery } from "@mui/material";
import { footerPattern,Enamad,Samandehi } from "../assets/index";
import Grid from "@mui/material/Unstable_Grid2";
import {PhoneAndroid,Email, Telegram, Instagram} from '@mui/icons-material';
import { useTheme } from "@emotion/react";
const LinkFooter = [
"مرجع تخصصی برنامه نویسان",
"آموزشگاه برنامه نویسان",
" قالب رایگان ",
" سفارش پروژه ",
"  گت ورک و کسب درآمد ",
"موتور جستجو ",
"لرن بای ",
" قوانین سایت ",
" درباره ما ",
"سوالات متداول ",
"فاماسرور ",
];

const Footer = () => {
  const theme = useTheme();
  const is2560 = useMediaQuery(theme.breakpoints.up('2559'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isDownXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isDownlg = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isDown321 = useMediaQuery(theme.breakpoints.down('321'));


  return (
    <>
    
    <Box
      sx={{
        background: `url(${footerPattern}) repeat 0 0 #153248`,

        width: "100%",
      }}
    >
      <Grid container sx={{p:is2560?"60px 280px 0 470px":isDownMd?"40px 20px 0 20px": isXl ? '60px 220px 0 220px' : isDownlg?"40px 40px 0 40px": '40px 105px 0 100px'}}>
        <Grid  xs={12} sm={12} md={8} lg={8} sx={{display:isDownSm?"none":"block"}}>

          <Box sx={{display:"flex",border:"2px dashed #334d60",p:"11px",borderRadius:"5px"}}>
          {/* <TextField prefix={ <PhoneAndroid/>} label={<Typography variant="caption">شماره موبایل شما</Typography>} sx={{background:"#FFF", }} size="smal" 
          InputProps={{
          startAdornment: (
            <InputAdornment position="end">
             
            </InputAdornment>
          ),
        }}
        /> */}
     <FormControl fullWidth sx={{"& .MuiInputBase-input":{p:isDownlg?"12px 14px":"16.5px 14px"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent",borderWidth:"0",borderRight:"1px solid #edf3f6",},
    
    }}>
          <InputLabel sx={{mt:"6px"}} htmlFor="outlined-adornment-amount"><Typography  sx={{fontSize:isDownlg? "13px" :"15px"}}>شماره موبایل شما</Typography></InputLabel>
          <OutlinedInput
          sx={{background:"#FFF","&.MuiInputBase-root":{fontSize:isDownlg?"13px":"15px",},"&.MuiOutlinedInput-root":{borderRadius:"4px 0 0 4px",}}}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><PhoneAndroid sx={{fontSize:"17px",color:"#d2dbdf"}}/></InputAdornment>}
            // label={<Typography variant="caption">شماره موبایل شما</Typography>}
            label="شماره موبایل....."
            
          />

          
        </FormControl>

        <FormControl fullWidth sx={{"& .MuiInputBase-input":{p:isDownlg?"12px 14px":"16.5px 14px"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent",borderWidth:"0",borderRadius:"0px 4px 4px 0px"}}}>
          <InputLabel sx={{mt:"6px"}} htmlFor="outlined-adornment-amount2"><Typography sx={{fontSize:isDownlg? "13px" :"15px"}}>پست الکترونیکی شما</Typography></InputLabel>
          <OutlinedInput
          sx={{background:"#FFF","&.MuiInputBase-root":{fontSize:isDownlg?"13px":"15px",},"&.MuiOutlinedInput-root":{borderRadius:"0"}}}
            id="outlined-adornment-amount2"
            startAdornment={<InputAdornment position="start"><Email sx={{fontSize:"17px",color:"#d2dbdf"}}/></InputAdornment>}
            // label={<Typography variant="caption">شماره موبایل شما</Typography>}
            label="شماره موبایل.........."
          />

          
        </FormControl>
      
        {/* <TextField
 fullWidth
 placeholder="شماره موبایل شما"
 InputProps={{ disableUnderline: true,
  startAdornment: (
    <InputAdornment position="end">
    <PhoneAndroid sx={{fontSize:"17px",color:"#d2dbdf"}}/>
    </InputAdornment>
  ),
  
 }}
sx={{background:"#FFF"}}
/> */}
        
            <Button variant="contained"  size="small" sx={{width:isDownXl?"50%":isXl?"35%":isDownlg?"50%":"40px",fontSize:"14px",lineHeight:"14px",wordSpacing:"-2px",backgroundColor:"#6fc341",borderRadius:"0px 4px 4px 0px",":hover":{backgroundColor:"#61b832"}}}>عضویت در خبرنامه</Button>

          </Box>
        </Grid>

          <Box sx={{display:"flex",pl:isDownSm?"0px":"35px" ,m:is2560?"30px 0px 0":isDownSm?"0px auto 0":"30px auto 0" }}>
          <Avatar
          alt="Enamad"
          src={Enamad}
          variant="square"
          sx={{ width: "86px", height:"100px",cursor:"pointer",borderRadius:"8px",p:"2px",m:"2px",background:"#FFF",ml:"13px" }}
        />
        <Avatar
          alt="Samandehi"
          src={Samandehi}
          variant="square"
          sx={{ width: "86px", height: "100px",cursor:"pointer",borderRadius:"8px",p:"2px",m:"2px",background:"#FFF",ml:isDownMd?"13px":"6px" }}
        />
          </Box>
        <Grid  xs={12} sm={12} md={10} lg={10} >
        <Box sx={{width:isDown321?"70%": isDownXs?"100%": isDownMd?"90%":"80%",p:isXl ? '50px 0 20px 0' :isDownlg? "50px 0 20px 0" : '50px 0px'}}>

          {
            LinkFooter.map((footer,index)=>(
              <>
              <Typography key={index} variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p: is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px":isDownMd?"5px 10px 5px 8px": isDownlg?"5px 10px 5px 6px":"5px 10px 5px 20px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}>
          <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

             {footer}  </Typography>
              </>

            ))
          }

          {/* <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px": isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}>

          <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

            مرجع تخصصی برنامه نویسان</Typography>
            
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}>
          <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

             آموزشگاه برنامه نویسان</Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}>

          <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>


              قالب رایگان </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px": isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

             سفارش پروژه  </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              گت ورک و کسب درآمد </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              موتور جستجو </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              لرن بای </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              قوانین سایت </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              درباره ما </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":isDownXs?"35px" :"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              سوالات متداول </Typography>
          <Typography variant="caption" sx={{wordSpacing:"-1px",lineHeight:isDown321?"30px":"40px",p:is2560?"5px 60px 5px 25px":isDown321?"5px 12px 5px 10px":isDownXs?"5px 12px 5px 10px":isDownSm?"5px 18px 5px 10px": isDownlg?"5px 10px 5px 10px":"5px 10px 5px 25px",color:"#FFF",fontSize:isDown321?"14px":"13px",transition:"0.5s",":hover":{color:"#00bffe",cursor:"pointer"}}}> 
                      <Badge variant="dot"  sx={{backgroundColor:"#00bffe",boxShadow:"0 0 5px #00bffe", width:"5px",height:"5px",borderRadius:"100%",right:"8px"}}></Badge>

              فاماسرور </Typography> */}

        </Box> 
        </Grid>
        <Grid  xs={12} sm={12} md={2} lg={2} >

          <Box sx={{width:isDown321?"40%":"20%",display:"flex",p:isDownMd?"0px 0 20px 0 ":"60px 0 0 0",m:is2560?"0 20px":"0 auto"}}>
            <IconButton sx={{backgroundColor:"#23425a",borderRadius:"100%",width:"35px",height:"35px",ml:"10px",":hover":{backgroundColor:"#335671"}}} size="small">
            <Instagram sx={{color:"#FFF",fontSize:"20px"}}/>

            </IconButton>
            <IconButton sx={{backgroundColor:"#23425a",borderRadius:"100%",width:"35px",height:"35px",ml:"10px",":hover":{backgroundColor:"#335671"}}}  size="small">
            <Telegram sx={{color:"#FFF",fontSize:"20px"}}/>

            </IconButton>
          </Box>
        </Grid>










       
      </Grid>
    </Box>
    <Box sx={{p:isDownSm?"0 15px":0}}>
      <Typography sx={{fontSize:isDown321?"12px":"13px",color:"#153248",m:"22px 0",lineHeight:"25px",textAlign:"center",wordSpacing:"-1px"}} >تمامی حقوق مادی و معنوی این سایت متعلق به تاپ لرن می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد</Typography>
    </Box>
    </>
  );
};

export default Footer;
