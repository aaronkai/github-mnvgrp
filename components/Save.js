import cookieCutter from 'cookie-cutter';

export default function Save({ cookieName, cookieData }) {
  function handleClick() {
    console.log(cookieName);
    console.log('saving' + JSON.stringify(cookieData));
    cookieCutter.set(cookieName, JSON.stringify(cookieData));
  }
  return <button onClick={() => handleClick()}>Save</button>;
}
