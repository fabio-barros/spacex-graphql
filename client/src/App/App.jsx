import { Col, Container, Row } from "react-bootstrap";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import LaunchesContextProvider from "../contexts/LaunchesContext";
import Launches from "../components/Launches";

const client = new ApolloClient({
    uri: process.env.REACT_APP_HEROKU_SERVER,
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <LaunchesContextProvider>
                    <Launches/>
            </LaunchesContextProvider>
        </ApolloProvider>
    );
};

export default App;
