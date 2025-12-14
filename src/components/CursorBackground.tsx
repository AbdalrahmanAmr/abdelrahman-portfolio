const CursorBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light rounded-full blur-3xl opacity-10 dark:opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-hover rounded-full blur-3xl opacity-5 dark:opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-primary rounded-full blur-3xl opacity-8 dark:opacity-25 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}

export default CursorBackground
