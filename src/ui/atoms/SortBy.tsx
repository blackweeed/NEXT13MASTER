"use client";

import { useRouter } from "next/navigation";

export const SortBy = () => {
	const router = useRouter();

	return (
		<select name="" id="">
			<option value="price:desc">Price desc</option>
			<option value="price:asc">Price asc</option>
		</select>
	);
};
