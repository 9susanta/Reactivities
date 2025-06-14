import { Box, Typography } from "@mui/material"
import ActivityCard from "./ActivityCard"
import { useActivites } from "../../../lib/hooks/useActivities";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ActivityList = observer(function ActivityList() {
  const { activitiesGroup, isLoading, hasNextPage, fetchNextPage } = useActivites();
  const {ref, inView} = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage])

  if (isLoading) return <Typography>Loading...</Typography>

  if (!activitiesGroup) return <Typography>No activities found</Typography>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {activitiesGroup.pages.map((activities, index) => (
        <Box 
          key={index}
          ref={index === activitiesGroup.pages.length - 1 ? ref : null}
          display='flex'
          flexDirection='column'
          gap={3}
        >
          {activities.items.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
            />
          ))}
        </Box>
      ))}

    </Box>
  )
});

export default ActivityList;