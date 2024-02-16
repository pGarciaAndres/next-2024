import { HEALTH_TITLE } from '@/app/utils/constants'
import CommonLayout from '../ui/common/layout/layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CommonLayout title={HEALTH_TITLE}>{children}</CommonLayout>
}
