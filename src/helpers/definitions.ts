import { FixedObject, FluidObject } from 'gatsby-image'

export type ImageSharpFluid = FluidObject | FluidObject[] | undefined
export type ImageSharpFixed = FixedObject | FixedObject[] | undefined

export interface SectionTitle {
  title: string
  subtitle: string
}
