import {
  Box,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

import { HomeImageURL } from "../../../common/common";
import CustomCardHeader from "../components/CustomCardHeader";
import CustomFileUploader from "../components/CustomFileUploader";
import CustomInput from "../components/CustomInput";
import { Dialog1InputParams } from "../types";

// ** MATERIAL UI MAKESTYLES CHANGES
const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: "#e1ddde",
    padding: "0rem 1.0rem",
    borderRadius: "10px",
  },
  logoContainer: {
    paddingTop:'0.5rem',
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem 1rem",
      marginRight: "1rem",
    },
  },
  logoMedia: {
    borderRadius: "10px",
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50px",
      height: "8rem",
      width: "15rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
      width: "9.4rem",
    },
  },
  cardContent: {
    [theme.breakpoints.up("sm")]: {
      padding: "0rem 4.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 0rem",
    },
    fontWeight: "bold",
  },
  homeImageContainer: {
    height:"80%"
  },
  homeMedia: {
    //width: '280px',
    height: '280px',
  },
  changePictureButtonContainer: {
    marginTop: "0.5rem",
    marginBottom:'1rem',
  },
  title: {
    fontWeight: "bold",
  },
}));

const HeaDialog1 = () => {
  const classes = useStyles();
  //const theme = useTheme();

  const [dialog1Data, setDialog1Data] = useState<Dialog1InputParams>({
    clientName: "",
    address: "",
    country: "",
    eircode: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialog1Data((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box className={classes.homeContainer}>
      {/*YOUR HOME LOGO SECTION: it contains logo and upload logo button  */}
      <Box className={classes.logoContainer} display="flex" alignItems="center">
        {/*  */}
        <CardMedia
          className={classes.logoMedia}
          component="img"
          src={HomeImageURL}
          alt="Home Images"
        />
        {/* Change Image will receive onFileSelect Event, Button Title and Color- it will upload Logo*/}
        <CustomFileUploader buttonTitle="Change Logo" color="primary" />
      </Box>
      {/*YOUR HOME CONTENT: it contains few input fields and home image with uploading option */}
      <CustomCardHeader title="YOUR HOME" />
      <Grid container  spacing={2} className={classes.cardContent}>
        <Grid item xs={12} sm={7} direction="column">
          <Typography variant="h6" className={classes.title}>
            Terraced house,48.73m<sup>2</sup> ,1892
          </Typography>
          <CustomInput
            labelName="Client Name(s)"
            name="clientName"
            handleInputChange={handleInputChange}
            value={dialog1Data["clientName"] && dialog1Data["clientName"]}
          />
          <CustomInput
            labelName="Address"
            name="address"
            handleInputChange={handleInputChange}
            value={dialog1Data && dialog1Data["address"]}
          />
          <CustomInput
            labelName="Country"
            name="country"
            handleInputChange={handleInputChange}
            value={dialog1Data && dialog1Data["country"]}
          />
          <CustomInput
            labelName="Eircode"
            name="eircode"
            handleInputChange={handleInputChange}
            value={dialog1Data["eircode"] && dialog1Data["eircode"]}
          />
          <Typography variant="subtitle1" className={classes.title}>
            Mprn:undefined
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.homeImageContainer}>
          <CardMedia
            className={classes.homeMedia}
            component="img"
            src={HomeImageURL}
            alt="Home Images"
          />
          <Box
            className={classes.changePictureButtonContainer}
            justifyContent="flex-end"
            display="flex"
          >
            {/* Change Image will receive onFileSelect Event, Button Title and Color- it will upload Your Home Image*/}
            <CustomFileUploader buttonTitle="Change Picture" color="primary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaDialog1;
