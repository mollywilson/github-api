import { Box, Card, CardActions, CardContent, Collapse, IconButton, Link, Typography } from "@mui/material";
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
        <Card variant="outlined" sx={{ boxShadow: 3}} >
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
                <Typography sx={{minHeight: "72px", mt: 6, ml: 4, textAlign: "left", }}>
                    {props.description}
                </Typography>
                <CardActions>
                    <Box sx={{ display: 'flex', ml: 3}}>
                        <Box>
                            Details
                            <IconButton onClick={toggleExpanded}>
                                <ExpandIcon expanded={expanded} />
                            </IconButton>
                        </Box>
                    </Box>
                </CardActions>
                <Collapse in={expanded}>
                    <CardContent sx={{display: "flex"}}>
                        <Typography variant="p" sx={{m: 1}}>
                            Forks: {props.forks_count}
                        </Typography>
                        <Typography variant="p" sx={{m: 1}}>
                            Stars: {props.stargazers_count}
                        </Typography>
                        <Typography variant="p" sx={{m: 1}}>
                            Open Issues: {props.open_issues_count}
                        </Typography>
                    </CardContent>
                </Collapse>
            </CardContent>
        </Card>
    )
}