import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";

const Task = (props) => {
    const { title, description, onDelete, onEdit } = props;

    return (
        <AccordionItem>
            <AccordionButton>
                <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h3" size="sm" flex="1" textAlign="left">{title}</Heading>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <Text mb={5}>{description}</Text>
                <ButtonGroup>
                    <Button colorScheme="yellow" size="sm" onClick={onEdit} leftIcon={<EditIcon />}>Edit</Button>
                    <Button colorScheme="red" size="sm" onClick={onDelete} leftIcon={<DeleteIcon />}>Delete</Button>
                </ButtonGroup>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default Task;
