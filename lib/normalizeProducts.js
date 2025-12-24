export function normalizeProduct(input) {
  if (!input || typeof input !== "object") {
    return {
      name: "",
      price_pln: 0,
      status: "available",
      category: "",
      coverImageUrl: "",
      images: [],
      description: "",
    };
  }

  const name = typeof input.name === "string" ? input.name : "";
  const priceRaw = input.price_pln ?? input.price;
  const price_pln = Number.isFinite(priceRaw) ? priceRaw : Number(priceRaw) || 0;
  const status = typeof input.status === "string" ? input.status : "available";
  const category = typeof input.category === "string" ? input.category : "";
  const coverImageUrl =
    typeof input.coverImageUrl === "string" ? input.coverImageUrl : "";
  const images = Array.isArray(input.images)
    ? input.images.filter((url) => typeof url === "string")
    : [];
  const description =
    typeof input.description === "string" ? input.description : "";

  return {
    name,
    price_pln,
    status,
    category,
    coverImageUrl,
    images,
    description,
  };
}

export function normalizeProducts(inputs) {
  if (!Array.isArray(inputs)) {
    return [];
  }
  return inputs.map(normalizeProduct);
}
