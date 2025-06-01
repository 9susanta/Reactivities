import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useActivites } from "../../../lib/hooks/useActivities";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetail() {
  const {id} = useParams();
  const {activity, isLoadingActivity} = useActivites(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>

  if (!activity) return <Typography>Activity Not Found</Typography>

  return (
     <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailsSidebar />
            </Grid2>
    </Grid2>
  )
}

