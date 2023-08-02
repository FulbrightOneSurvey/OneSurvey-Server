'use-client'
import { Button, 
         Box, 
         Grid, 
         OutlinedInput, 
         Typography, 
         Link, 
         InputAdornment } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});


function Footer() {
  return(
    <Box alignItems="center"
             justifyContent="center"
             display="flex"
             sx={{
              height: 150
             }}>      
          <Box sx={{
            height: 140,
            width: 1400,
            backgroundColor: "#FEA200",
            borderRadius: "10px 10px 0 0"
            }}>
            <Box sx={{ml: 4, mt: 2}}>
              <Typography variant="h6" sx={{
                color: "#00196E",
                fontWeight: 600,
              }}
              >Most find articles</Typography>
                <ul>
                  <li>
                    <Link href="#" underline="always" sx={{color: "#00196E"}}>
                      {'How do credits works?'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" underline="always" sx={{color: "#00196E"}}>
                      {'Why my survey is blocked?'}
                    </Link>
                  </li>
                </ul>
              </Box>
          </Box>
        </Box>  
  )
};

function CustomButton({text, icon, desc}) {
  return (
    <Button variant="outlined" 
                        
                        sx= {{
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "10px",
                        minHeight: "180px",
                        maxHeight: "180px",
                        minWidth: "330px",
                        borderColor: "#FFFFFF",
                        boxShadow: 6,
                        maxWidth: 330
                      }}>
                        <Box>
                          {icon}
                       </Box>
                       <Box>
                          <Typography variant="h6"
                                      sx={{
                                        color: "#00196E",
                                        fontWeight: 600
                                      }}>{text}</Typography>
                       </Box>

                       <Box sx={{mt: 2}}>
                          <Typography variant="h10"
                                      sx= {{
                                        color:"#00196E"
                                      }}>{desc}</Typography>
                       </Box>
                </Button>
  )
}

export default function PageFAQ() {
    return (
    <ThemeProvider theme={theme} >
    <div>
        <Box justifyContent="center"
             alignItems="center"
             display="flex"
             sx={{
                  height: 200,
                  backgroundColor: "#CEEDF6",
                  mt: 6,
                  borderRadius: "0 0 20px 20px"
                }}>
            <Box textAlign="center"
                 justifyContent="center"
                 alignItems="center">
                <Typography variant="h4" align="center" sx= {{
                  color: "#00196E",
                  fontWeight: 550,
                }}>Help Articles</Typography>

                <OutlinedInput id="FAQ-search" 
                               placeholder="Search for help" 
                               variant="outlined"
                               sx={{ m: 1, width: '50ch', border: '1px solid', borderColor: "#000000", borderRadius:"5px",
                                    '& ::placeholder': {
                                      color: "#00196E"
                                    }, mt: "20px"  }}
                               startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>} />
            </Box>
        </Box>

        <Box justifyContent="center"
             alignItems="center"
             display= "flex"
             sx={{
              height:500
             }}>
          <Box>
            <Box sx={{mb: 3.5}}>
            <Grid container spacing={18} justifyContent="center">
              <Grid item xs={4}>
                <CustomButton text="Accounts & Notifications" 
                          icon={<AccountCircleOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="Account Setting, Login issues and notification preferences" />
              </Grid>

              <Grid item xs={4}>
                <CustomButton text="Take Surveys" 
                          icon={<SendOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="Problem with taking surveys" />
              </Grid>

              <Grid item xs={4}>
                <CustomButton text="Upload Surveys" 
                          icon={<DriveFolderUploadOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="Problem with uploading surveys" />
              </Grid>
            </Grid>
            </Box> 
            <Box sx={{mt:3.5}}>
            <Grid container spacing={18} justifyContent="center">
              <Grid item xs={4}>
                <CustomButton text="Credit points" 
                          icon={<BoltOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="How to use credit points" />
              </Grid>

              <Grid item xs={4}>
                <CustomButton text="Responses" 
                          icon={<ChatOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="Problem with collecting responses" />
              </Grid>

              <Grid item xs={4}>
                <CustomButton text="Guidances" 
                          icon={<HelpOutlineOutlinedIcon sx={{color: "#00196E", fontSize: "50px"}}/>}
                          desc="Beginner Guides" />
              </Grid>
            </Grid>
            </Box>
          </Box>   
        </Box>
        <Footer/>
    </div>
    </ThemeProvider>

)};

