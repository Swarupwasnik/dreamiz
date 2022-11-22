import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./emi.css"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function Emi() {
  const data = useSelector((res) => res);
  return (
    <Box className="boxA" sx={{ width: "90%" }}>
      <Stack spacing={2}>
        <Item>
          Monthly Installment : {data.monthlyEMI ? ` ${data.monthlyEMI}` : ""}
        </Item>
        <Item>
          Total Simple Interest  to be Paid :
          {data.intestamount ? ` ${data.intestamount}` : ""}
        </Item>
        <Item>
          Total Amount Payable :{data.totalpayble ? ` ${data.totalpayble}` : ""}{" "}
        </Item>
      </Stack>
    </Box>
  );
}

export default Emi;
