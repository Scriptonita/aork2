#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import os
import webapp2
import jinja2


class MainHandler(webapp2.RequestHandler):
    def get(self, idTrack=""):

		idArtista = 0
		if idTrack == "":
			idTrack = 0

		template_values = {
			'idTrack' : idTrack,
			'idArtista' : idArtista,
        }

		template = jinja_environment.get_template('index.html')
		self.response.out.write(template.render(template_values))

class ArtistaHandler(webapp2.RequestHandler):
	def get(self, idArtista=""):

		idTrack = 0
		if idArtista == "":
			idArtista = 0

		template_values = {
			'idArtista' : idArtista,
			'idTrack' : idTrack,
		}

		template = jinja_environment.get_template('index.html')
		self.response.out.write(template.render(template_values))

class CheckHandler(webapp2.RequestHandler):
    def get(self):
        template_values = {}

        template = jinja_environment.get_template('check_aork2.html')
        self.response.out.write(template.render(template_values))


jinja_environment = jinja2.Environment(autoescape=False,
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/check/', CheckHandler),
	('/([^/]+)', MainHandler),
	('/artista/', ArtistaHandler),
	('/artista/([^/]+)', ArtistaHandler)],
    debug=True)
