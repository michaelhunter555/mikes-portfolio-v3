import { Content, PageContainer } from "@/components/Footer/FooterStyles";
import { GlobalStyles } from "@/styles/Globalstyles";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <Grid container>
      <PageContainer>
        <GlobalStyles />
        <Content>We still here</Content>
      </PageContainer>
    </Grid>
  );
}
