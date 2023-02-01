import React from 'react'
import {  Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Layout from 'components/Layout/dashboard';
import { frontendDev } from 'components/teamData/teamData';

export default function frontend() {
  return (
    <Layout>
            <Typography variant="h4" component={"h5"} sx={{ textAlign: "center" }}>
        Frontend Developers
      </Typography>
      <Grid container justifyContent={"center"} gap={3} mt={4}>
        {frontendDev.map((v, i) => (
          <Grid item lg={2.5} key={i}>
            <Card>
              <CardMedia
                sx={{ height: 340 }}
                image={v.img}
                title="green iguana"
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
