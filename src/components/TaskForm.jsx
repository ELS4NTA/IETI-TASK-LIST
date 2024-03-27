import { AddIcon, ChatIcon, CloseIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Badge, Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const TaskForm = (props) => {
    const { addTask } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        addTask(data);
    };

    return (
        <Flex minW="600px" direction="column" align="start" gap="2" as="form" onSubmit={handleSubmit(onSubmit)}>
            <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h3" size="lg">Task Form</Heading>
            <Text colorScheme="blue">Title: </Text>
            <InputGroup>
                <InputLeftElement>
                <ChatIcon color={errors.title ? "red.500" : "gray"} />
                </InputLeftElement>
                <Input {...register("title", {
                            required: "Title is required",
                            minLength: { value: 3, message: "Title is too short" },
                        })}
                        id="title" type="text"
                        borderColor={errors.title ? "red.500" : "gray.200"}
                        focusBorderColor={errors.title ? "red.500" : "blue.500"}
                        size="sm"
                        placeholder="Title of todo" />
                {errors.title && <InputRightElement><CloseIcon color="red.500" /></InputRightElement>}
            </InputGroup>
            {errors.title && <Badge colorScheme="red">{errors.title.message}</Badge>}
            <Text>Description: </Text>
            <InputGroup>
                <InputLeftElement>
                <InfoOutlineIcon />
                </InputLeftElement>
                <Input {...register("description")}
                        id="description"
                        type="text"
                        size="sm"
                        borderColor="gray.200"
                        placeholder="Description of todo"/>
            </InputGroup>
            <Button colorScheme="green" size="sm" onClick={handleSubmit(onSubmit)} leftIcon={<AddIcon />}>Add</Button>
        </Flex>
    );
};

export default TaskForm;
