import React from "react";

import { CopyIcon } from "@chakra-ui/icons";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ProjectsItem = (): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#2b2b2b",
        color: "#fff",
        borderBottom: "solid 5px #ecc94b",
      }}
      contentArrowStyle={{ borderRight: "12px solid #2b2b2b" }}
      date="Jan 2022 - April 2022"
      iconStyle={{ background: "#ecc94b", color: "#fff" }}
      icon={<CopyIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        <b> Best Projects </b> (Build Process)
      </h3>
      <h4 className="vertical-timeline-element-subtitle">At Home</h4>
      <p>
        Started on December 2021 with a minimal Weather Forecast application,
        made with React, CSS and Tailwind. At the same time I built a Login Api
        with NodeJS and ExpressJS using JWT. <br /> <br />
        
        On January 2021 created a Hospital Management System which is a full
        stack app made with React, Material UI & Firebase.
      </p>
    </VerticalTimelineElement>
  );
};

export default ProjectsItem;
