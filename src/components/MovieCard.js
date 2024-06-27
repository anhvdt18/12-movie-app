import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea, Stack } from "@mui/material";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 500, minHeight: 200 }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          // sx={{ width: "100%" }}
        />
        <CardContent>
          <Typography
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {movie.title}
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Typography
              variant="body2"
              color="text.secondary"
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              sx={{ fontSize: 12 }}
            >
              {movie.overview}
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: 12 }}>
              Release date: {movie.release_date}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
