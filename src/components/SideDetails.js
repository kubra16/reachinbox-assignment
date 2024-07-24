import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import circle from "../assets/circle.svg";
import arrow from "../assets/arrow.svg";
import mail2 from "../assets/mail2.svg";

const SideDetails = () => {
  const theme = useTheme(); // Access the current theme
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ gap: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            color: isDarkMode ? "#fff" : "#000",
            bgcolor: isDarkMode ? "#23272C" : "#f0f0f0",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Lead details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: isDarkMode ? "#fff" : "#000",
                mt: 1,
              }}
            >
              Name
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#B9B9B9", mt: 1 }}>
              Orlando
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: isDarkMode ? "#fff" : "#000",
                mt: 1,
              }}
            >
              Contact No
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#B9B9B9", mt: 1 }}>
              9999999999
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: isDarkMode ? "#fff" : "#000",
                mt: 1,
              }}
            >
              email
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#B9B9B9", mt: 1 }}>
              johndoe@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: isDarkMode ? "#fff" : "#000",
                mt: 1,
              }}
            >
              LinkedIn
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#B9B9B9", mt: 1 }}>
              www.linkedIn.com/johndoe
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: isDarkMode ? "#fff" : "#000",
                mt: 1,
              }}
            >
              Company name
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#B9B9B9", mt: 1 }}>
              ReachInbox
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: isDarkMode ? "#fff" : "#000",
            bgcolor: isDarkMode ? "#23272C" : "#f0f0f0",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          Activities
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: isDarkMode ? "#fff" : "#000",
            display: "flex",
            justifyContent: "center",
            p: 1,
          }}
        >
          Campaign name
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            px: 1,
            gap: 8,
          }}
        >
          <img src={mail2} alt="Icon" width={30} height={30} />
          <Box sx={{ gap: 4 }}>
            <Typography>step 1 : email</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: ".3rem" }}>
              <img src={arrow} alt="Icon" width={15} height={15} />
              <Typography sx={{ fontSize: "12px" }}>sent: 3rd feb</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            py: 1,
          }}
        >
          <img src={mail2} alt="Icon" width={30} height={30} />
          <Box>
            <Typography>step 2 : opened email</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: ".3rem" }}>
              <img src={arrow} alt="Icon" width={15} height={15} />
              <Typography sx={{ fontSize: "12px" }}>sent: 3rd feb</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            py: 1,
          }}
        >
          <img src={mail2} alt="Icon" width={30} height={30} />
          <Box>
            <Typography>step 3 : opened email</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: ".3rem" }}>
              <img src={arrow} alt="Icon" width={15} height={15} />
              <Typography sx={{ fontSize: "12px" }}>sent: 3rd feb</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideDetails;
