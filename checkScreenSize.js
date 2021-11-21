const checkScreenSize = () => {
  const screenWidth = screen.width;
  let desktopOrMobile;
  screenWidth < 420
    ? (desktopOrMobile = 'mobile')
    : (desktopOrMobile = 'desktop');
  return desktopOrMobile;
};

export default checkScreenSize;
