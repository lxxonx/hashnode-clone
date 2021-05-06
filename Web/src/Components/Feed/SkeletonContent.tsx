import { Box, Avatar } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { ReactElement } from "react";

interface Props {}

function SkeletonContent({}: Props): ReactElement {
  return (
    <Box
      padding="20px"
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        width="100%"
        marginBottom="8px"
      >
        <Skeleton variant="circle" style={{ marginRight: "8px" }}>
          <Avatar />
        </Skeleton>
        <Skeleton variant="rect" width="40%" height="30px" />
      </Box>

      <Box
        marginBottom="8px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          width="40%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Skeleton variant="text" width="95%" height="40px" />
          <Skeleton variant="text" width="90%" height="20px" />
          <Skeleton variant="text" width="90%" height="20px" />
          <Skeleton variant="text" width="90%" height="20px" />
          <Skeleton variant="text" width="80%" height="20px" />
        </Box>
        <Skeleton variant="rect" height="150px" width="60%" />
      </Box>
    </Box>
  );
}

export default SkeletonContent;
