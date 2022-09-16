
const DisplayEntries = (props) => {
    return (
        <table>
            <thead>
            {props.parentEntries.map((entry) => {
                return (
                <tr>
                    <th>
                        {entry.Name}
                    </th>
                    <div>
                        <tbody>
                            <tr>
                                <td>{entry.Post}</td>
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