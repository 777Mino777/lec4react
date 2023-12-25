import { useState, useEffect } from 'react';
import Hh1 from '../comm/Hh1';
import data from "./dataFrcst.json"
import style from "./Frcst.module.css"

const Frcst = () => {
    console.log(data);
    const dtkey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"] ;
    const cnkey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"] ;
    // state 변수 (const)
    const [cnTag, setCnTag] = useState([

    ]);
    // 날짜가 클릭되었을 때 실행 함수
    const handleClick = (k) => {
        // console.log("click", dtcn[k])
        let temp = dtcn[k].split(',') ;
        temp = temp.map((item,idx) =>  {
            let spitem = item.split(':');
                return (
            <div key={`cn`+idx}>
                <span className={style.sp1}>{spitem[0]}</span>
                {spitem[1].trim() === '낮음'
                ? <span className={style.sp21}>{spitem[1]}</span>
                : spitem[1].trim() === '보통'
                    ? <span className={style.sp22}>{spitem[1]}</span>
                    : <span className={style.sp23}>{spitem[1]}</span>
                    }
            </div>
                )
                });
    setCnTag(temp);
        };
    // 날짜(key) : 지역미세먼지(value) 인 dtcn 오브젝트 생성ㄴ
    let dtcn = {};
    dtkey.map((item,idx) =>
    dtcn[data[item]] = data[cnkey[idx]]);

    // console.log("dtcn", dtcn);

    // 날짜 영역만들기
    console.log("dtcnkey" , Object.keys(dtcn))
    let dtTag = Object.keys(dtcn).map((item, idx) =>
    <div 
        key={`dtcn${idx}`}
        className={style.dtcnkey}
        onClick={() => handleClick(item)}    
    >
        {item}
        </div> 
    );
       useEffect(() => {
        console.log("cnTag",cnTag)
 }, [cnTag]);


  return (
    <main className="container">
        <article>
            <Hh1 title='미세먼지확인'/>
            <div className="gird">
                {dtTag}
            </div>
            <div className="grid">
                {cnTag}
            </div>
        </article>
    </main>
  )
}

export default Frcst;
