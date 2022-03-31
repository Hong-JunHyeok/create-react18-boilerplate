import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3 className="suspense_block warn">컴포넌트 렌더링 실패</h3>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
