Package.describe({
  summary: 'Provides the 3 of 9 Barcode font.',
  version: '3.0.1',
  name: 'clinical:barcode',
  git: 'https://github.com/clinical-meteor/clinical-barcode'
});

Package.on_use(function (api) {
  api.addAssets('fonts/3OF9_NEW.TTF', 'client');
  api.addAssets('fonts-barcode.css', 'client');
});
