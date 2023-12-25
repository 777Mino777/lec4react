
const FcstTable = ({ trItem }) => {
    console.log("FcstTable", trItem)
    const trs = trItem.map((item, idx) => 
        <tr key={'tr' + idx}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}{item[3]}</td>
        </tr>
    )
    return (
        <table>
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
        </table>
    )
}

export default FcstTable
