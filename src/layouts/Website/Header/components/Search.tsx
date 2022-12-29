import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

const Search: React.FC = () => {
	const navigate = useNavigate();

	const onSearch = (value: string) =>
		navigate(`/search?${value ? `q=${value}` : ""}`);
	return (
		<>
			<Input.Search
				onSearch={onSearch}
				size={"large"}
				allowClear
			/>
		</>
	);
};

export default Search;
