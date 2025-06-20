import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = ["May", "June", "July"];
const daysInMonth = [31, 30, 31];

// 0: No activity, 1: Low, 2: Medium, 3: High
// We'll use 3 (High) to draw the letters '0 TO 1', rest will be 0 (No activity)
function generateZeroToOnePattern() {
  // We'll use a 7-row (days) x 20-col grid for the pattern
  // Each letter is 5 columns wide, with 1 column space between
  // '0' (cols 0-4), ' ' (5), 'T' (6-10), 'O' (11-15), ' ' (16), '1' (17-19)
  const grid = Array.from({ length: 7 }, () => Array(20).fill(0));

  // Draw '0'
  for (let r = 1; r < 6; r++) (grid[r][0] = 3), (grid[r][4] = 3);
  for (let c = 1; c < 4; c++) (grid[1][c] = 3), (grid[5][c] = 3);

  // Draw 'T'
  for (let c = 6; c < 11; c++) grid[1][c] = 3;
  for (let r = 1; r < 6; r++) grid[r][8] = 3;

  // Draw 'O'
  for (let r = 1; r < 6; r++) (grid[r][11] = 3), (grid[r][15] = 3);
  for (let c = 12; c < 15; c++) (grid[1][c] = 3), (grid[5][c] = 3);

  // Draw '1'
  for (let r = 1; r < 6; r++) grid[r][18] = 3;
  grid[2][17] = 3;
  grid[1][18] = 3;
  grid[6][17] = 3;
  grid[6][18] = 3;

  // Flatten grid row by row
  return grid.flat();
}

const activityPattern = generateZeroToOnePattern();
const activityColors = [
  "bg-gray-200", // No activity
  "bg-blue-100", // Low
  "bg-blue-300", // Medium
  "bg-blue-500", // High (used for letters)
];

const ActivityHistory: React.FC = () => {
  return (
    <div className='p-4 rounded-lg bg-white shadow-lg mt-8'>
      <h2 className='text-lg font-bold text-gray-800 mb-2'>Activity History</h2>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex gap-4 text-xs font-semibold text-gray-600'>
          {months.map((month, i) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
      <div className='overflow-x-auto'>
        <div className='flex flex-col gap-0.5'>
          {Array.from({ length: 7 }).map((_, row) => (
            <div className='flex flex-row gap-0.5' key={row}>
              {Array.from({ length: 20 }).map((_, col) => {
                const idx = row * 20 + col;
                const level = activityPattern[idx];
                return (
                  <div
                    key={col}
                    className={`w-4 h-4 rounded ${activityColors[level]} border border-gray-100`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-4 mt-4 text-xs text-gray-600 items-center'>
        <div className='flex items-center gap-1'>
          <span className='w-3 h-3 rounded bg-gray-200 border border-gray-300 inline-block' />
          No activity
        </div>
        <div className='flex items-center gap-1'>
          <span className='w-3 h-3 rounded bg-blue-100 border border-gray-300 inline-block' />
          Low
        </div>
        <div className='flex items-center gap-1'>
          <span className='w-3 h-3 rounded bg-blue-300 border border-gray-300 inline-block' />
          Medium
        </div>
        <div className='flex items-center gap-1'>
          <span className='w-3 h-3 rounded bg-blue-500 border border-gray-300 inline-block' />
          High
        </div>
      </div>
    </div>
  );
};

export default ActivityHistory;
