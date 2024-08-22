import {  Box, Breadcrumbs, Card, CardContent, CardMedia, InputAdornment, Link, Pagination, TextField, Typography, useMediaQuery } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import { useRef, useEffect } from 'react';
import { Search,Visibility,Forum ,Person} from "@mui/icons-material";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '@emotion/react';
import { swiperImgs } from '../constants/swiperImgs';
import { gridCards } from '../constants/gridCards';

register();

const BreadcrumbText = [
  "تاپ لرن",
  "پست ها",
  "مقالات تاپ لرن",

];
const MainSite = () => {
  const theme = useTheme();
  const is2560 = useMediaQuery(theme.breakpoints.up('2559'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isDownlg = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));



  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
      console.log(swiper)
    });

    swiperElRef.current.addEventListener('swiperslidechange', () => {
      console.log('slide changed');
    });
  }, []);
  

  return (
    <>
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      dynamicBullets={true}
      loop={true}
      // style={{padding:"10px 105px 0 100px",}}
      style={{
        // padding: isSmall ? '5px 50px 0 50px' : isMedium ? '10px 75px 0 75px' : '20px 105px 0 100px'
        padding:is2560?"10px 480px 0 480px":isDownSm?"12px 0 0 0": isDownMd?"12px 10px 0 10px": isXl ? '10px 235px 0 235px' : isDownlg? "12px 30px 0 30px"  : '10px 105px 0 100px',
      }}

      autoplay={true}


    >
     
      
        {
          swiperImgs.map((swiper,index)=>
            <swiper-slide key={index} >
            <Link sx={{textDecoration:"none",color:"transparent"}} href="#"  >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={swiper.image}
                alt={swiper.title}
            
              />
            </Link>
            </swiper-slide>
          )
        }
      {/* <Link sx={{textDecoration:"none",color:"transparent"}} href="#" >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={slideImg1}
                alt=" تصویراسلاید"
            
              />
            </Link>
      </swiper-slide>
      <swiper-slide>
      <Link sx={{textDecoration:"none",color:"transparent",}} href="#" >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={slideImg2}
                alt=" تصویراسلاید"
            
              />
            </Link>
      </swiper-slide>
      <swiper-slide>
      <Link sx={{textDecoration:"none",color:"transparent",}} href="#" >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={slideImg3}
                alt=" تصویراسلاید"
            
              />
            </Link>
      </swiper-slide>
      <swiper-slide>
      <Link sx={{textDecoration:"none",color:"transparent",}} href="#" >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={slideImg4}
                alt=" تصویراسلاید"
            
              />
            </Link>
      </swiper-slide>
      <swiper-slide>
      <Link sx={{textDecoration:"none",color:"transparent",}} href="#" >
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer",width:"100%",borderRadius:"10px" }}
                src={slideImg5}
                alt=" تصویراسلاید"
            
              />
            </Link> */}
     
    </swiper-container>

    <Box sx={{p:is2560?"20px 485px 20px 485px":isDownSm?"15px": isDownMd?"20px" :isXl ? '20px 240px 0 240px'  : isDownlg? "20px 40px" :'30px 105px 30px 100px'}} >
    <Box sx={{display:"flex",flexDirection:isDownSm?"column-reverse":"row" ,justifyContent:"space-between",alignItems:isDownSm?"flex-start":"center"}}>
      <Box sx={{display:"flex",alignItems:"center",pt:isDownSm?"15px":0}}>
      <Typography sx={{fontSize:isDownMd?"16px":"18px",color:"#1e2f38",fontWeight:"bold"}}>مقالات تاپ لرن </Typography>
      <Typography variant='caption' sx={{pl:"20px",color:"#686e71"}}>( 373 پست )</Typography>
      </Box>
    
    <Breadcrumbs  separator={<Typography sx={{fontSize:"12px",}}>/</Typography>} aria-label="breadcrumb">
    {
      BreadcrumbText.map((breed,index)=>(
        <>
        <Typography key={index} variant='caption' sx={{color:"#889296",fontSize:isDownlg?"12px":null,":hover":{color:"#2196f3",cursor:"pointer"}}}>
      {breed}
    </Typography>
        </>
      ) )
    }

    {/* <Typography variant='caption' sx={{color:"#889296",fontSize:isDownlg?"12px":null,":hover":{color:"#2196f3",cursor:"pointer"}}}>
      تاپ لرن
    </Typography>
    <Typography variant='caption' sx={{color:"#889296",fontSize:isDownlg?"12px":null,":hover":{color:"#2196f3",cursor:"pointer"}}}>
       پست ها
    </Typography>
    <Typography variant='caption' sx={{color:"#889296",fontSize:isDownlg?"12px":null,":hover":{color:"#2196f3",cursor:"pointer"}}}>
      مقالات تاپ لرن
    </Typography> */}
    </Breadcrumbs>
    </Box>

    </Box>
    <Box sx={{p:is2560?"10px 480px 0 480px":isDownSm?"10px 15px": isDownMd?"10px 20px": isXl ? '20px 235px 0 235px' : isDownlg? "10px 40px" : '15px 105px 0 100px'}}>
      <Box sx={{backgroundColor:"#FFF",border:"1px solid #ecf0f4",boxShadow:"0 0 7px 0 #eaeff4",borderRadius:"5px",p:"20px"}}>
        <TextField  sx={{width:isDownSm?"100%":"50%","& .MuiInputBase-input":{p:"15px",fontSize:"15px"},"& .MuiInputLabel-root":{transformOrigin:"top center"}}} label={<Typography sx={{fontSize:"13px"}}>عنوان مورد نظر</Typography>} InputProps={{
          endAdornment: (
            <InputAdornment  position="end">
                <Search sx={{":hover":{color:"#2196f3",cursor:"pointer"},fontSize:"22px"}} />
            </InputAdornment>
          ),
        }}/>
        
      </Box>
    </Box>

    <Grid container sx={{p:is2560?"30px 470px 0 470px":isDownSm?"10px 4px 10px 4px": isDownMd?"20px 8px 10px 8px": isXl ? '20px 222px 0 222px' :isDownlg? "20px 30px 10px 30px" : '30px 90px 0 90px'}}  >

      {
        gridCards.map((card,index)=>(
          <>
          <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}} key={index}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={card.image}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                 {
                  card.title
                 }
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify" }}
                  >
                    {
                      card.desc
                    }
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>{card.viewNum}</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>{card.smsNum}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      {card.writer} </Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
          </>  
        ) 
       )
      }
      {/* <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage1}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify" }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid> */}
      {/* <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage2}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage3}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage4}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage5}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage6}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage7}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage8}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage9}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage10}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage11}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4} sx={{px:"10px",mb:"30px"}}>
        <Card sx={{maxWidth:is2560?"520px":"470px",boxShadow:"0 0 7px 0 #eaeff4",border:"1px solid #ecf0f4",borderRadius:"6px"}}>
        <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={gridImage12}
                  alt="jhj"
                />
                <CardContent sx={{"&.MuiCardContent-root":{pb:isDownlg?"10px" :null}}}>
                <Typography   gutterBottom sx={{":hover":{color:"#00b3e9",cursor:"pointer"},fontWeight:"bold",color:"#1e2f38",fontSize:isDownSm?"13px":"14px",lineHeight:"40px"}}>
                   چگونه آموزش ببینیم؟
                  </Typography>
                  <Typography                    
                  gutterBottom
                    sx={{ direction: "ltr",color:"#686e71",fontSize:isDownMd?"13px":"14px",lineHeight:"28px",textAlign:"justify", }}
                  >
                  همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای ...
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{display:"flex",alignItems:"center",mr:"15px"}}>
                        <Visibility sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>4348</Typography>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Forum sx={{lineHeight:"30px",fontSize:"14px",color:"#c8cfd5",mr:"3px"}}/>
                        <Typography sx={{lineHeight:"30px",fontSize:"14px",color:"#686e71",mr:"3px"}}>3</Typography>
                      </Box>
                    </Box>
                    <Box sx={{cursor:"pointer"}}>
                    <Typography sx={{fontSize:isDownMd?"14px":"15px",display:"flex",alignItems:"center",color:"#00bffe",lineHeight:"30px",":hover":{color:"#6fc341"}}}>
                    <Person sx={{fontSize:isDownMd?"14px":"15px",mr:"3px",mb:"0px"}}/>
                      تاپ لرن</Typography>
                    </Box>
                  </Box>
                </CardContent>
        </Card>
      </Grid> */}


      <Box sx={{m:"0 auto",p:isDownSm?"15px 0px 80px 20px":"15px 0px 80px"}}>
      <Pagination count={10} variant="outlined" boundaryCount={10}
          sx={{"& .MuiPaginationItem-root":{":hover":{color:"#2196f3",border:"2px solid #4cadfb",background:"transparent",transition:"none"},"&.MuiPaginationItem-root.Mui-selected":{color:"#2196f3",border:"2px solid #4cadfb",background:"transparent",transition:"none"}}}}
  // sx={{":hover":{border:"2px solid #4cadfb",color:"#2196f3"},":active":{border:"2px solid #4cadfb",color:"#2196f3"}}}  
      />
      </Box>
    </Grid>
    </>
  );



  
};


export default MainSite