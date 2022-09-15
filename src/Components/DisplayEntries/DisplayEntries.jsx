
const DisplayEntries = (props) => {
    return (
        <table>
            <thead>
            {props.parentEntries.map((entry) => {
                return (
                <tr>
                    <th>
                        {entry.name}
                    </th>
                    <div>
                        <tbody>
                            <tr>
                                <td>{entry.post}</td>
                            </tr>
                        </tbody>
                    </div>
                    
                </tr>
                );
            })}
            </thead>
        </table>
    );
}
 
export default DisplayEntries;