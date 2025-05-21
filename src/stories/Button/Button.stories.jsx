import Button from "../../components/Button";

export default {
  component: Button,
};

export const Primary = {
  args: {
    children: "Button",
    onClick: (e) => {
      console.log(e);
      alert('hi')
    },
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Button",
    onClick: (e) => {
      console.log(e);
      alert('hi')
    },
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    children: "Button",
    disabled: "true"
  }
};

export const Default = {
  args: {
    children: "Button",
  }
};

