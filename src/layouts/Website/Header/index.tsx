import React from "react";
const Search = React.lazy(() => import("./components/Search"));
import { Route, Routes } from "react-router-dom";

const WebsiteHeader: React.FC = () => {
	return (
		<React.Suspense>
			<Routes>
				<Route
					path="search"
					element={<Search />}
				/>
				<Route
					path="*"
					element={<></>}
				/>
			</Routes>
		</React.Suspense>
	);
};

export default WebsiteHeader;
