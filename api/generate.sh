#!/bin/bash

curl  -X GET \
  'http://localhost:13000/api/swagger:get?ns=collections' \
  --header 'Accept: application/json' \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoiYXBpLWNsaWVudCIsImlhdCI6MTc1MzcxMTA1NCwiZXhwIjozMzMxMTMxMTA1NH0.2e7wkfQRTZA26V1j7zoxtThuD9vLbzY2sTHbV2xs4TU' \
  -o api/swagger.json

npx react-query-swagger /tanstack /input:./api/swagger.json /output:./api/axios-client.ts /template:Axios /use-recommended-configuration

npm run lint