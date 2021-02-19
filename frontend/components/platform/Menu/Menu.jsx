import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@material-ui/core'

function Menu(props) {
    return (
        <List>
            <a href="/produtos/">
                <ListItem button>Produtos</ListItem>
            </a>
            <a href="/admin/">
                <ListItem button>Admin</ListItem>
            </a>
        </List>
    )
}

export default Menu