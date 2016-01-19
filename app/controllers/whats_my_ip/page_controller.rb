class WhatsMyIp::PageController < ApplicationController
	def index
		@title = "what\'s My IP Address?"
		@ip = request.remote_ip
		@request = request
	end
end
