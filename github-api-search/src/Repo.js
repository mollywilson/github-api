import { 
    Box, 
    Card, 
    CardActions, 
    CardContent, 
    Collapse, 
    IconButton, 
    Link, 
    Typography 
} from "@mui/material";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";

export default function Repo(props) {

    const [expanded, setExpanded] = useState(false);

    const ExpandIcon = ({ expanded }) =>
        expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card variant="outlined" className="repo-card" >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link href={props.html_url}>{props.name}</Link>
                </Typography>
                <Typography gutterBottom variant="p">
                    by
                    <Link href={"https://github.com/" + props.owner.login} ml="4px">
                        {props.owner.login}
                    </Link>
                </Typography>
                <Box className="container card-description">
                    <Typography variant="p">
                        {props.description}
                    </Typography>
                </Box>
                <CardActions>
                    <Box className="flex details-container">
                        <Box>
                            Details
                            <IconButton onClick={toggleExpanded}>
                                <ExpandIcon expanded={expanded} />
                            </IconButton>
                        </Box>
                    </Box>
                </CardActions>
                <Collapse in={expanded}>
                    <CardContent className="flex">
                        <Typography variant="p">
                            Forks: {props.forks_count}
                        </Typography>
                        <Typography variant="p">
                            Stars: {props.stargazers_count}
                        </Typography>
                        <Typography variant="p">
                            Open Issues: {props.open_issues_count}
                        </Typography>
                    </CardContent>
                </Collapse>
            </CardContent>
        </Card>
    )
}