import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['docsPage'],
  args: {
    href: '#',
    text: 'Link',
  },
  argTypes: {
    href: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
        default: null,
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
        default: null,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Text: Story = {
  args: {
    variant: 'text',
  },
}

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}
