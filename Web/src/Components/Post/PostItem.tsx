import { Box, styled, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { Maybe, Scalars } from "../../generated/graphql";
import { BoldText, FlexColumnBox, LightText } from "../../styles/Styles";

const TextImage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: { flexDirection: "column" },
  width: "100%",
  padding: "20px 0",
  cursor: "pointer",
}));

interface Props {
  title: Scalars["String"];
  content: Scalars["String"];
  shortenedText?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  postId: string;
}
function PostItem({
  photo,
  title,
  content,
  shortenedText,
  postId,
}: Props): ReactElement {
  const theme = useTheme();
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/p/${postId}`);
  };
  return (
    <TextImage onClick={onClickHandler}>
      <FlexColumnBox
        {...(!medium && photo && { maxWidth: "65%" })}
        width="100%"
      >
        <BoldText variant="h4" textColor="black" fontSize="24px">
          {title}
        </BoldText>
        <Box paddingY="6px">
          <LightText textColor={theme.palette.secondary.dark} fontWeight={600}>
            {content}
          </LightText>
        </Box>
        <LightText textColor="black">
          {shortenedText
            ? shortenedText.length >= 200
              ? shortenedText + "..."
              : shortenedText
            : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </LightText>
      </FlexColumnBox>
      {photo && (
        <Box
          width={medium ? "100%" : "30%"}
          height="auto"
          marginTop={medium ? "14px" : "0"}
        >
          <img src={photo} width="100%" alt={`${shortenedText}`} />
        </Box>
      )}
    </TextImage>
  );
}

export default PostItem;
