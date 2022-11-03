import Header from "./Header";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";

type HeaderProps = ComponentProps<typeof Header>;
export default {
  title: "Header",
  component: Header,
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
