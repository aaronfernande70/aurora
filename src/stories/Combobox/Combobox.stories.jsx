import { type } from "os";
import Combobox from "../../components/Combobox";

 export default {
  component: Combobox,
};
export const Default = {
  args: {
    type: "input",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
    placeholder: "Select a fruit",
    onChange: (value) => {
      console.log("Selected:", value);
    },
  },
};