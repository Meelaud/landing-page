import classes from "./header.module.css"
import Image from "next/image"
import {
    Title,
    Group,
    Button,
    Container,
    Burger,
} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';


export default function Header() {

    const [opened, { toggle }] = useDisclosure(false);

    return (

        <header className={classes.header}>

            <Container className={classes.inner}>
                <Group className={`flex items-center gap-4`}>
                    <Image src="./icons/MoodBrewLogo.svg" width={100} height={100} alt="logo" />
                    <Title className={`font-bold text-4xl`}>MoodBrew</Title>
                </Group>
                
                <Group className={`flex flex-wrap gap-3`}>
                    <Button className={classes.button}>Home</Button>
                    <Button className={classes.button}>About Us</Button>
                    <Button className={classes.button}>Sign up</Button>
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>

        </header>

    )
}