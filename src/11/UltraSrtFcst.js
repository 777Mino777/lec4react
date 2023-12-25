import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import getcode from "./getcode.json"
import FcstTable from "./FcstTable";

const UltraSrtFcst = () => {
    const [items, setItems] = useState();
    const [trs, setTrs] = useState();
    const [myItem, setMyItem] = useState();

    // 카테고리 -> option
    console.log(getcode)

    const ops = getcode
        .filter((item) => { return item['예보구분'] == '초단기예보' })
        .map((item) => <option value={item['항목값']} key={item['항목값']}>{item['항목명']}({item['항목값']}){item['단위']}</option>)
    //  const ops = getcode.filter((item) =>  
    //     item["예보구분"] == "초단기예보"
    //  ) # 이하동문

    console.log("ops", ops);

    // select 값
    const sel = useRef();

    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt
    const area = useParams().area
    const x = useParams().x
    const y = useParams().y

    // 이벤트처리
    const handleSelect = () => {
        if (items === undefined) return;
        // console.log('handleSelect', sel.current.value)
        let temp = items
            .filter((i) => i['category'] === sel.current.value)

        let tempcd = getcode
            .filter((code) =>
                code['예보구분'] == '초단기예보' &&
                code['항목값'] == sel.current.value)[0]

        let myTemp = {
            '항목명': '',
            '예측시간': '',
            '항목값': '',
            '단위': ''
        }
        let tempdata = temp.map((i) => [tempcd['항목명'],
                                        i['fcstTime'],
                                        i['fcstValue'],
                                        tempcd['단위'],
                                        ])

        console.log("tempdata", tempdata)
        myTemp['항목명'] = tempcd['']
        console.log("temp", temp)
        console.log("tempcd", tempcd)
        console.log("myTemp", myTemp)
        setMyItem(tempdata);


        // .map((i, idx) =>
        //     <tr key={i['tr' + idx]}>
        //         <td>{i['category']}</td>
        //         <td>{i['fcstTime']}</td>
        //         <td>{i['fcstValue']}</td>
        //     </tr>
        // )
        setTrs(temp)
        console.log("handleSelect", temp)
    }

    // 컴포넌트 생성시
    useEffect(() => {
        const apikey = 'Jct%2BSGdRrcValREd3CgP6BrxV1sAZwfao0z0NyyvO0Z6AVsQLbgSBXcoRO6dGRl8pWW9UjylYn2KV4CillVKqg%3D%3D'
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?'
        url = url + `servicekey=${apikey}`;
        url = url + `&numOfRows=60&pageNo=1`;
        url = url + `&base_date=${dt}&base_time=0630`;
        url = url + `&nx=${x}&ny=${y}&dataType=json`;

        // console.log("url", url)

        fetch(url)
            .then(resp => resp.json())
            .then(data => setItems(data.response.body.items.item))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log(trs);
        console.log("myItem", console.log(myItem))
    }, [trs, items]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className='bg-yellow-100 col-span-1 md:col-span-2 font-bold text-xl'>
                <div>
                    초단기예보 : {area} ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
                </div>
                <div>
                    <select ref={sel} id='sel' name='sel' onChange={handleSelect}>
                        <option value=''>항목선택</option>
                        {ops}
                    </select>
                </div>
                <div className="w-full md:col-span-2">
                    <FcstTable trItem = {myItem}/>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>항목명</th>
                                <th>예측시간</th>
                                <th>항목값</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trs}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    )
}

export default UltraSrtFcst
