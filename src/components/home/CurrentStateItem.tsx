import React from "react";

import { CheckCircleIcon, RepeatIcon } from "@chakra-ui/icons";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";

const CurrentStateItem = (): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px #48bb78",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date="April 2022 - Present"
      iconStyle={{ background: "#48bb78", color: "#fff" }}
      icon={<RepeatIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b> Current State </b>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Where I'm at now</h4>
      <p>
        Currently learned the basics of Angular and Bootstrap by making a News
        Application. Also I'm making a small Ecommerce with Angular & building a
        full stack app with EJS and NodeJS with Express implementing paypal pay.
      </p>

      <List spacing={3}>
        <Text> What I'm Learning </Text>
        <ListItem>
          <ListIcon as={RepeatIcon} color="blue.200" />
          Angular (advanced concepts)
        </ListItem>
        <ListItem>
          <ListIcon as={RepeatIcon} color="blue.200" />
          ASP.NET
        </ListItem>
      </List>
      <List spacing={3}>
        <Text> Open to work </Text>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.200" />
          Yes
        </ListItem>
      </List>
    </VerticalTimelineElement>
  );
};

export default CurrentStateItem;
