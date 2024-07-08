import Accordion from "../../../components/Accordion";

export default {
  component: Accordion,
};

export const DefaultClosed = {
  args: {
    title: "Accordion title",
    children:
      "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and  seasonal special events.",
    open: false,
  },
};

export const DefaultOpen = {
  args: {
    title: "Accordion title",
    children:
      "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    open: true,
  },
};
