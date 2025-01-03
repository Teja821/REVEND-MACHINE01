import React, { useState } from 'react';

const ReportIssuePage = () => {
  const [issueDetails, setIssueDetails] = useState({
    name: '',
    email: '',
    issue: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setIssueDetails({
      ...issueDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Mock API request for reporting the issue
    try {
      // You would replace this with an actual API request to your backend
      // e.g., await fetch('/api/report-issue', { method: 'POST', body: JSON.stringify(issueDetails) });

      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('Your issue has been reported successfully!');
        
        // Clear form fields after successful submission
        setIssueDetails({
          name: '',
          email: '',
          issue: '',
        });
      }, 1000);
    } catch (error) {
      setLoading(false);
      setErrorMessage('Failed to report the issue. Please try again.');
    }
  };

  return (
    <div className="report-issue-page">
      <h1>Report an Issue</h1>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={issueDetails.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={issueDetails.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="issue">Issue Details:</label>
          <textarea
            id="issue"
            name="issue"
            value={issueDetails.issue}
            onChange={handleChange}
            placeholder="Describe the issue"
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Issue'}
        </button>
      </form>
    </div>
  );
};

export default ReportIssuePage;

       