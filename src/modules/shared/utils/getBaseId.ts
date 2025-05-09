export const getBaseId = (
  id: string,
  originalCapacity: string,
  originalColor: string,
) => {
  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '');

  const parts = id.split('-');

  const last = normalize(parts[parts.length - 1]);

  const originalColorNorm = normalize(originalColor);
  const originalCapacityNorm = normalize(originalCapacity);

  const filteredParts = [...parts];

  if (last === originalColorNorm) {
    filteredParts.pop();
  }

  if (
    filteredParts.length > 0 &&
    normalize(filteredParts[filteredParts.length - 1]) === originalCapacityNorm
  ) {
    filteredParts.pop();
  }

  return filteredParts.join('-');
};
