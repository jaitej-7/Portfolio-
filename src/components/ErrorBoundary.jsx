import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Canvas Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="absolute inset-0 flex items-center justify-center text-zinc-400">3D Experience Unavailable</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
