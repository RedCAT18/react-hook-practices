const useClick = onClick => {
  if (typeof onClick !== 'function') return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      //componentDidMount
      element.current.addEventListener('click', onClick);
    }
    return () => {
      //componentWillUnMount
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []); //no dependencies
  return element;
};
