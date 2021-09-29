export const getPlanetData = () => {
  return {
    Sun: {
      distanceFromSun: {
        km: 0,
        au: 0,
      },
      diameter: 1_390_000,
    },
    Mercury: {
      distanceFromSun: {
        km: 57_910_000,
        au: 0.387,
      },
      diameter: 4_879,
    },
    Venus: {
      distanceFromSun: {
        km: 108_200_000,
        au: 0.723,
      },
      diameter: 12_104,
    },
    Earth: {
      distanceFromSun: {
        km: 149_600_000,
        au: 1,
      },
      diameter: 12_756,
    },
  };
};
