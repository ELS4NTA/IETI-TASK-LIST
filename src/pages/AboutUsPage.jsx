import { Avatar, Box, Flex, Heading, Link, List, ListItem, OrderedList, StackDivider, Text, VStack } from "@chakra-ui/react";

const AboutUsPage = () => {
    return (
        <VStack as="section" divider={<StackDivider borderColor="gray.200" />} align="start" p={5}>
            <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h1" size="xl">About the project</Heading>
            <Box>
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2" size="lg">The product</Heading>
                <Text p={6}>
                    This application allows users to create, edit and delete
                    tasks from a list. It is a productivity tool that helps
                    users organize their daily tasks and keep track of what they
                    need to do.
                </Text>
            </Box>
            <Box >
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2" size="lg">Features</Heading>
                <List p={6}>
                    <ListItem>
                        <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h3" size="md">Add Tasks:</Heading>
                        <Text>
                            Users can add new tasks to the list. Each task has a
                            title and description. This functionality is useful
                            for keeping track of all the tasks you need to do.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h3" size="md">Edit Tasks:</Heading>
                        <Text>
                            Users can delete tasks that are no longer necessary.
                            This helps keep your to-do list clean and organized.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h3" size="md">Delete Tasks:</Heading>
                        <Text >
                            Users can modify the title and description of
                            existing tasks. This is useful when the details of a
                            task change or when an error is made while adding a
                            task.
                        </Text>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2" size="lg">Tecnologies used</Heading>
                <OrderedList p={6}>
                    <ListItem>
                        <Link color="blue.500" href="https://react.dev/" isExternal>
                            React 
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://react-hook-form.com/" isExternal>
                            React Form Hook 
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://reactrouter.com/en/main" isExternal>
                            React Router 
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://vitejs.dev/" isExternal>
                            Vite 
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://git-scm.com/" isExternal>
                            Git
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://www.npmjs.com/" isExternal>
                            Npm
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link color="blue.500" href="https://chakra-ui.com/" isExternal>
                            Chakra UI
                        </Link>
                    </ListItem>
                </OrderedList>
            </Box>
            <Box>
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2" size="lg">Author</Heading>
                <Link href="https://github.com/ELS4NTA" isExternal>
                    <Flex align="center" gap="3" p={6}>
                        <Avatar src="https://gravatar.com/avatar/f166c4a84e7a29d0d2b4dcd35f1741b3d212dcb7378adda50d93eaa91aeeb6b8"/>
                        <Text>ELS4NTA</Text>
                    </Flex>
                </Link>
            </Box>
        </VStack>
    );
};

export default AboutUsPage;
