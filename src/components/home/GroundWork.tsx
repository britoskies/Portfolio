import React from "react";

// Chakra
import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

// Vertical Timeline
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

// Components
import CoursesItem from './CoursesItem';
import ExperienceItem from './ExperienceItem';
import SelfLearningItem from './SelfLearning';
import ProjectsItem from './ProjectsItem';
import CurrentStateItem from './CurrentStateItem';
import SecondExperienceItem from "./SecondExperienceItem";


const GroundWork = () => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");
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
        <CoursesItem/>
        <ExperienceItem />
        <SelfLearningItem />
        <ProjectsItem />
        <SecondExperienceItem/>
        <CurrentStateItem/>
      </VerticalTimeline>
    </Flex>
  );
};

export default GroundWork;
