module.exports = {
  name: 'ui-kit-showcase',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui-kit-showcase',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
