declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    absoluteStrokeWidth?: boolean
  }
  export type LucideIcon = FC<LucideProps>
  export const ArrowRight: LucideIcon
  export const Bus: LucideIcon
  export const Calendar: LucideIcon
  export const Car: LucideIcon
  export const CheckCircle: LucideIcon
  export const ChevronDown: LucideIcon
  export const Clock: LucideIcon
  export const CreditCard: LucideIcon
  export const Folder: LucideIcon
  export const Heart: LucideIcon
  export const Home: LucideIcon
  export const Mail: LucideIcon
  export const MapPin: LucideIcon
  export const Menu: LucideIcon
  export const Phone: LucideIcon
  export const Send: LucideIcon
  export const ShoppingBag: LucideIcon
  export const Star: LucideIcon
  export const TrendingUp: LucideIcon
  export const X: LucideIcon
  export const Zap: LucideIcon
}
