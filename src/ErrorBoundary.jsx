import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render a custom fallback UI
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <p>Please try again later.</p>
                </div>
            );
        }

        // If no error, render the children
        return this.props.children;
    }
}

export default ErrorBoundary;
