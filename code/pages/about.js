import React from "react";
import Homecontent from "@/components/HomeContent/HomeContent";
import Head from "next/head";
const about = () => {
	return (
		<div>
			{" "}
			<Head>
				{" "}
				<title>About</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Thanh Minh" />
			</Head>
			<Homecontent
				heading={"About"}
				message={"The team 9 want to introduce the digital solutions"}
				backgroundimg={"default-img4"}
			/>
		</div>
	);
};

export default about;
