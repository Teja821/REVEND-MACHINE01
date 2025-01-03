import React from "react";


const mockUsers = [
  { id: 1, name: "Alice", bottlesDeposited: 60 },
  { id: 2, name: "Bob", bottlesDeposited: 80 },
  { id: 3, name: "Charlie", bottlesDeposited: 114 },
  { id: 4, name: "Diana", bottlesDeposited: 180  },
  { id: 5, name: "Eve", bottlesDeposited: 90 },
];

const Leaderboard = () => {
  const sortedUsers = [...mockUsers].sort(
    (a, b) => b.bottlesDeposited - a.bottlesDeposited
  );

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Recycling Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Bottles Deposited</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.bottlesDeposited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
