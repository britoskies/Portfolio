import React from "react";

// Chakra
import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

// Services
import experiences from "../../services/experiences";

// Components
import CoursesItem from "./CoursesItem";
import ExperienceItem from "./ExperienceItem";
import SelfLearningItem from "./SelfLearning";
import ProjectsItem from "./ProjectsItem";
import CurrentStateItem from "./CurrentStateItem";

const GroundWork = () => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");

  const getExperience = (exp: number) => {
    return experiences.filter((e) => exp === e.id)[0];
  };

  return (
    <Flex direction="column" w="100%" justify="center" align="center" gap={3}>
      <Text
        position="relative"
        fontSize="lg"
        color="#c6f6d5"
        className="underline"
        data-aos="fade-left"
        data-aos-duration={3000}
      >
        Own timeline
      </Text>
      <Heading
        size="lg"
        color="white"
        mb={10}
        data-aos="fade-right"
        data-aos-duration={3000}
      >
        GroundWork
      </Heading>
      <VerticalTimeline>
        <CoursesItem />
        <ExperienceItem
          company={getExperience(1).company}
          timeline={getExperience(1).timeline}
          description={getExperience(1).description}
        />
        <SelfLearningItem />
        <ProjectsItem />
        <ExperienceItem
          company={getExperience(2).company}
          timeline={getExperience(2).timeline}
          description={getExperience(2).description}
        />
        <ExperienceItem
          company={getExperience(3).company}
          timeline={getExperience(3).timeline}
          description={getExperience(3).description}
        />
      </VerticalTimeline>
    </Flex>
  );
};

export default GroundWork;
