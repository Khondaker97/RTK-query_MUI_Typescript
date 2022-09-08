import {
  AppBar,
  Box,
  IconButton,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";

type PropTypes = {
  search: string;
  setSearch: (value: string) => void;
};
export default function Navbar({ search, setSearch }: PropTypes) {
  // const [value, setValue] = useState("");
  // const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(e.currentTarget.value);
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuOutlined />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Food Recipe
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
            <Input
              sx={{ color: "white", m: 1, p: 1 }}
              placeholder="Search By Name"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              // onKeyUp={handlePress}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
