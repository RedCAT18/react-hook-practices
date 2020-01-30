const useTabs = (initialTab, allTabs) => {
  console.log(!allTabs || Array.isArray(allTabs));
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
