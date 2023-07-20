import { useState } from "react";

const useOnChangeFilter = () => {
  const [filter, setFilter] = useState({
    owner: "",
    repo: "",
  });

  const onChangeFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return { filter, onChangeFilter };
};

export default useOnChangeFilter;
