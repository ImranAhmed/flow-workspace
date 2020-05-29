module.exports = {
  name: 'swap-clear',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/swap-clear',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
