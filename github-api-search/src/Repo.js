import { Box, Card, CardActions, CardContent, Collapse, IconButton, Link, Typography, useTheme } from "@mui/material";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";
import { Global, css } from '@emotion/react'

export default function Repo(props) {


    const theme = useTheme();
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
                    <p>by
                        <Link href={"https://github.com/" + props.owner.login} ml="4px">
                            {props.owner.login}
                        </Link>
                    </p>
                </Typography>
                <CardActions disableActionSpacing>
                    <Box sx={{ display: 'flex'}}>
                        <Box>
                            Details
                            <IconButton
                                onClick={toggleExpanded}
                            >
                                <ExpandIcon expanded={expanded} />
                            </IconButton>
                        </Box>
                        
                    </Box>
                    
                </CardActions>
                <Collapse in={expanded}>
                    <CardContent>
                        <Typography>
                            <p>Forks: {props.forks_count}</p>
                            <p>Stars: {props.stargazers_count}</p>
                            <p>Open Issues: {props.open_issues_count}</p>
                        </Typography>
                    </CardContent>
                </Collapse>
                
            </CardContent>
        </Card>
    )
}