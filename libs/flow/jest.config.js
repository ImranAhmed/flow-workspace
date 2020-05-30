module.exports = {
  name: 'flow',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/flow',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
