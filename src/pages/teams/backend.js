import React from 'react'
import {  Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Layout from 'components/Layout/dashboard';
import { backendDev } from 'components/teamData/teamData';

export default function frontend() {
  return (
    <Layout>
            <Typography variant="h4" component={"h5"} sx={{ textAlign: "center" }}>
        Backend Developers
      </Typography>
      <Grid container justifyContent={"center"} gap={3} mt={4}>
        {backendDev.map((v,i) => (
          <Grid item lg={4} key={i}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image={v.img}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" color="text.secondary" >
                  {v.name}
                </Typography>
                <Typography variant="p"  sx={{mt:3}}>
                   {v.job}
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>
        ))}
        
      </Grid>
    </Layout>
  )
}
