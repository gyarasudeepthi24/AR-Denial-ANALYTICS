import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

useEffect(() => {
  fetch("http://localhost:8080/api/health")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Backend unavailable");
      }
      return response.json();
    })
    .then((data) => setBackendStatus(data.status))
    .catch(() => setBackendStatus("Offline"));
}, []);
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Claims Analysis",
    "Denial Management",
    "Reports",
    "Settings"
  ];

  const stats = [
    { title: "Total Claims", value: "12,450", change: "+12.5%" },
    { title: "Denied Claims", value: "2,340", change: "+8.2%" },
    { title: "Denial Rate", value: "18.8%", change: "-2.4%" },
    { title: "Revenue at Risk", value: "₹24.5L", change: "-5.6%" }
  ];

  const denialReasons = [
    { name: "Eligibility Issues", value: 85 },
    { name: "Missing Documents", value: 65 },
    { name: "Coding Errors", value: 50 },
    { name: "Authorization", value: 35 },
    { name: "Other Reasons", value: 25 }
  ];

  return (
    <div className="app-container">

      <aside className="sidebar">
        <h2 className="logo">AR Analytics</h2>
        <p className="subtitle">Healthcare Intelligence</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={activePage === item ? "menu active" : "menu"}
              onClick={() => setActivePage(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>AR Denial Analytics</p>
          <small>Version 1.0</small>
        </div>
      </aside>

      <main className="main-content">

        <header className="topbar">
          <div>
            <h2>{activePage}</h2>
            <p>Healthcare Revenue Cycle Management</p>
          </div>
          <div className="profile">
  Admin | Backend: {backendStatus}
</div>
        </header>

        <section className="welcome">
          <h1>Welcome to AR Analytics</h1>
          <p>Monitor claims, identify denial patterns and improve revenue recovery.</p>
        </section>

        {activePage === "Dashboard" ? (
          <>
            <section className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.title}>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                  <span>{stat.change} from previous period</span>
                </div>
              ))}
            </section>

            <section className="analysis-grid">

              <div className="panel">
                <h3>Denial Reasons Analysis</h3>
                <p className="panel-description">
                  Distribution of common claim denial reasons
                </p>

                {denialReasons.map((reason) => (
                  <div className="bar-item" key={reason.name}>
                    <div className="bar-label">
                      <span>{reason.name}</span>
                      <span>{reason.value}%</span>
                    </div>
                    <div className="bar-background">
                      <div
                        className="bar-fill"
                        style={{ width: `${reason.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="panel">
                <h3>Recent Claims</h3>
                <p className="panel-description">
                  Latest claim processing activity
                </p>

                <table>
                  <thead>
                    <tr>
                      <th>Claim ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CLM1001</td>
                      <td>₹15,000</td>
                      <td className="denied">Denied</td>
                    </tr>
                    <tr>
                      <td>CLM1002</td>
                      <td>₹22,000</td>
                      <td className="approved">Approved</td>
                    </tr>
                    <tr>
                      <td>CLM1003</td>
                      <td>₹8,500</td>
                      <td className="pending">Pending</td>
                    </tr>
                    <tr>
                      <td>CLM1004</td>
                      <td>₹18,000</td>
                      <td className="denied">Denied</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>
          </>
        ) : activePage === "Claims Analysis" ? (
          <section className="panel">
  <h3>Claims Analysis</h3>
  <p>Analyze healthcare claims and processing status.</p>

  <div className="stats-grid">
    <div className="stat-card">
      <h4>Total Claims</h4>
      <h2>12450</h2>
    </div>
    <div className="stat-card">
      <h4>Approved Claims</h4>
      <h2>10110</h2>
    </div>
    <div className="stat-card">
      <h4>Denied Claims</h4>
      <h2>2340</h2>
    </div>
  </div>

  <h3>Recent Claims</h3>
  <table>
    <thead>
      <tr>
        <th>Claim ID</th>
        <th>Patient</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>CLM001</td>
        <td>John Smith</td>
        <td>₹12,000</td>
        <td>Approved</td>
      </tr>
      <tr>
        <td>CLM002</td>
        <td>David</td>
        <td>₹8,500</td>
        <td>Denied</td>
      </tr>
      <tr>
        <td>CLM003</td>
        <td>Sarah</td>
        <td>₹15,000</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</section>
        ) : activePage === "Denial Management" ? (
          <section className="panel">
            <h3>Denial Management</h3>
            <p>Track and resolve denied healthcare claims.</p>
        
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Denials</h4>
                <h2>2,340</h2>
              </div>
              <div className="stat-card">
                <h4>Pending Appeals</h4>
                <h2>850</h2>
              </div>
              <div className="stat-card">
                <h4>Resolved</h4>
                <h2>1,490</h2>
              </div>
            </div>
        
            <h3>Denial Tracking</h3>
            <table>
              <thead>
                <tr>
                  <th>Claim ID</th>
                  <th>Patient</th>
                  <th>Reason</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CLM001</td>
                  <td>John Smith</td>
                  <td>Missing Documents</td>
                  <td>₹12,000</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>CLM002</td>
                  <td>David</td>
                  <td>Coding Error</td>
                  <td>₹8,500</td>
                  <td>Under Review</td>
                </tr>
                <tr>
                  <td>CLM003</td>
                  <td>Sarah</td>
                  <td>Eligibility Issue</td>
                  <td>₹15,000</td>
                  <td>Resolved</td>
                </tr>
              </tbody>
            </table>
          </section>
        
) : activePage === "Reports" ? (
  <section className="panel">
    <h3>Healthcare Reports</h3>
    <p>Monitor claim performance and revenue recovery.</p>

    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Revenue</h4>
        <h2>₹85.5L</h2>
      </div>

      <div className="stat-card">
        <h4>Approved Claims</h4>
        <h2>10,110</h2>
      </div>

      <div className="stat-card">
        <h4>Recovery Rate</h4>
        <h2>72%</h2>
      </div>
    </div>

    <h3>Monthly Performance</h3>

    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Total Claims</th>
          <th>Approved</th>
          <th>Denied</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>August</td>
          <td>3,200</td>
          <td>2,650</td>
          <td>550</td>
        </tr>
        <tr>
          <td>September</td>
          <td>4,100</td>
          <td>3,400</td>
          <td>700</td>
        </tr>
        <tr>
          <td>October</td>
          <td>5,150</td>
          <td>4,060</td>
          <td>1,090</td>
        </tr>
      </tbody>
    </table>
  </section>

) : activePage === "Settings" ? (
  <section className="panel">
    <h3>Application Settings</h3>
    <p>Manage your AR Analytics application preferences.</p>

    <div className="bar-item">
      <h4>Application Information</h4>
      <p>Application: AR Denial Analytics</p>
      <p>Version: 1.0</p>
      <p>Backend: Spring Boot</p>
      <p>Frontend: React</p>
      <p>Database: H2</p>
    </div>

    <div className="bar-item">
      <h4>System Status</h4>
      <p>Backend connection: {backendStatus}</p>
      <p>Application status: Active</p>
    </div>

    <div className="bar-item">
      <h4>User Information</h4>
      <p>Role: Administrator</p>
      <p>Access: Dashboard Management</p>
    </div>
  </section>

) : activePage === "Settings" ? (
  <section className="panel">
    <h3>Application Settings</h3>
    <p>Manage your AR Analytics application preferences.</p>

    <div className="bar-item">
      <h4>Application Information</h4>
      <p>Application: AR Denial Analytics</p>
      <p>Version: 1.0</p>
      <p>Backend: Spring Boot</p>
      <p>Frontend: React</p>
      <p>Database: H2</p>
    </div>

    <div className="bar-item">
      <h4>System Status</h4>
      <p>Backend connection: {backendStatus}</p>
      <p>Application status: Active</p>
    </div>

    <div className="bar-item">
      <h4>User Information</h4>
      <p>Role: Administrator</p>
      <p>Access: Dashboard Management</p>
    </div>
  </section>

) : activePage === "Settings" ? (
  <section className="panel">
    <h3>Application Settings</h3>
    <p>Manage your AR Analytics application preferences.</p>

    <div className="bar-item">
      <h4>Application Information</h4>
      <p>Application: AR Denial Analytics</p>
      <p>Version: 1.0</p>
      <p>Backend: Spring Boot</p>
      <p>Frontend: React</p>
      <p>Database: H2</p>
    </div>

    <div className="bar-item">
      <h4>System Status</h4>
      <p>Backend connection: {backendStatus}</p>
      <p>Application status: Active</p>
    </div>

    <div className="bar-item">
      <h4>User Information</h4>
      <p>Role: Administrator</p>
      <p>Access: Dashboard Management</p>
    </div>
  </section>

) : activePage === "Settings" ? (
  <section className="panel">
    <h3>Application Settings</h3>
    <p>Manage your AR Analytics application preferences.</p>

    <div className="bar-item">
      <h4>Application Information</h4>
      <p>Application: AR Denial Analytics</p>
      <p>Version: 1.0</p>
      <p>Backend: Spring Boot</p>
      <p>Frontend: React</p>
      <p>Database: H2</p>
    </div>

    <div className="bar-item">
      <h4>System Status</h4>
      <p>Backend connection: {backendStatus}</p>
      <p>Application status: Active</p>
    </div>

    <div className="bar-item">
      <h4>User Information</h4>
      <p>Role: Administrator</p>
      <p>Access: Dashboard Management</p>
    </div>
  </section>
) : (
  <section className="panel page-placeholder">
    <h3>{activePage}</h3>
    <p>This module is ready for further development.</p>
  </section>
)}






        <footer>
          AR Denial Analytics © 2026 | Healthcare Data Insights
        </footer>

      </main>
    </div>
  );
}

export default App;
