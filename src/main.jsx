import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error in application:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", color: "#c00", maxWidth: "800px", margin: "40px auto", background: "#fff5f5", border: "1px solid #fed7d7", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px", color: "#9b2c2c" }}>Application Error Detected</h2>
          <p style={{ fontWeight: "bold", marginBottom: "8px", color: "#2d3748" }}>{this.state.error?.toString()}</p>
          <pre style={{ background: "#2d3748", color: "#f7fafc", padding: "16px", borderRadius: "6px", overflowX: "auto", fontSize: "12px" }}>
            {this.state.errorInfo?.componentStack || this.state.error?.stack}
          </pre>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{ marginTop: "16px", padding: "8px 16px", background: "#FF385C", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "600" }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

