// Guardar y Remover de LocalStorage Favoritos
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

// Verificar si hay pokemons en Favoritos
const existInFavorites = (id: number): boolean => {
	// validar que no existe localStorage del lado del servidor "Importante"
	if (typeof window === "undefined") return false;

	const favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	// Regresamos el boolean en caso de que el id exista en favoritos
	return favorites.includes(id);
};

// Traer los pokemons de Favoritos
const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	toggleFavorites,
	existInFavorites,
	pokemons,
};
