import type { Meta, StoryObj } from '@storybook/react'

import Home from '../../src/pages/index'

const meta: Meta<typeof Home> = {
  title: 'Example/Home',
  component: Home,
}

export default meta
type Story = StoryObj<typeof Home>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
