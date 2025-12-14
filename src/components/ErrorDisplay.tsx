interface ErrorDisplayProps {
  error: Error | null
  message?: string
}

const ErrorDisplay = ({ error, message }: ErrorDisplayProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-primary px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-theme-primary mb-2">
          {message || 'Error Loading Data'}
        </h2>
        {error && (
          <p className="text-theme-secondary text-sm mt-2">
            {error.message}
          </p>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-accent-primary hover:bg-accent-hover text-white rounded-lg font-semibold transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  )
}

export default ErrorDisplay

