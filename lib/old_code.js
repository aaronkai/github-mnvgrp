// const [cookie, setCookie] = useCookies(['test']);
// setCookie('test', JSON.stringify('This is a test'), {
//   path: '/',
//   maxAge: 3600,
//   sameSite: true,
// });

// Home.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req);

//   if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       // res.writeHead(301, { Location: '/' });
//       res.end();
//     }
//   }

//   return {
//     data: data && data,
//   };
// };

// useEffect(() => {
//   const value = localStorage.getItem("TM");
//   const data = !!value
//     ? JSON.parse(value)
//     : {
//         squat: 0,
//         bench: 0,
//         deadlift: 0,
//         overhead: 0,
//       };
//   console.log(data);
//   setTM(data);
// }, []);

// useEffect(() => {
//   const value = localStorage.getItem("oneRM");
//   const data = !!value
//     ? JSON.parse(value)
//     : {
//         squat: 0,
//         bench: 0,
//         deadlift: 0,
//         overhead: 0,
//       };
//   console.log(data);
//   setOneRM(data);
// }, []);

// let RMhistory;
// let TMhistory;
// if (typeof window !== "undefined") {
//   if (localStorage.getItem("TM") == null) {
//     console.log("its null");
//   } else {
//     if (RMhistory == null) {
//       console.log("welcome back");
//       RMhistory = JSON.parse(localStorage.getItem("oneRM"));
//       TMhistory = JSON.parse(localStorage.getItem("TM"));
//     }
//   }
// }
// console.log({ RMhistory, TMhistory });
// useEffect(() => {
//   console.log("HEY, it changes!");
//   setTM(JSON.stringify(TMhistory));
//   setOneRM(JSON.stringify(RMhistory));
// }, [TMhistory, RMhistory]);
// const initialValue = {
//   squat: 0,
//   bench: 0,
//   deadlift: 0,
//   overhead: 0,
// }

// const initialize = (key) => {
//   try {
//     const item = localStorage.getItem(key);
//     if (item && item !== "undefined") {
//       return JSON.parse(item);
//     }

//     localStorage.setItem(key, JSON.stringify(initialValue));
//     return initialValue;
//   } catch {
//     return initialValue;
//   }
// }
// let initialValue;

// if (typeof window !== "undefined") {
//   initialValue = JSON.parse(localStorage.getItem("TM"));
//   if (localStorage.getItem("TM")) {
//     console.log(initialValue);
//   } else {
//     console.log("it's null");
//   }
// }
// useEffect(() => {
//   localStorage.setItem("TM", JSON.stringify(TM));
// }, [TM]);

// useEffect(() => {
//   localStorage.setItem("oneRM", JSON.stringify(oneRM));
// }, [oneRM]);

// useEffect(() => {
//   const initialValue = JSON.parse(localStorage.getItem("TM"));
//   if (initialValue != null) {
//     setTM(JSON.stringify(localStorage.getItem("TM")));
//   }
// }, [TM]);
