import Input from "@/components/Input/Input";

export default {
  component: (Input),
};

export const Default = {
  args: {
    label: "name",
    type: "text",
    placeholder:"Jhon Doe",
    className:"w-4",
  },
};

export const InputError = {
    args: {
      label: "name",
      type: "text",
      placeholder:"Jhon Doe",
      className:"w-4",
      error:"error"
    },
  };

  export const InputEmail = {
    args: {
      label: "name",
      type: "email",
      placeholder:"Jhon Doe",
      className:"w-4",
    },
  };
  
  