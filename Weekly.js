import React, { useState } from "react";

const mockWeeklyData = [
  { id: 1, name: "Mani", plasticDisposed: 12 }, // in kg
  { id: 2, name: "Karthik", plasticDisposed: 15 },
  { id: 3, name: "Teja", plasticDisposed: 8 },
  { id: 4, name: "Prasad", plasticDisposed: 10 },
  { id: 5, name: "Ramcharan", plasticDisposed: 20 },
];

const WeeklyDispose = () => {
  const [users, setUsers] = useState(mockWeeklyData);

  // Calculate CO2 emissions saved
  const calculateCO2Saved = (plasticDisposed) => (plasticDisposed * 2.9).toFixed(2);

  // Get the top user
  const topUser = [...users].sort((a, b) => b.plasticDisposed - a.plasticDisposed)[0];

  return (
    <div className="weekly-dispose-container">
      <h1 className="weekly-dispose-title">Weekly Plastic Disposal Report</h1>
      <p className="environment-message">
        Every 1kg of recycled plastic prevents 2.9kg of CO<sub>2</sub> emissions.
        Thank you for contributing to a cleaner planet!
      </p>

      {/* Congratulate the top user */}
      <div className="top-user">
        <h2>🌟 Congratulations, {topUser.name} is GameChanger! 🌟</h2>
        <p>
          You have disposed of {topUser.plasticDisposed} kg of plastic this week,
          saving {calculateCO2Saved(topUser.plasticDisposed)} kg of CO<sub>2</sub> emissions!
        </p>
      </div>

      {/* Weekly Leaderboard */}
      <table className="weekly-dispose-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Plastic Disposed (kg)</th>
            <th>CO<sub>2</sub> emission prevented(kg)</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => b.plasticDisposed - a.plasticDisposed)
            .map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.plasticDisposed}</td>
                <td>{calculateCO2Saved(user.plasticDisposed)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyDispose;
