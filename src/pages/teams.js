import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Layout from "components/Layout/dashboard";
import { team } from "components/teamData/teamData";
import { useRouter } from "next/router";

export default function teams() {
 const router = useRouter()

  return (
    <Layout>
      <Typography variant="h4" component={"h5"} sx={{ textAlign: "center" }}>
        Teams
      </Typography>
      <Grid container justifyContent={"center"} gap={3} mt={4}>
        {team.map((v, i) => (
          <Grid item lg={3} key={i}>
            <Card onClick={() => router.push("/teams" + v.path) } >
              <CardMedia
                sx={{ height: 200, objectFit:"cover" }}
                image={v.img}
                title="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" color="text.secondary" >
                  {v.job}
                </Typography>
                <Typography variant="p"  sx={{mt:3}}>
                   {"Users "+ v.users}
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
