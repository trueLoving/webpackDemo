import { Container, Aside, Header, Main } from "element-ui";
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
import { Menu, MenuItem, MenuItemGroup, Submenu } from "element-ui";
import { Table, TableColumn } from "element-ui";


const components = [
    Container,
    Aside,
    Header,
    Main,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Table,
    TableColumn,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu
]

export function installEl(Vue) {
    components.forEach(component => Vue.use(component));
}

