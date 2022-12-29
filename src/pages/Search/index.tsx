import React from "react";
import Card from "./components/Card";
import { useSearchParams } from "react-router-dom";

const Search: React.FC = () => {
	const [searchParams] = useSearchParams();
	console.log(searchParams.get("q"));
	return (
		<>
			<Card />
		</>
	);
};

export default Search;
