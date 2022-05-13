const toggleFavorites = (id: number) => {
  
	// console.log("toggleFavorites llamado");

	let favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	if (favorites.includes(id)) {
		// Filtrar de favorites todos los que sean distintos de id que me viene en el parámetro "Eliminar"
		favorites = favorites.filter((item) => item !== id);
	} else {
		// Agregar id a favorites "Insertar"
		favorites.push(id);
	}

	// Guardar en localStorage
	localStorage.setItem("favorites", JSON.stringify(favorites));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	toggleFavorites,
};
