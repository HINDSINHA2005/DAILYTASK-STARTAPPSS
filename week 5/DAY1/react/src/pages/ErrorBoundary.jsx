import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops!</h1>
          <p>Something went wrong. Please try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
