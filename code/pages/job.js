import React from "react";
import Homecontent from "@/components/HomeContent/HomeContent";
import Head from "next/head";
import Form from "@/components/Form/Form";
const job = () => {
	return (
		<div>
			{" "}
			<Head>
				{" "}
				<title>Job</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Thanh Minh" />
			</Head>
			<Homecontent
				heading={"Job"}
				message={"Where job in Vung Tau city can be found easily"}
				backgroundimg={"default-img2"}
			/>
			<Form />
		</div>
	);
};

export default job;
