import { Col, Container, Row } from "react-bootstrap";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import LaunchesContextProvider from "../contexts/LaunchesContext";
import Launches from "../components/Launches";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
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
