import { Avatar, Box, Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout/dashboard"
import { Chart } from "components/char/char";
import { LineChar } from "components/char/lineChar";
import React from "react";
export default function Home() {
  return (
    <Layout>
      <Grid container justifyContent={"center"} gap={4} mt={6}>
        <Grid
          item
          lg={4}
          sx={{ p: 2, border: "1px solid #E6E8EC", borderRadius: "6px" }}
        >
          <Typography variant="p" component={"p"} sx={{ pb: 3 }}>
            Team Strength
          </Typography>
          <Chart />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{
                    padding: "4px 12px",
                    background: "#FABE7A",
                    color: "white",
                    display: "inline-block",
                    borderRadius: "6px",
                  }}
                >
                  a
                </Typography>
                <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                  Marketing
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: 2,
                }}
              >
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{
                    padding: "4px 12px",
                    background: "#59E6F6",
                    color: "white",
                    display: "inline-block",
                    borderRadius: "6px",
                  }}
                >
                  c
                </Typography>
                <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                  Developers
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{
                    padding: "4px 12px",
                    background: "#F6866A",
                    color: "white",
                    display: "inline-block",
                    borderRadius: "6px",
                  }}
                >
                  b
                </Typography>
                <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                  HR
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: 2,
                }}
              >
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{
                    padding: "4px 12px",
                    background: "#7661E2",
                    color: "white",
                    display: "inline-block",
                    borderRadius: "6px",
                  }}
                >
                  d
                </Typography>
                <Typography variant="p" component={"p"} sx={{ color: "gray" }}>
                  Design
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          sx={{ p: 2, border: "1px solid #E6E8EC", borderRadius: "6px" }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p" component={"p"} sx={{ fontSize: "18px" }}>
                Employes
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: "14px", color: "gray" }}
              >
                Aug 25-Sept-25
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                alignItems: "center",
              }}
            >
              <Box>
                <Box>
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <p
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "blue",
                      }}
                    ></p>
                    <p style={{ color: "gray", margin: "0px" }}>Inactive</p>
                  </Box>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0px",
                    }}
                  >
                    254
                  </p>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <p
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#FB896B",
                      }}
                    ></p>
                    <p style={{ color: "gray", margin: "0px" }}>Active</p>
                  </Box>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0px",
                    }}
                  >
                    3000
                  </p>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <p
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: " #F8C07F",
                      }}
                    ></p>
                    <p style={{ color: "gray", margin: "0px" }}>Total</p>
                  </Box>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0px",
                    }}
                  >
                    3254
                  </p>
                </Box>
              </Box>

              <Box>
                <img
                  style={{ width: "250px" }}
                  src="https://www.linkpicture.com/q/PieChart-removebg-preview.png"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          sx={{ p: 2, border: "1px solid #E6E8EC", borderRadius: "6px" }}
        >
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              background: "#FFF0E6",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "22px", margin: "0px" }}>Top 10</p>
            <p style={{ fontSize: "16px", margin: "0px" }}>
              Position in dribbble
            </p>
            <p style={{ fontSize: "12px", color: "gray", margin: "0px" }}>
              20% Increase from Last Week
            </p>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              background: " #ECEAFE",
              borderRadius: "10px",
              mt: 3,
            }}
          >
            <p style={{ fontSize: "22px", margin: "0px" }}> 26</p>
            <p style={{ fontSize: "16px", margin: "0px" }}>
              New employees onboarded
            </p>
            <p style={{ fontSize: "12px", color: "gray", margin: "0px" }}>
              15% Increase from Last Month
            </p>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              background: "#E5F7FF",
              borderRadius: "10px",
              mt: 3,
            }}
          >
            <p style={{ fontSize: "22px", margin: "0px" }}>500</p>
            <p style={{ fontSize: "16px", margin: "0px" }}>
              New Clients Approached
            </p>
            <p style={{ fontSize: "12px", color: "gray", margin: "0px" }}>
              5% Increase from Last Week
            </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} gap={4} alignItems={"center"} mt={9}>
        <Grid item lg={8} sx={{boxShadow:"0px 0px 8px 4px gray", p :1, borderRadius:"30px"}}>
        <Box sx={{height:"450px"}}>
          <LineChar />

        </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="p"
              component={"p"}
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Notifications
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{ fontSize: "14px", fontWeight: "500", color: " #6956E5" }}
            >
              View All
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "#F9F9F9",
                p:1,
                borderRadius:"10px",
                mt:4
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Box>
                <p style={{ margin: "0px", fontSize: "14px" }}>
                  Ellie joined team developers
                </p>
                <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
                  Ellie joined team developers
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "#F9F9F9",
                p:1,
                borderRadius:"10px",
                mt:3
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Box>
                <p style={{ margin: "0px", fontSize: "14px" }}>
                  Ellie joined team developers
                </p>
                <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
                  Ellie joined team developers
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "#F9F9F9",
                p:1,
                borderRadius:"10px",
                mt:3
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Box>
                <p style={{ margin: "0px", fontSize: "14px" }}>
                  Ellie joined team developers
                </p>
                <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
                  Ellie joined team developers
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "#F9F9F9",
                p:1,
                borderRadius:"10px",
                mt:3
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Box>
                <p style={{ margin: "0px", fontSize: "14px" }}>
                  Ellie joined team developers
                </p>
                <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
                  Ellie joined team developers
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "#F9F9F9",
                p:1,
                borderRadius:"10px",
                mt:3
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Box>
                <p style={{ margin: "0px", fontSize: "14px" }}>
                  Ellie joined team developers
                </p>
                <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
                  Ellie joined team developers
                </p>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
