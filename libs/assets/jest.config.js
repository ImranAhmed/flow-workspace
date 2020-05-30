module.exports = {
  name: 'assets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/assets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
