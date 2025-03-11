import useDeviceType from '@/hooks/useDeviceType'

const ResponsiveLayout = ({ mobileComponent, desktopComponent }) => {
  const isMobile = useDeviceType()
  console.log(isMobile)
  return isMobile ? mobileComponent : desktopComponent
}

export default ResponsiveLayout
