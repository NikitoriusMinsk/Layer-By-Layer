import React, { useCallback } from "react";
import { useTranslation } from "next-i18next";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styles from "@styles/components/blocks/ContactMap.module.scss";
import {
	FaTelegram,
	FaFacebook,
	FaWhatsapp,
	FaInstagram,
	FaAngleRight,
} from "react-icons/fa";
import Link from "next/link";

const center = {
	lat: 53.90086499206687,
	lng: 27.54199778042135,
};

const containerStyle = {
	width: "100%",
	height: "600px",
};

const ContactMap: React.FC = () => {
	const { t } = useTranslation("common");
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCZwd_3EysG8mU3qcaNcvwd1yJZ69sIviY",
	});

	if (!isLoaded) return <></>;

	return (
		<div
			className={styles.container}
			id="order"
		>
			<div className={styles.headings}>
				<h2>{t("map.heading")}</h2>
				<h3>{t("map.subheading")}</h3>
			</div>

			<div className={styles.map}>
				<button className={styles.openMaps}>{t("map.openMaps")}</button>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={13}
					options={{
						mapId: "b0eeddb430d287d6",
						disableDefaultUI: true, // disable default map UI
						draggable: true, // make map draggable
						keyboardShortcuts: false, // disable keyboard shortcuts
						scaleControl: true, // allow scale controls
						scrollwheel: true, // allow scroll wheel
					}}
				>
					<Marker position={center} />
				</GoogleMap>
				<div className={styles.overlay}>
					<div className={`${styles.socials}`}>
						<Link
							href="https://telegram.com"
							className={styles.button}
						>
							<FaTelegram className={styles.image} />
							<div className={styles.info}>
								<span>Telegram</span>
								<span>@telegram</span>
							</div>
							<FaAngleRight className={styles.arrow} />
						</Link>
						<Link
							href="https://whatsapp.com"
							className={styles.button}
						>
							<FaWhatsapp className={styles.image} />
							<div className={styles.info}>
								<span>WhatsApp</span>
								<span>@whatsapp</span>
							</div>
							<FaAngleRight className={styles.arrow} />
						</Link>
						<Link
							href="https://facebook.com"
							className={styles.button}
						>
							<FaFacebook className={styles.image} />
							<div className={styles.info}>
								<span>Messenger</span>
								<span>@facebook</span>
							</div>
							<FaAngleRight className={styles.arrow} />
						</Link>
						<Link
							href="https://instagram.com"
							className={styles.button}
						>
							<FaInstagram className={styles.image} />
							<div className={styles.info}>
								<span>Instagram</span>
								<span>@instagram</span>
							</div>
							<FaAngleRight className={styles.arrow} />
						</Link>
					</div>
					<div className={`${styles.details}`}>
						<div>
							<div>
								<h3>{t("map.working_hours.heading")}</h3>
								<p>{t("map.working_hours.weekdays.days")}</p>
								<p>{t("map.working_hours.weekdays.time")}</p>
								<p>{t("map.working_hours.weekends.days")}</p>
								<p>{t("map.working_hours.weekends.time")}</p>
							</div>
							<div>
								<h3>{t("map.address.heading")}</h3>
								<p>{t("map.address.line1")}</p>
								<p>{t("map.address.line2")}</p>
							</div>
							<div>
								<h3>{t("map.support.heading")}</h3>
								<p>{t("map.support.email")}</p>
								<p>{t("map.support.phone")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMap;
