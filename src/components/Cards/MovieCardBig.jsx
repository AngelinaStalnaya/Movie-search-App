import { Text, Paper, Image, Group } from "@mantine/core";
import classes from "./MovieCard.module.css";
import IconStar from "../Icons/IconStar";
import IconStarYellow from "../Icons/IconStarYellow";

const MovieCardBig = ({ item }) => {
  return (
    <Paper className={classes.CardBig}>
      <Image
        src={item.srcBig}
        alt={item.alt}
        className={classes.moviecardImageBig}
        fallbackSrc="../../img/no-poster-big.png"
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
          <Text className={classes.cardPositionLable}>Duration</Text>
          <Text className={classes.cardPositionList}>{item.duration}</Text>
        </Group>
        <Group>
          <Text className={classes.cardPositionLable}>Premiere</Text>
          <Text className={classes.cardPositionList}>{item.premiere}</Text>
        </Group>
        <Group>
          <Text className={classes.cardPositionLable}>Budget</Text>
          <Text className={classes.cardPositionList}>{item.budget}</Text>
        </Group>
        <Group>
          <Text className={classes.cardPositionLable}>Gross worldwide</Text>
          <Text className={classes.cardPositionList}>
            {item.gross_worldwide}
          </Text>
        </Group>
        <Group>
          <Text className={classes.cardPositionLable}>Genres</Text>
          <Text className={classes.cardPositionList}>{item.genres}</Text>
        </Group>
      </Group>
      <IconStar />
    </Paper>
  );
};

export default MovieCardBig;
