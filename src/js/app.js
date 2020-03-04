if (module.hot) {
  module.hot.accept();
}

import SwaggerUI from 'swagger-ui'

SwaggerUI({
  url: './specs/notificare-push-api-oas3.yaml',
  dom_id: '#swagger-ui',
  deepLinking: true,
  presets: [
    SwaggerUI.presets.apis,
  ],

})

