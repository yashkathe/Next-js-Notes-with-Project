import Link from 'next/link'

import Header from "@/components/header";

export default function Home() {
	// console.log("hello");
	return (
		<main>
            <Header/>
			<p> Let&apos;s get started! </p>
            <p><a href="/about">About Us</a></p>
		</main>
	);
}