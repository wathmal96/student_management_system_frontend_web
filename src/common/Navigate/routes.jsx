import PreviewIcon from '@mui/icons-material/Preview';
import ViewStudent from '../../pages/ViewStudent/ViewStudent';
import AddStudent from '../../pages/AddStudent/AddStudent';
import AddIcon from '@mui/icons-material/Add';


const routes = [
    {
        path:"/viewstudent",
        element:<ViewStudent/>,
        icon:<PreviewIcon />,
        text:"View Student"
    },
    {
        path:"/addstudent",
        element:<AddStudent/>,
        icon:<AddIcon />,
        text:"Add Student"
    }
]

export default routes;