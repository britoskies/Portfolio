import React from "react";

import { PhoneIcon } from "@chakra-ui/icons";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Props = {
  company: string;
  timeline: string;
  description: string;
};

const ExperienceItem = ({
  company,
  timeline,
  description,
}: Props): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px #f56565",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date={timeline}
      iconStyle={{ background: "#f56565", color: "#fff" }}
      icon={<PhoneIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b>Work Experience</b>
      </h3>
      <br />
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
