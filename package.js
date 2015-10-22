Package.describe({
  summary: 'Provides the 3 of 9 Barcode font.',
  version: '3.1.0',
  name: 'clinical:barcode',
  git: 'https://github.com/clinical-meteor/clinical-barcode'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fonts/3OF9_NEW.TTF', 'client');
  api.addFiles('fonts-barcode.css', 'client');
});
