// import style from './Lotto.module.css';
// import { useState/**/ } from 'react';
// const Lotto = () => {
//     let numArr = [];
//     // let lottoTag = [] ;
//     const [lottoTag, setLottoTag] = useState([]);

//     const getNum = () => {
//         numArr = [] ;
//         while (numArr.length < 6) {
//             let n = Math.floor(Math.random() * 45) + 1;
//             if (numArr.indexOf(n) < 0) numArr.push(n);
//         }
//         console.log(numArr);
//         // lottoTag = numArr.map((item) => 
//         //     <div className={style.lottonum}>1</div>
//         // );
//         setLottoTag(numArr.map((item) =>
//             <div className={style.lottonum}>{item}</div>
//         ));
//         console.log(lottoTag);
//     }



//     // 리턴은 (큰 틀로) 태그가 한개만 들어갈 수 있다.
//     return (
//         <main className="container">
//             <article>
//                 <header>
//                     <h1>로또 생성기</h1>
//                 </header>
//                 <div className={style.lottobox}>
//                     {lottoTag}
//                     {/* 
//                     <div className={style.lottonum}>2</div> */}
//                 </div>
//                 <footer>
//                     {/*<button onClick={getNum}>생성하기</button>*/}
//                     <button onClick={() => getNum()}>생성하기</button>
//                 </footer>
//             </article>
//         </main>
//         // <>
//         // </> 이걸 넣어도 하나로 취급
//     );
// }

// export default Lotto; 