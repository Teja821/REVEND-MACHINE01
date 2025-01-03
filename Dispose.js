import React, { useState } from "react";

let disposedBottleCount = 0; // Global variable to track bottle count

export const getBottleCount = () => disposedBottleCount; // Export the count getter

const DisposePage = () => {
  const [bottleCount, setBottleCount] = useState(1);
  const [totalDisposed, setTotalDisposed] = useState(disposedBottleCount);
  const [target, setTarget] = useState(25); // Target for the reward
  const [showRewards, setShowRewards] = useState(false);
  const [collectedCoupons, setCollectedCoupons] = useState([]);

  const coupons = [
    { id: 1, name: "10% Off Grocery Coupon", description: "Save on groceries!" },
    { id: 2, name: "Free Coffee Coupon", description: "Get a free coffee!" },
    { id: 3, name: "20% Off Clothing", description: "Shop for less!" },
    { id: 4, name: "Buy 1 Get 1 Free Pizza", description: "Enjoy a pizza treat!" },
  ];

  const handleDispose = () => {
    disposedBottleCount += bottleCount; // Update global count
    setTotalDisposed(disposedBottleCount); // Update local state

    if (disposedBottleCount >= target) {
      setShowRewards(true); // Show rewards section when target is reached
    }

    alert(`You have disposed of ${bottleCount} bottles!`);
    setBottleCount(1); // Reset count after disposal
  };

  const handleReset = () => {
    disposedBottleCount = 0;
    setTotalDisposed(0);
    setShowRewards(false); // Hide rewards section on reset
    alert("Bottle disposal count has been reset!");
  };

  const handleCollectCoupon = (coupon) => {
    if (!collectedCoupons.some((c) => c.id === coupon.id)) {
      setCollectedCoupons([...collectedCoupons, coupon]);
      alert(`You have collected the coupon: ${coupon.name}`);
    }
  };

  const progressPercentage = Math.min(
    (totalDisposed / target) * 100,
    100
  ).toFixed(2);

  return (
    <div className="dispose-page">
      <h1>Dispose of Plastic Bottles</h1>
      {!showRewards ? (
        <>
          <p>Choose the number of bottles you want to dispose of:</p>

          {/* Bottle Count Selector */}
          <div className="bottle-count">
            <button
              onClick={() => setBottleCount(bottleCount - 1)}
              disabled={bottleCount <= 1}
            >
              -
            </button>
            <span>{bottleCount}</span>
            <button onClick={() => setBottleCount(bottleCount + 1)}>+</button>
          </div>

          {/* Dispose Button */}
          <button onClick={handleDispose} className="dispose-button">
            Dispose
          </button>

          {/* Total Bottles Disposed */}
          <p>Total Bottles Disposed: {totalDisposed}</p>

          {/* Progress Bar */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p>{progressPercentage}% of the target achieved!</p>

          {/* Reset Button */}
          <button onClick={handleReset} className="reset-button">
            Reset Count
          </button>
        </>
      ) : (
        <div className="rewards-section">
          <h2>Congratulations! Select Your Reward</h2>
          <div className="coupons-container">
            {coupons.map((coupon) => (
              <div className="coupon-card" key={coupon.id}>
                <h3>{coupon.name}</h3>
                <p>{coupon.description}</p>
                <button
                  onClick={() => handleCollectCoupon(coupon)}
                  className="collect-button"
                >
                  Collect
                </button>
              </div>
            ))}
          </div>

          {/* Display Collected Coupons */}
          <div className="collected-coupons">
            <h2>Your Collected Coupons</h2>
            {collectedCoupons.length > 0 ? (
              collectedCoupons.map((coupon) => (
                <div className="collected-coupon-card" key={coupon.id}>
                  <h3>{coupon.name}</h3>
                  <p>{coupon.description}</p>
                </div>
              ))
            ) : (
              <p>No coupons collected yet.</p>
            )}
          </div>

          <button onClick={handleReset} className="reset-button">
            Reset and Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default DisposePage;


