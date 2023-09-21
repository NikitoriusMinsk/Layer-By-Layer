import cn from "clsx";
import s from "./List.module.css";
import React, { useState } from "react";
import { Input } from "..";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

export default function List({ id, data, selected, setSelected, type }: any) {
	const [filteredList, setFilteredList] = useState(data);

	const filterBySearch = (value: any) => {
		// Access input value
		const query = value;
		// Create copy of item list
		var updatedList = [...data];
		// Include all elements which includes the search query
		updatedList = updatedList.filter((item) =>
			item[type].name.toLowerCase().includes(query.toLowerCase())
		);
		// Trigger render with updated values
		setFilteredList(updatedList);
	};

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	const variantsLogo = {
		left: {
			x: 0,
		},
		right: {
			x: 20,
		},
	};

	return (
		<div className={s.root}>
			<Input
				icon={<AiOutlineSearch />}
				id="search-box"
				placeholder="Type a currency or ticker"
				onChange={filterBySearch}
			/>
			<div id="item-list">
				<ol className={s.itemList}>
					{filteredList.map((item: any, index: any) => (
						<li
							key={index}
							className="relative"
							onClick={() => setSelected(index)}
						>
							<div className={cn("flex justify-between flex-row")}>
								{selected === index && (
									<motion.div
										layoutId={id}
										className={s.selected}
										style={{
											position: "absolute",
											top: "0",
											left: "0",
											width: "100%",
											height: "49px",
										}}
									></motion.div>
								)}
								<motion.div
									initial="hidden"
									variants={variants}
									className={s.selectBox}
								></motion.div>

								<motion.div
									variants={variantsLogo}
									className="flex flex-row gap-2 items-center"
								>
									<Image
										className="mr-2"
										width="25"
										height="25"
										src={
											"http://91.149.142.24:9000/exchange/" +
											item[type].icon
										}
										alt={item[type].symbol}
									/>
									{item[type].name}
								</motion.div>
								<div>{item[type].symbol}</div>
							</div>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
