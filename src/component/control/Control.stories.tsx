import Control from "./Control";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";

type ControlProps = ComponentProps<typeof Control>;
export default {
  title: "Control",
  component: Control,
} as Meta<ControlProps>;

const Template: Story<ControlProps> = (args) => <Control {...args}></Control>;
export const Default = Template.bind({});
