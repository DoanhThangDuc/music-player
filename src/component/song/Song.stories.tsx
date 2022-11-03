import Song from "./Song";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";

type SongProps = ComponentProps<typeof Song>;

export default {
  title: "Song",
  component: Song,
} as Meta<SongProps>;

const Template: Story<SongProps> = (args) => <Song {...args} />;

export const Default = Template.bind({});
export const MultySongs = Template.bind({});
