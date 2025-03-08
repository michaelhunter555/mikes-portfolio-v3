import { Content, PageContainer } from "@/components/Footer/FooterStyles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid container direction="column" alignItems="center" width="100%">
      <PageContainer>
        <Content sx={{ marginTop: 5 }}>
          <Grid size={12}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Typography fontWeight={700} variant="h4" color="text.secondary">
                I code to Improve Lives & Solve Problems.
              </Typography>
              <Avatar />
              <Stack direction="row" spacing={1}>
                <Typography variant="body1" color="text.secondary">
                  Michael Hezekiah Hunter
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Software Engineer
                </Typography>
              </Stack>
              <Button variant="outlined"> View More</Button>
            </Stack>
          </Grid>
        </Content>
      </PageContainer>
    </Grid>
  );
}
