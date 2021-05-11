import { createContext, useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_year
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            } 
            links {
                mission_patch_small
                article_link
                wikipedia
                video_link
            }
        }
    }
`;

export const LaunchesContext = createContext(null);

const LaunchesContextProvider = ({ children }) => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    return (
        <LaunchesContext.Provider value={{ loading, error, data }}>
            {children}
        </LaunchesContext.Provider>
    );
};

export default LaunchesContextProvider;
