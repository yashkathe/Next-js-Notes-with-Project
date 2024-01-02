import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import styles from "./main-header.module.css";

import logoImg from "@/assets/logo.png";

export default function MainHeader() {
	return (
		<>
            <MainHeaderBackground/>
			<header className={styles.header}>
				<Link className={styles.logo} href='/'>
					<Image src={logoImg} alt='page logo' priority />
					Next - JS
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href='/meals'>Browse</Link>
						</li>
						<li>
							<Link href='/community'>Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
