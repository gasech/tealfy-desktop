const PageWrapper = ({ children }): JSX.Element => {
  return (
    <div className="animate-pulseonce text-white">
      {children}
    </div>
  )
}

export default PageWrapper;
