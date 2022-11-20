import React from 'react'
import NextLink from 'next/link'
import { z } from 'zod'
import type { VariantProps } from 'cva'
import { cva } from 'cva'

const style = cva(
  ['text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'cursor-pointer'],
  {
    variants: {
      color: {
        primary: [],
        secondary: [],
      },
      variant: {
        text: [],
        contained: [],
        outlined: [],
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
        className: ['bg-primary', 'hover:bg-primary-dark', 'text-white'],
      },
      {
        variant: 'contained',
        color: 'secondary',
        className: ['bg-secondary', 'hover:bg-secondary-dark', 'text-white'],
      },
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'border',
          'border-primary',
          'hover:bg-primary-dark',
          'text-primary',
          'hover:border-none',
          'hover:text-white',
        ],
      },
      {
        variant: 'outlined',
        color: 'secondary',
        className: [
          'border',
          'border-secondary',
          'hover:bg-secondary-dark',
          'text-secondary',
          'hover:border-none',
          'hover:text-white',
        ],
      },
    ],
    defaultVariants: {
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

const Link: React.FC<PropsType> = ({ href, text, color, variant }) => {
  return (
    <NextLink href={href} data-testid={'link:' + href}>
      <div className={style({ color, variant })}>{text}</div>
    </NextLink>
  )
}

export default Link
