import { Text, Paper, Image, Group } from "@mantine/core";
import classes from "./MovieCard.module.css";
import IconStar from "../Icons/IconStar";
import IconStarYellow from '../Icons/IconStarYellow';
// import noposter from "../../img/no-poster.png";

const MovieCard = ({ item }) => {
  return (
    <Paper className={classes.Card}>
      <Image
        src={item.src}
        alt={item.alt}
        className={classes.moviecardImage}
        fallbackSrc="../../img/no-poster.png"
      />
      <Group className={classes.cardInfo}>
        <Text className={classes.cardTitle}>{item.title}</Text>
        <Text className={classes.cardDescr}>{item.year}</Text>
        <Group>
          <IconStarYellow />
          <Text className={classes.cardRateNum}>{item.stars}</Text>
          <Text className={classes.cardRatePeople}>({item.rates})</Text>
        </Group>
        <Group>
            <Text className={classes.cardGenresLable}>Genres</Text>
            <Text className={classes.cardGenresList}>{item.genres}</Text>
        </Group>
      </Group>
      <IconStar />
    </Paper>
  );
};

export default MovieCard;
