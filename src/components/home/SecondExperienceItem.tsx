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
      date="Jun 2022 - Present"
      iconStyle={{ background: "#f56565", color: "#fff" }}
      icon={<PhoneIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b>Work Experience</b>
      </h3>
      <br />

      <h4 className="vertical-timeline-element-subtitle">Banco Popular Dominicano</h4>
      <p>
        Currently I'm working as a RPA Developer in one of the most important
        banks in my country. Using tools like BluePrism for automation purposes,
        Jira for project management tooling and SCRUM as the methology
      </p>
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
