require 'sinatra'
require 'json'

get '/' do
	haml :index
end

get '/library.json' do

end
