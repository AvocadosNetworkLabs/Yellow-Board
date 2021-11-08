import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../../components/Utils/Navbar';
import Footer from '../../components/Utils/Footer';

export const getServerSideProps = async ({ params, req }) => {
  let url = 'http://localhost:3000/api/courses/';
  const res = await fetch(url + params.id);
  const data = await res.json();
  let course = data.data;
  const { cookies } = req;
  return { props: { course, cookies: cookies || '' } };
};

const curso = ({ course, cookies }) => {
  const D = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const T = useMediaQuery({
    minWidth: 600,
    maxWidth: 1224,
  });
  const M = useMediaQuery({
    query: '(max-width: 599px)',
  });

  return (
    <>
      <Navbar cookies={cookies} />
      <p>Hola</p>
      <Footer />
    </>
  );
};

export default curso;
