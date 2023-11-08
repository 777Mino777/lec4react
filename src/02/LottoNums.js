// rafce + enter = 자동생성
// probs - 1. Object이다 2. probs.~
import style from './Lotto.module.css'
// const LottoNums = (probs) => {
    const LottoNums = ({ns}) => {
    // console.log("LottoNums", probs.ns)
    console.log("LottoNums", ns)
        let n;
        // 1 ~ 9 : lottonum1
        // 10 ~ 19 : lottonum2
        // 20 ~ 29 : lottonum3
        // 30 ~ 39 : lottonum4
        // 40 ~ 45 : lottonum5
    const nsTag = ns.map((item, idx) => {
        // let temp ;
        // if문
        // if (item < 10) temp = <div key ={'ns'+idx} className={style.LottoNums1}>{item}</div> 
        // else if (item < 20) temp = <div className={style.LottoNums2}>{item}</div>
        // else if (item < 30) temp = <div className={style.LottoNums3}>{item}</div>
        // else if (item < 40) temp = <div className={style.LottoNums4}>{item}</div>
        // else temp = <div className={style.LottoNums5}>{item}</div>
        
        // // switch case
        // let n = Math.floor(item / 10) ;
        // switch (n) {
        //     case 0: 
        //         temp = <div key ={'ns'+idx} className={style.LottoNums1}>{item}</div>
        //         break;
        //     case 1: 
        //         temp = <div key ={'ns'+idx} className={style.LottoNums2}>{item}</div>
        //         break;
        //     case 2: 
        //         temp = <div key ={'ns'+idx} className={style.LottoNums3}>{item}</div>
        //         break;
        //     case 3: 
        //         temp = <div key ={'ns'+idx} className={style.LottoNums4}>{item}</div>
        //         break;
        //     case 4: 
        //         temp = <div key ={'ns'+idx} className={style.LottoNums5}>{item}</div>
        //         break;
            
        // }
        let n = Math.floor(item / 10) ;
        return (
            idx === (ns.length - 1)
            ? <div key={'nsplus'} className={style.plus}> + </div>
            : <div key ={'ns'+idx} className={style[`lottonum${n+1}`]}>
                {item}
            </div>
            
        // console.log(ncss);
    )
    });

    n = Math.floor(ns.at(-1) / 10);
    nsTag.push(
        <div key ={'ns'+ (ns.length - 1)} className={style[`lottonum${n + 1}`]}>
                {ns.at(-1)}
            </div>
    );


  return (
    <div className={style.lottobox}>
        {nsTag}
    </div>
  )
}

export default LottoNums
