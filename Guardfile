
guard 'haml', :output => 'www', :input => 'public' do
  watch('public/index.html.haml')
end

guard 'jammit', :base_url => 'http://localhost:9292', :output_folder => 'www' do
  watch(/^public\/javascripts\/(.*)\.js/)
  watch(/^public\/stylesheets\/(.*)\.css/)
end
