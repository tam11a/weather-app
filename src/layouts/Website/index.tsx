import React from "react";

const WebsiteHeader = React.lazy(() => import("./Header"));
const WebsiteFooter = React.lazy(() => import("./Footer"));

import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const WebsiteLayout: React.FC = () => {
	return (
		<Layout.Content className="md:container mx-auto max-w-lg h-screen flex flex-col p-2">
			<div className="grow flex max-h-full flex-col shadow-lg shadow-[#0a0a0a] p-2">
				<WebsiteHeader />
				<div className="grow">
					<Outlet />
				</div>
				<WebsiteFooter />
			</div>
		</Layout.Content>
	);
};

export default WebsiteLayout;
