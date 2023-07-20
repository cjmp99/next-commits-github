import { OctokitContext } from "@/context/octokit/context";
import { useContext } from "react";
import Swal from "sweetalert2";

const useOnSubmit = () => {
  const { getCommits } = useContext(OctokitContext);

  const onSubmit = ({ owner, repo }) => {
    if (owner === "") {
      Swal.fire({
        icon: "error",
        position: "top-end",
        width: 350,
        title: "Something went wrong",
        html: "You must provide the name of the owner of the repository",
      });
    } else if (repo === "") {
      Swal.fire({
        icon: "error",
        position: "top-end",
        width: 350,
        title: "Something went wrong",
        html: "You must provide the name of the repository.",
      });
    } else {
      getCommits({ owner, repo });
    }
  };

  return {
    onSubmit,
  };
};

export default useOnSubmit;
