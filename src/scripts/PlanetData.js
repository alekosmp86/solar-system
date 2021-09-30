export const getPlanetData = () => {
  return [
    {
      id: "0",
      name: "Sun",
      distanceFromSun: {
        km: 0,
        au: 0,
      },
      selfRotation: false,
      orbitAround: false,
      diameter: 200_000,
      textures: {
        map: "resources/textures/Sun/sun.png",
      },
    },
    {
      id: "1",
      name: "Mercury",
      distanceFromSun: {
        km: 57_910_000,
        au: 0.387,
      },
      orbitAround: true,
      orbitSpeed: 1 / 88,
      selfRotation: true,
      diameter: 4_879,
      textures: {
        map: "resources/textures/Mercury/colorMap.jpg",
      },
    },
    {
      id: "2",
      name: "Venus",
      distanceFromSun: {
        km: 108_200_000,
        au: 0.723,
      },
      orbitAround: true,
      orbitSpeed: 1 / 225,
      selfRotation: true,
      diameter: 12_104,
      textures: {
        map: "resources/textures/Venus/colorMap.png",
        normalMap: "resources/textures/Venus/normalMap.jpg",
      },
    },
    {
      id: "3",
      name: "Earth",
      distanceFromSun: {
        km: 149_600_000,
        au: 1,
      },
      orbitAround: true,
      orbitSpeed: 1 / 365,
      selfRotation: true,
      diameter: 12_756,
      textures: {
        map: "resources/textures/Earth/colorMap.jpg",
        normalMap: "resources/textures/Earth/normalMap.png",
      },
    },
    {
      id: "4",
      name: "Mars",
      distanceFromSun: {
        km: 227_940_000,
        au: 1.524,
      },
      orbitAround: true,
      orbitSpeed: 1 / 687,
      selfRotation: true,
      diameter: 6_805,
      textures: {
        map: "resources/textures/Mars/colorMap.png",
      },
    },
    {
      id: "5",
      name: "Jupiter",
      distanceFromSun: {
        km: 778_330_000,
        au: 5.203,
      },
      orbitAround: true,
      orbitSpeed: 1 / (11.86 * 365),
      selfRotation: true,
      diameter: 142_984,
      textures: {
        map: "resources/textures/Jupiter/colorMap.jpg",
      },
    },
    {
      id: "6",
      name: "Saturn",
      hasRing: true,
      distanceFromSun: {
        km: 1_424_600_000,
        au: 9.523,
      },
      orbitAround: true,
      orbitSpeed: 1 / (29.4 * 365),
      selfRotation: true,
      diameter: 120_536,
      textures: {
        map: "resources/textures/Saturn/colorMap.png",
        ringMap: "resources/textures/Saturn/ringsColorMap.jpg",
      },
    },
    {
      id: "7",
      name: "Uranus",
      distanceFromSun: {
        km: 2_873_550_000,
        au: 19.208,
      },
      orbitAround: true,
      orbitSpeed: 1 / (84.02 * 365),
      selfRotation: true,
      diameter: 51_118,
      textures: {
        map: "resources/textures/Uranus/colorMap.jpg",
      },
    },
  ];
};
