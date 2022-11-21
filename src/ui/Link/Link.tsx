import React from 'react'
import NextLink from 'next/link'
import { z } from 'zod'
import type { VariantProps } from 'cva'
import { cva } from 'cva'

const style = cva(
  [
    'inline-block',
    'text-sm',
    'font-medium',
    'text-white',
    'py-3',
    'px-12',
    'rounded',
    'cursor-pointer',
    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        auto: ['w-full', 'sm:w-auto'],
        fullWidth: ['w-full'],
      },
      color: {
        primary: ['active:ring-primary'],
        secondary: ['active:ring-secondary'],
      },
      variant: {
        text: [
          'hover:text-opacity-75',
          'hover:no-underline',
          'active:text-opacity-100',
        ],
        contained: ['active:text-opacity-75', 'active:ring'],
        outlined: ['active:ring'],
      },
    },
    compoundVariants: [
      {
        variant: 'text',
        color: 'primary',
        className: ['text-primary', 'underline'],
      },
      {
        variant: 'text',
        color: 'secondary',
        className: ['text-secondary', 'underline'],
      },
      {
        variant: 'contained',
        color: 'primary',
        className: [
          'bg-primary',
          'text-white',
          'border',
          'border-primary',
          'hover:bg-transparent',
        ],
      },
      {
        variant: 'contained',
        color: 'secondary',
        className: [
          'bg-secondary',
          'text-white',
          'border',
          'border-secondary',
          'hover:bg-transparent',
        ],
      },
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'text-white',
          'border',
          'border-primary',
          'hover:bg-primary-dark',
          'active:bg-primary-light',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'text-white',
          'border',
          'border-secondary',
          'hover:bg-secondary-dark',
          'active:bg-secondary-light',
        ],
      },
    ],
    defaultVariants: {
      size: 'auto',
      variant: 'text',
      color: 'primary',
    },
  }
)

const Props = z.object({
  href: z.string(),
  text: z.string(),
})

type PropsType = z.infer<typeof Props> & VariantProps<typeof style>

const Link: React.FC<PropsType> = ({ href, text, color, variant, size }) => {
  return (
    <NextLink href={href} data-testid={'link:' + href} legacyBehavior>
      <a className={style({ color, variant, size })}>{text}</a>
    </NextLink>
  )
}

export default Link
