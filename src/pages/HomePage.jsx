import { Center, Heading, Image, Text } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Center flexDirection="column" pt={6}>
            <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2">Welcome to the Todo App</Heading>
            <Text>This is a simple todo app built using React.</Text>
            <Image src="/src/assets/home.png" alt="Todo App" w={600} />
        </Center>
    );
};

export default HomePage;
