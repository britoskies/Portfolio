import React from "react";

import { PhoneIcon } from "@chakra-ui/icons";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceItem = (): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px #f56565",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date="Mar 2021 - Aug 2021"
      iconStyle={{ background: "#f56565", color: "#fff" }}
      icon={<PhoneIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b>Work Experience</b>
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Teleperformance</h4>
      <p>
        Worked as a Customer Service Representative in english format. My role
        was to answer inbound phone calls, addressing customers questions about
        products and services, and generate sales lead.
      </p>
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
