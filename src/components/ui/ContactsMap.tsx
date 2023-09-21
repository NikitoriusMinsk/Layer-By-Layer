"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import s from "./Contacts.module.css";
import { Text, Button } from "./shared";
import { useState, useCallback } from "react";
import SocialButtons from "./shared/SocialButtons";
import { useTranslation } from "next-i18next";

export const Contacts = ({}) => {
	const containerStyle = {
		width: "400px",
		height: "400px",
	};

	const center = {
		lat: -3.745,
		lng: -38.523,
	};
	const { t } = useTranslation("common");
	return (
		<div className="w-full">
			<Text
				variant="h1"
				className="!text-accent-0"
			>
				{t("Contact us")}
			</Text>
			<p className="text-p text-2xl mt-4">
				{t(
					"We will be happy to answer any questions or proposals for cooperation"
				)}
			</p>
			<div className={s.root}>
				<Map />
				<Button className={s.openOnGoogle}>{t("Open on Google")}</Button>
				<div className={s.socialButtons}>
					<SocialButtons />
				</div>
				<div className={s.contactBlock}>
					<div className={s.contacts}>
						<div>
							<p className="mb-4 text-primary font-semibold">
								{t("Working hours")}
							</p>
							<p>{t("Monday-Friday")}</p>
							<p>{t("9am - 5pm")}</p>
							<p>{t("Weekends")}</p>
							<p>{t("Closed")}</p>
						</div>
						<div>
							<p className="mb-4 text-primary mt-4 font-semibold">
								{t("Address")}
							</p>
							<p>Grzybowska 2/8</p>
							<p>{t("Warszawa")}</p>
						</div>
						<div>
							<p className="mb-4 text-primary mt-4 font-semibold">
								{t("Support")}
							</p>
							<p>howchange@gmail.com</p>
							<p>+48 999 999 999</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function Map() {
	const containerStyle = {
		width: "100%",
		height: "600px",
	};

	const center = {
		lat: 52.2305721,
		lng: 21.0099381,
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCVoXDMqKRW7_9QbJgK7Y3srlvetZOlsFg",
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map: any) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={13}
			onUnmount={onUnmount}
			options={{
				mapId: "b0eeddb430d287d6",
				disableDefaultUI: true, // disable default map UI
				draggable: true, // make map draggable
				keyboardShortcuts: false, // disable keyboard shortcuts
				scaleControl: true, // allow scale controle
				scrollwheel: true, // allow scroll wheel
			}}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<Marker
				position={{
					lat: 52.2305721,
					lng: 21.0099381,
				}}
			/>
		</GoogleMap>
	) : (
		<></>
	);
}

export default Contacts;
