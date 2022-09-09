import Head from 'next/head';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import TMCalc from '../components/TMCalc';
import { getCookies, getCookie, setCookie, removeCookies } from 'cookies-next';

export const getServerSideProps = ({ req, res }) => {
  setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
  return {
    props: { message: `Next.js is awesome` },
  };
};

export default function Home(props) {
  const [oneRM, setOneRM] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
    overhead: 0,
  });

  const [TM, setTM] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
    overhead: 0,
  });
  const [week, setWeek] = useState(1);

  return (
    <div>
      <Head>
        <title>five three one</title>
        <meta name="description" content="workout helper for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Message from the Server: {props.message}!</p>
      <Header title="Five Three One" />
      <Nav />
      <TMCalc oneRM={oneRM} setOneRM={setOneRM} TM={TM} setTM={setTM} />
    </div>
  );
}
