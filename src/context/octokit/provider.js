import { useReducer } from "react";
import octokitReducer, { initialState } from "./reducers";
import { OctokitContext } from "./context";
import { action_types } from "./types";
import octokit from "@/utils/octokit";
import Swal from "sweetalert2";

export const OctokitProvider = ({ children }) => {
  const [state, dispatch] = useReducer(octokitReducer, initialState);

  const getCommits = async ({ owner, repo }) => {
    try {
      dispatch({
        type: action_types.SET_LOADING,
        loading: true,
      });
      const commits = await octokit.request(
        `GET /repos/${owner}/${repo}/commits`,
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      dispatch({
        type: action_types.GET_COMMITS,
        commits: commits.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: action_types.SET_LOADING,
        loading: false,
      });
      Swal.fire({
        icon: "error",
        position: "top-end",
        width: 350,
        title: "Something went wrong",
        html: "Could not access repository, make sure it exists"
      });
    }
  };

  return (
    <OctokitContext.Provider
      value={{
        ...state,
        getCommits,
      }}
    >
      {children}
    </OctokitContext.Provider>
  );
};
