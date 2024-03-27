import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import Menu from "./Menu";

const Header = (props) => {
    const { title } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" size="lg">{title}</Heading>
            </Box>
            <Spacer />
            <Menu />
            <Box p="2">
                <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} />
            </Box>
        </Flex>
    );
};

export default Header;
