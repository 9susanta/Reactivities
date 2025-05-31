import { Card, CardContent, Typography, CardActions, Chip, Box, Button } from "@mui/material"
import { useActivites } from "../../../lib/hooks/useActivities";

type Props={
  activity: Activity
  selectActivity: (id: string) => void;
}
export default function ActivityCard({activity, selectActivity}:Props) {
  const {deleteActivity} = useActivites();
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
        <Chip label={activity.category} variant="outlined" />
        <Box display='flex' gap={3}>
          <Button size="medium" onClick={()=>selectActivity(activity.id)}
            variant="contained">View</Button>
          <Button color='error' disabled={deleteActivity.isPending} size="medium" onClick={() => deleteActivity.mutate(activity.id)}
            variant="contained">Delete</Button>
        </Box>
      </CardActions>
    </Card>
  )
}