import { Container, Typography } from "@mui/material";
interface Props {
  text: string;
}
export const Title: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "120px", color: "white" }}
      >
        <Typography
          component="h1"
          variant="h3"
          margin="normal"
          textAlign={"center"}
        >
          {text}
        </Typography>
        <div
          style={{
            textAlign: "center",
            width: "100px",
            height: "8px",
            background: "red",
            margin: "20px auto",
          }}
        ></div>
      </Container>
    </>
  );
};
