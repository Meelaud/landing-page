import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './article.module.css';
import Spline from '@splinetool/react-spline';


export default function Article() {
    return (
        <div className={classes.container}>
            <Paper className={classes.card}>
                <div>
                    <div className={`flex justify-between`}>
                        <Text className={classes.category} size="xs">
                            Wellness
                        </Text>
                        <Text className={`text-red-500`} size="xs">
                            20% Off!
                        </Text>
                    </div>
                    <Title order={3} className={classes.title}>
                        Which teas can you benfit from? <br /> Improve your mental wellbeing
                    </Title>
                    <div className={classes.plant}>
                        <Spline
                            className={classes.splinePlant}
                            scene="https://prod.spline.design/6oe59uYI80UIiij0/scene.splinecode" />
                    </div>
                </div>
                <Button className={classes.button}>
                    Buy Now
                </Button>
            </Paper>
            <Paper className={classes.card}>
                <div>
                    <Text className={classes.category} size="xs">
                        discovery
                    </Text>
                    <Title order={3} className={classes.title}>
                        Learn about the vast amount of recipes <br /> that compliment exotic teas.
                    </Title>
                    <div className={classes.plant}>
                        <Spline
                            className={classes.splinePlant}
                            scene="https://prod.spline.design/7pGW24cLBwfOdg-m/scene.splinecode" />
                    </div>
                </div>
                <Button className={classes.button}>
                    Read Article
                </Button>
            </Paper>
            <Paper className={classes.card}>
                <div>
                    <Text className={classes.category} size="xs">
                        Sustainability
                    </Text>
                    <Title order={3} className={classes.title}>
                        Find out how MoodBrew strives to <br /> create a greener world.
                    </Title>
                    <div className={classes.plant}>
                        <Spline
                            className={classes.splinePlant}
                            scene="https://prod.spline.design/aZg9VkGlG72UYnyV/scene.splinecode" />
                    </div>
                </div>
                <Button className={classes.button}>
                    Read Article
                </Button>
            </Paper>
        </div>
    )
}