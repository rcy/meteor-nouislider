Package.describe({
  summary: "noUiSlider is a lightweight jQuery range slider plugin",
  version: "7.0.7",
  git: "https://github.com/rcy/meteor-nouislider"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('jquery', 'client');
  api.addFiles(['lib/jquery.nouislider.all.js',
                'lib/jquery.nouislider.css',
                'lib/jquery.nouislider.pips.css'], 'client');
});
