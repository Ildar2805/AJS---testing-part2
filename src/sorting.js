export default function sorting(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
