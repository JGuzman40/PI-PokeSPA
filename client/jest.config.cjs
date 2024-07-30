module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^react$': '<rootDir>/node_modules/react',
    '\\.scss$': 'identity-obj-proxy',
  },
};

