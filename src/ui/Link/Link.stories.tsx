import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component: 'Link component.',
      },
    },
  },
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
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
        default: 'text',
      },
    },
    color: {
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
        default: 'primary',
      },
    },
    size: {
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'auto' },
      },
      control: {
        type: 'select',
        options: ['auto', 'fullWidth'],
        default: 'auto',
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
