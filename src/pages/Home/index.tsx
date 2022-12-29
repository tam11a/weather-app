import React from "react";
import { Button, Image, Typography } from "antd";
import { TiWeatherSnow } from "react-icons/ti";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-evenly h-full">
			<span className="flex flex-col items-center justify-center">
				<Image
					src="/favicon.svg"
					preview={false}
					draggable={false}
					className={"select-none pointer-events-none w-full max-w-xs pb-3"}
				/>
				<Typography.Title level={2}>Weatheripidia</Typography.Title>
				<Typography.Text>
					Find Weather Information for Your City
				</Typography.Text>
			</span>
			<Link to={"/search"}>
				<Button
					type="primary"
					icon={<TiWeatherSnow className="mr-2" />}
					className={"flex items-center justify-between"}
				>
					Search
				</Button>
			</Link>
		</div>
	);
};

export default Home;
