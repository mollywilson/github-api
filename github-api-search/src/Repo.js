import { Card, CardContent, Link, Typography, useTheme } from "@mui/material";

export default function Repo(props) {

    const theme = useTheme();

    return (
        <Card variant="outlined">
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

                <h2>Detailed view:</h2>
                <p>Forks: {props.forks_count}</p>
                <p>Stars: {props.stargazers_count}</p>
                <p>Open Issues: {props.open_issues_count}</p>
                
            </CardContent>
        </Card>
    )
}