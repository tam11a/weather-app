import { Suspense, lazy } from "react";

// 3rd Party Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { publicRoutes } from "./publicRoutes";

// Layouts
const WebsiteLayout = lazy(() => import("@layouts/Website"));

const BaseRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={"/"}
					element={<WebsiteLayout />}
				>
					{publicRoutes.map(({ path, Component }) => (
						<Route
							key={path}
							path={path}
							element={
								<Suspense fallback={<>Loading..</>}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default BaseRoutes;
