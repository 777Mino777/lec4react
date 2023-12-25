// useState 변수가 바뀔때마다? 
// for -> React에서는 map을 쓰자. 전체배열 순회 가능
// 뭔가를 거르고 싶을때는 필터
import dataTaccident from './dataTaccident.json';
import TaccidentNav from './TaccidentNav';
import Hh1 from '../comm/Hh1';
import { useState, useEffect } from 'react';

const Taccident = () => {
  // 오브젝트 값 가져오기
  //const tdata = dataTaccident['data'];
  const tdata = dataTaccident.data;

  // 배열 순회 // 배열.map();
  //tdata.map((k ,v) or (k) or (item) => {});
  // let c1 = tdata.map((k) => {
  //   console.log(k.사고유형_대분류)
  //   return k.사고유형_대분류
  // });
  //대분류
  let c1 = tdata.map((k) => k.사고유형_대분류);
  c1 = [...new Set(c1)];

  console.log("c1=", c1); // 모든~

  //대분류 선택
  const [sel1, setSel1] = useState();

  //중분류
  const [c2, setC2] = useState();

  //중분류 선택
  const [sel2, setSel2] = useState();

  const [divTag, setDivTag] = useState();

  // useEffect : 
  useEffect(() => {
    if (!sel1) return;

    let temp = tdata
    .filter((item) => item.사고유형_대분류 === sel1)
    .map((item) => item.사고유형_중분류) ;
    console.log("temp=", temp);


    setC2(temp);
    setSel2();
    setDivTag();
  }, [sel1], [sel2]);

  useEffect(() => {
    if (!sel2) return;
    console.log("sel2", sel1, sel2);

    let temp = tdata.filter((item) =>
      item.사고유형_대분류 === sel1 &&
      item.사고유형_중분류 === sel2)

    // 결과가 Object
    temp = temp[0];
  //   //object 전체 순회
  //   //  temp = Object.keys(temp).map((item, idx) => 
  //   //     // [item, temp[item]]
  //   //     <div>{item} : {temp[item]}</div>
  //   //  );

    let k = Object.keys(temp).filter((item) =>
      (item !== '사고유형_대분류' && item !== '사고유형_중분류')
    )

    temp = k.map((item, idx) =>
    <div key={item + idx}>{item} : {temp[item]}</div>
  )
    setDivTag(temp);
    console.log("temp=",temp,"k=", k)


  }, [sel2]);

  return (
    <main className="container">
      <article>
        <Hh1 title='유형별 교통사고' />
        <TaccidentNav title='교통사고_대분류' c={c1} sel={sel1} setSel={setSel1} />
        {c2 && <TaccidentNav title='교통사고_중분류' c={c2} sel={sel2} setSel={setSel2} />}
        <div className="grid">
          {divTag}
        </div>
      </article>
    </main>
  )
}

export default Taccident;