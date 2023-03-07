const PageWrapper = ({ children }): JSX.Element => {
  return (
    <div className="animate-pulseonce">
      {children}
    </div>
  )
}

export default PageWrapper;
