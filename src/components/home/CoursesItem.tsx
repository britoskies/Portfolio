import React from "react";

import { CheckCircleIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const CoursesItem = (): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px cyan",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date="Mar 2020 - Dec 2020"
      iconStyle={{ background: "cyan", color: "#fff" }}
      icon={<EditIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b>Programming Courses</b>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Online</h4>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          Web Introduction - Google Actívate
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          HTML & CSS - SoloLearn
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          Programming Logic - Aprende.org
        </ListItem>
      </List>
    </VerticalTimelineElement>
  );
};

export default CoursesItem;
