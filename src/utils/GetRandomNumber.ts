export const getRandomNumber = (min: number, max: number): number  => {
  const random = Math.random();
  const scaledRandom = random * (max - min);

  console.log(scaledRandom + min)
  return  scaledRandom + min;
}
