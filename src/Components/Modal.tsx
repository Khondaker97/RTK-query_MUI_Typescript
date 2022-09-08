import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, CardMedia, List, Paper } from "@mui/material";
import { Meal } from "../App";
import { Stack } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid rgb(153, 197, 241)",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
type PropsType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  meal: Meal;
};
export default function DetailsModal({ open, setOpen, meal }: PropsType) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardMedia
            component="img"
            alt={meal.strMeal}
            sx={{ height: "150px", borderRadius: "8px" }}
            image={meal.strMealThumb}
          />
          <CardContent sx={{ overflow: "hidden" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {meal.strMeal}
            </Typography>
            <Stack
              style={{
                maxHeight: "250px",
                overflowY: "auto",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {meal.strInstructions}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
