import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container d-flex justify-content-center vh-100 flex-column">
          <h2 className="text-info">Something went wrong :(</h2>
          <hr />

          <details style={{ wordSpacing: 'pre-wrap' }} className="text-white">
            {this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
