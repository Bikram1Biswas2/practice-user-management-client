

const UsersTable = ({user,idx}) => {
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
        
          <tbody className="text-start">
            {/* row 1 */}
            <tr>
              <th>{idx+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default UsersTable;