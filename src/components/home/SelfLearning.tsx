import React from "react";

// Chakra
import { AtSignIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const SelfLearningItem = (): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px purple",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date="Sep 2021 - March 2022"
      iconStyle={{ background: "purple", color: "#fff" }}
      icon={<AtSignIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b>Self Learning</b>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Online & College</h4>
      <List spacing={3} mt={5}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          JavaScript with NodeJS - Udemy
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          React Fundamentals - SoloLearn
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          Angular Fundamentals - HackerRank
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          CiberSecurity Course - ITLA
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          C# (Windows Forms) - ITLA
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          SQL Server - ITLA
        </ListItem>
      </List>
    </VerticalTimelineElement>
  );
};

export default SelfLearningItem;
