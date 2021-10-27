import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Main from './components/Main';

const index = ({ cookies }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTablet = useMediaQuery({
    minWidth: 600,
    maxWidth: 1224,
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 599px)',
  });
  return isDesktopOrLaptop ? (
    <Main Mquery="D" cookies={cookies} />
  ) : isTablet ? (
    <Main Mquery="T" cookies={cookies} />
  ) : isMobile ? (
    <Main Mquery="M" cookies={cookies} />
  ) : null;
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;

  return { props: { cookies: cookies || '' } };
};

export default index;
