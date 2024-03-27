import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Center p={6}>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/tasks">
                        Task List
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/about-us">
                        About Us
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Center>
    );
};

export default Menu;
