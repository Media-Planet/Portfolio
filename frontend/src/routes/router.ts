import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import WebDev from "../pages/services/webDevelopment/webDev";
import BoardG from "../pages/services/boardGames/borderG";
import DigitalMarketing from "../pages/services/digitalMarketing/digitalMarketing";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { path: '/', Component: Home, },
            { path: 'about', Component: About },
            {
                path: "services",
                children: [
                    { index: true, path: 'webdev', Component: WebDev },
                    { path: 'board-game', Component: BoardG },
                    { path: 'digital-marketing', Component: DigitalMarketing },
                ]
            }
        ]
    }
]);