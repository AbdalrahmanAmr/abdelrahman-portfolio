const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20 min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-theme-tertiary rounded-full"></div>
        <div className="w-16 h-16 border-4 border-accent-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
