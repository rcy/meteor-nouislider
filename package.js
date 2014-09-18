Package.describe({
  summary: "noUiSlider is a lightweight jQuery range slider plugin",
  version: "7.0.7",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles(['lib/jquery.nouislider.all.js',
                'lib/jquery.nouislider.css',
                'lib/jquery.nouislider.pips.css'], 'client');
});
