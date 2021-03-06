import { Box, Button, styled } from "@material-ui/core";
import {
  CameraAltOutlined,
  Code,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  InsertLink,
} from "@material-ui/icons";
import React, { BaseSyntheticEvent, ReactElement } from "react";
import { useUploadPhotoMutation } from "../../generated/graphql";
import { FlexRowBox, UploadButton, UploadLabel } from "../../styles/Styles";
import { setCursor } from "../../Utilities/setCursor";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "4px",
  margin: "20px 0",
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  zIndex: 9,
  top: 0,
  position: "sticky",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
const TextButton = styled(Button)({
  minWidth: 0,
  textTransform: "capitalize",
});
const IconButton = styled(Button)({
  minWidth: 0,
  padding: "4px",
});

interface Props {
  textState: "write" | "preview" | "guide";
  setTextState: Function;
}

function Menu({ textState, setTextState }: Props): ReactElement {
  const [uploadPhotoMutation] = useUploadPhotoMutation();
  const uploadPhoto = async (e: BaseSyntheticEvent) => {
    if (e.target.files[0]) {
      const { data } = await uploadPhotoMutation({
        variables: { upload: e.target.files[0] },
      });
      const txtarea = document.getElementById(
        "post_textarea"
      ) as HTMLInputElement;
      setCursor({
        txtarea,
        before: `\n![Alt text of image](${data?.upload})\n`,
        after: "",
        startPos: 3,
        endPos: "\n![Alt text of image".length,
      });
    }
  };
  const StateChange = (e: BaseSyntheticEvent) => {
    // chage text state
    setTextState(e.currentTarget.name);
  };
  const onClickIcon = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const txtarea = document.getElementById(
      "post_textarea"
    ) as HTMLInputElement;
    switch (e.currentTarget.name) {
      case "bold":
        setCursor({ txtarea, before: "**", after: "**", startPos: 2 });
        break;
      case "italic":
        setCursor({ txtarea, before: "*", after: "*", startPos: 1 });
        break;
      case "quote":
        setCursor({ txtarea, before: "\n> \n", after: "", startPos: 3 });
        break;
      case "link":
        setCursor({
          txtarea,
          before: "[I'm an inline link](/put-link-here)",
          after: "",
          startPos:
            "[I'm an inline link](/put-link-here)".length -
            "/put-link-here)".length,
          endPos: "[I'm an inline link](/put-link-here)".length - 1,
        });
        break;
      case "code":
        setCursor({ txtarea, before: "\n```", after: "\n```", startPos: 4 });
        break;
      case "ul":
        setCursor({ txtarea, before: "\n- \n", after: "", startPos: 3 });
        break;
      case "ol":
        setCursor({ txtarea, before: "\n1. \n", after: "", startPos: 3 });
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <FlexRowBox>
        <TextButton
          onClick={StateChange}
          name="write"
          color={textState === "write" ? "primary" : "default"}
        >
          write
        </TextButton>
        <TextButton
          onClick={StateChange}
          name="preview"
          color={textState === "preview" ? "primary" : "default"}
        >
          preview
        </TextButton>
        <TextButton
          onClick={StateChange}
          name="guide"
          color={textState === "guide" ? "primary" : "default"}
        >
          Guide
        </TextButton>
      </FlexRowBox>
      {textState === "write" && (
        <FlexRowBox>
          <IconButton
            name={"bold"}
            onClick={onClickIcon}
            children={<FormatBold />}
          />
          <IconButton
            name={"italic"}
            onClick={onClickIcon}
            children={<FormatItalic />}
          />
          <IconButton
            name={"quote"}
            onClick={onClickIcon}
            children={<FormatQuote />}
          />
          <IconButton
            name={"link"}
            onClick={onClickIcon}
            children={<InsertLink />}
          />
          <IconButton name={"code"} onClick={onClickIcon} children={<Code />} />
          <IconButton
            name={"ul"}
            onClick={onClickIcon}
            children={<FormatListBulleted />}
          />
          <IconButton
            name={"ol"}
            onClick={onClickIcon}
            children={<FormatListNumbered />}
          />
          <UploadButton className="filebox">
            <UploadLabel htmlFor="input_file">
              <CameraAltOutlined />
            </UploadLabel>
            <input type="file" id="input_file" onChange={uploadPhoto} />
          </UploadButton>
        </FlexRowBox>
      )}
    </Container>
  );
}

export default Menu;
