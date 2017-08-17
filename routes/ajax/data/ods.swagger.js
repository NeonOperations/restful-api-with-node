let ods = {
  "swagger": "2.0",
  "info": {
    "version": "1.1",
    "title": "Metadata Tool API Specifications"
  },
  "host": "localhost:9090/neon-ods",
  "basePath": "/api",
  "tags": [
    {
      "name": "calibration"
    },
    {
      "name": "header"
    },
    {
      "name": "dataProduct"
    },
    {
      "name": "dataProducts"
    },
    {
      "name": "datatype"
    },
    {
      "name": "unit"
    },
    {
      "name": "download"
    },
    {
      "name": "lhdd"
    },
    {
      "name": "Upload"
    },
    {
      "name": "file"
    },
    {
      "name": "metadata"
    },
    {
      "name": "locationmetadata"
    },
    {
      "name": "location"
    },
    {
      "name": "locations"
    },
    {
      "name": "locationframework"
    },
    {
      "name": "message"
    },
    {
      "name": "messages"
    },
    {
      "name": "moab"
    },
    {
      "name": "moabjobs"
    },
    {
      "name": "moabjob"
    },
    {
      "name": "readout"
    },
    {
      "name": "readouts"
    },
    {
      "name": "sensormetadata"
    },
    {
      "name": "sensor"
    },
    {
      "name": "sensors"
    },
    {
      "name": "sensorstream"
    },
    {
      "name": "sensorstreams"
    },
    {
      "name": "type"
    },
    {
      "name": "types"
    },
    {
      "name": "manufacturers"
    },
    {
      "name": "model"
    },
    {
      "name": "ping"
    },
    {
      "name": "info"
    },
    {
      "name": "ecs"
    },
    {
      "name": "S3"
    },
    {
      "name": "env"
    },
    {
      "name": "environment"
    },
    {
      "name": "threshold"
    },
    {
      "name": "transition"
    },
    {
      "name": "transitions"
    },
    {
      "name": "neon-transition"
    },
    {
      "name": "TransitionJobs"
    },
    {
      "name": "TransitionJob"
    },
    {
      "name": "utility"
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {

    "/calibrations/{id}": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get a calibration with the given id",
        "operationId": "getCalibration",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Put Calibration",
        "description": "Put a calibration with the given id",
        "operationId": "updateCalibration",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations/all": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get calibrations",
        "operationId": "getAllCalibrations",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations/query": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get calibrations",
        "operationId": "getStreamCalibrations",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "msName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations": {
      "post": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Post Calibration",
        "description": "Post a calibration with the given id",
        "operationId": "createCalibration",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/dataproducts/byDataProductNumber": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by dpLevel and term",
        "description": "Find dataProduct by dpLevel and term",
        "operationId": "getDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dataProductNumber",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/{id}": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get a single dataProduct",
        "description": "Get a single dataProduct",
        "operationId": "getDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Updates a single dataProduct",
        "description": "Updates a single dataProduct.",
        "operationId": "updateDataProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "400": {
            "description": "If theres an issue with the dataProduct data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "delete": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Deletes a single dataProduct.",
        "description": "Deletes a single dataProduct.  If children dataProducts exist, they should be deleted first or this call will fail.",
        "operationId": "deleteDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_1",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/dataproducts/bySite": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by site",
        "description": "Find dataProduct by site",
        "operationId": "getDataProductBySite",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/termNames": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get term names",
        "description": "Get term names",
        "operationId": "getTermNames",
        "produces": [
          "text/plain"
        ],
        "parameters": [
          {
            "name": "productNum",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "List all dataProducts by dpLevel",
        "description": "List all dataProducts by dpLevel",
        "operationId": "getDataProductsByLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byProductAndLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get dataProducts by productNum and dplevel",
        "description": "Get dataProducts by productNum and dplevel",
        "operationId": "getDataProductsByProductAndLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byProductTermLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by dpLevel and term",
        "description": "Find dataProduct by dpLevel and term",
        "operationId": "getDataProductByProductTermLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "productNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byLocationId": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by location",
        "description": "Find dataProduct by location",
        "operationId": "getDataProductByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/all": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "List all dataProducts",
        "description": "List all dataProducts",
        "operationId": "getAllDataProducts",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts": {
      "post": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Creates a single dataProduct",
        "description": "Creates a single dataProduct.  The dataProduct id is ignored.",
        "operationId": "createDataProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the dataProduct data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_1",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/datatypes": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get DataTypes",
        "description": "Get DataTypes",
        "operationId": "getAllDataTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post a Unit",
        "description": "Post a unit",
        "operationId": "createDataType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_2",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/datatypes/{id}": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get DataType",
        "description": "Get a datatype with the given id",
        "operationId": "getDataType",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Put DataType",
        "description": "Put a datatype with the given id",
        "operationId": "updateDataType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "datatype",
          "unit"
        ],
        "summary": "Delete datatype",
        "description": "Delete a single datatype",
        "operationId": "deleteDataType",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_2",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/download/lhdd": {
      "get": {
        "tags": [
          "download",
          "lhdd"
        ],
        "summary": "Download an XML file",
        "description": "Download an XML file",
        "operationId": "getFile",
        "produces": [
          "application/json",
          "application/xml"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          },
          "404": {
            "description": "Item not found."
          }
        }
      }
    },
    "/download": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_3",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/download/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_3",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/file/upload": {
      "post": {
        "tags": [
          "Upload",
          "file"
        ],
        "summary": "Upload an XML file",
        "description": "Upload an XML file",
        "operationId": "uploadFile",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "dest-path",
            "in": "formData",
            "required": true,
            "type": "string"
          },
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "file"
            }
          },
          "204": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          }
        }
      }
    },
    "/file": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_4",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/file/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_4",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhdd/downloadlhdd": {
      "post": {
        "tags": [
          "download",
          "lhdd"
        ],
        "summary": "Download an XML file",
        "description": "Download an XML file",
        "operationId": "getLHDDFile",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json",
          "application/xml"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SimpleObject"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          },
          "404": {
            "description": "Item not found."
          }
        }
      }
    },
    "/lhdd/{id}/ingest": {
      "post": {
        "operationId": "postIngestAction",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/IngestAction"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhdd/{id}/ingestexisting": {
      "post": {
        "operationId": "postIngestActionWithExistingFile",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/IngestAction"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhdd": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_5",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhdd/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_5",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhddxmlinjest/upload": {
      "post": {
        "operationId": "uploadThresholdData",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhddxmlinjest": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_6",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhddxmlinjest/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_6",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata/{id}": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET locationMetadata for the given locationmetadata id.",
        "description": "",
        "operationId": "getLocationMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id of metadata need to be updated",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          },
          "500": {
            "description": "Internal server error."
          },
          "405": {
            "description": "Location ID required."
          },
          "404": {
            "description": "Not found for the given location ID."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "put": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Put locationmetadata",
        "description": "put a single locationmetadata",
        "operationId": "updateLocationMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      },
      "delete": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Delete locationmetadata",
        "description": "Delete a single locationmetadata",
        "operationId": "deleteLocationMetadata",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_7",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET locationMetadata for the given location id.",
        "description": "",
        "operationId": "getLocationMetadataByLocationId",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "locationid",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      },
      "post": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Post locationmetadata",
        "description": "Post a single locationmetadata",
        "operationId": "createLocationMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_7",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata/query": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET all locationMetadata for the given site",
        "description": "",
        "operationId": "getSiteMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      }
    },
    "/locations/{id}/status/{status}": {
      "put": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "updateStatus",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/siteNames": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get site names",
        "description": "Get site names",
        "operationId": "getSiteNames",
        "produces": [
          "text/plain"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/query": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get locations by name",
        "description": "Get locations by names",
        "operationId": "getLocationsByQueryParams",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/all": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "List all locations",
        "description": "List all locations",
        "operationId": "getAllLocations",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "verbose",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/{id}": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get a single location",
        "description": "Get a single location",
        "operationId": "getLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "verbose",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Updates a single location",
        "description": "Updates a single location.  Parent and children locations are not updated.",
        "operationId": "updateLocation",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "400": {
            "description": "If theres an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "delete": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Deletes a single location.",
        "description": "Deletes a single location.  If children locations exist, they should be deleted first or this call will fail.",
        "operationId": "deleteLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_8",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locations": {
      "post": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Creates a single location",
        "description": "Creates a single location.  The location id is ignored.  Parent and children locations are not created.",
        "operationId": "createLocation",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_8",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locations/{id}/sensors": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Gets all locations and attached sensors.",
        "description": "Gets all locations and attached sensors.",
        "operationId": "getSensorsByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/{id}/dataProducts": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get attached data products at given location.",
        "description": "Get attached data products at given location.",
        "operationId": "getDataProductsByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/siteinfo": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "getLocationIdAndNames",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/loctypes": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "getLocationTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/locationframework": {
      "post": {
        "tags": [
          "location",
          "locationframework"
        ],
        "summary": "Creates a skeleton site.",
        "description": "Creates a skeleton site based on the booms per level and default levels.",
        "operationId": "createLocationFramework",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationFrameworkDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Location"
            }
          },
          "400": {
            "description": "If theres an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/meastransitioned": {
      "post": {
        "operationId": "postMeasTransitioned",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/MeasTransitionedDTO"
            }
          }
        ],
        "responses": {
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_9",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/meastransitioned/bySiteAndDate": {
      "get": {
        "operationId": "getMeasTransitionedURIBySiteAndDate",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "starttime",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "versionStarttime",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location."
          },
          "400": {
            "description": "Bad request."
          }
        }
      }
    },
    "/meastransitioned/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_9",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages/byStatusAndInterval": {
      "get": {
        "tags": [
          "message",
          "message"
        ],
        "summary": "list of messages",
        "description": "Gets a list of messages matching the given status and date range",
        "operationId": "getMessagesByStatusAndInterval",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "startTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "endTime",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/PdrMessageDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages/{id}": {
      "get": {
        "tags": [
          "message",
          "messages"
        ],
        "summary": "Get a single message",
        "description": "Get a single message",
        "operationId": "getMessage",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/PdrMessageDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_10",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_10",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/moabjobs/{id}": {
      "get": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Get a single moab job",
        "description": "Get a single moab job",
        "operationId": "getMoabJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Deletes a single Moab job.",
        "description": "Deletes a single Moab job.",
        "operationId": "deleteMoabJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_11",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/moabjobs/all": {
      "get": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "List all Moab jobs",
        "description": "List all Moab jobs",
        "operationId": "getAllMoabJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/moabjobs": {
      "post": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Submits a job to the Moab cluster",
        "description": "Not a generic Moab job submission endpoint.  Only creates EC pipeline transition jobs.",
        "operationId": "createMoabJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the job that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_11",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/{id}": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "Get a single readout stream",
        "description": "Get a single readout stream",
        "operationId": "getReadoutStream",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "readout",
          "readouts"
        ],
        "operationId": "updateReadoutStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_12",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/byNameAndInterval": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "list of readout streams",
        "description": "Gets a list of readout streams matching the given name and date range",
        "operationId": "getReadoutStreamsByNameAndInterval",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "startTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "endTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "getMessages",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "no"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/bySubName": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "list of measurement streams",
        "description": "Gets a list of measurement streams containing the given data product name",
        "operationId": "getMeasurementStreamsBySubName",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "subName",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts": {
      "post": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Creates a single readout stream record",
        "description": "Creates a single readout stream record.  The readoutStreamId is ignored.",
        "operationId": "createReadoutStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the readoutStream data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_12",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/values": {
      "post": {
        "tags": [
          "readout",
          "readouts"
        ],
        "operationId": "getReadoutValues",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/sensormetadata/{id}": {
      "get": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Get sensormetadata",
        "description": "Get a single sensormetadatum",
        "operationId": "getSensorMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not Found."
          }
        }
      },
      "put": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Put sensormetadata",
        "description": "Update a single sensormetadatum",
        "operationId": "updateSensorMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorMetadataDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not Found."
          }
        }
      },
      "delete": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Delete sensormetadata",
        "description": "Delete a single sensormetadata",
        "operationId": "deleteSensorMetadata",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_13",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensormetadata": {
      "get": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Get sensormetadata",
        "description": "Get sensormetadata of a sensor",
        "operationId": "getSensorMetadataBySensorId",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "sensorid",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Post sensormetadata",
        "description": "Post a single sensormetadata",
        "operationId": "createSensorMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorMetadataDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_13",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/{id}/status/{status}": {
      "put": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "operationId": "updateStatus",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/sensors/{id}": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get a single sensor",
        "description": "Get a single sensor",
        "operationId": "getSensor",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Update a sensor",
        "description": "Update a sensor.  Parent and children sensors are ignored.",
        "operationId": "updateSensor",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete sensor",
        "description": "Delete a single sensor",
        "operationId": "deleteSensor",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_14",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/{id}/sensorStreams": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Gets all sensor streams attached to given sensor.",
        "description": "Gets all sensor streams attached to given sensor.",
        "operationId": "getStreamsBySensor",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/all": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get all sensors",
        "description": "Get all sensors.  Note that this call is VERY expensive.",
        "operationId": "getAllSensors",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/bySiteAndDpNum": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get all sensors matching the given site and DpNum",
        "description": "Get all sensors matching the given site and DpNum",
        "operationId": "getSensorsBySiteAndDpNum",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors": {
      "post": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Create a sensor",
        "description": "Create a sensor.  Parent and children sensors are ignored.Location and Sensor type IDs will be attached, but those should already exist.This call will not create them.",
        "operationId": "createSensor",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Sensor"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_14",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensorstreams/{id}": {
      "get": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Get a single sensor stream",
        "description": "Get a single sensor stream",
        "operationId": "getSensorStream",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_15",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensorstreams": {
      "post": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Create a single sensor stream",
        "description": "Create a single sensor stream.  Use sensorTypeId to attach this sensor stream to a sensor type.",
        "operationId": "createSensorStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Update a single sensor stream",
        "description": "Update a single sensor stream.  Parent and children sensor streams are ignored.",
        "operationId": "updateSensorStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_15",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/{id}": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Get a sensor tempate",
        "description": "Get a sensor tempate",
        "operationId": "getSensorType",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Update a sensor type",
        "description": "Update a sensor type.  Children objects are not updated.",
        "operationId": "updateSensorType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete sensor type",
        "description": "Delete a single sensor type",
        "operationId": "deleteSensorType",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_16",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/all": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Get all sensor tempate",
        "description": "Get all sensor tempate.  Note that this can be a heavy call.",
        "operationId": "getAllSensorTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes": {
      "post": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Creates a sensor type",
        "description": "Creates a sensor type.  Included sensor streams are created.",
        "operationId": "createSensorType",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_16",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/manufacturers": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types",
          "manufacturers"
        ],
        "summary": "Get a unique list of manufacturers.",
        "description": "Get a unique list of manufacturers.",
        "operationId": "getUniqueManufacturers",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/models": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types",
          "manufacturers",
          "model"
        ],
        "summary": "Get a unique list of models based on the manufacturer.",
        "description": "Get a unique list of models based on the manufacturer.",
        "operationId": "getModels",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "manufacturer",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/{id}/status/{status}": {
      "put": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "operationId": "updateStatus",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/test/ping": {
      "get": {
        "tags": [
          "ping",
          "ping"
        ],
        "summary": "Get ping",
        "description": "Check if there is connection to service",
        "operationId": "doPing",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/maven": {
      "get": {
        "tags": [
          "info",
          "info"
        ],
        "summary": "Get version and dependencies information",
        "description": "Returns the version of the running code and all its dependencies",
        "operationId": "getMavenDependencies",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/ecs": {
      "get": {
        "tags": [
          "ecs",
          "S3"
        ],
        "summary": "Get aws client info and status",
        "description": "Returns information about the ECS datastore this service instance is pointed to",
        "operationId": "getEcsConnectionInfo",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/env": {
      "get": {
        "tags": [
          "env",
          "environment"
        ],
        "summary": "Get environment variables",
        "description": "Returns information about the environment of this service instance",
        "operationId": "getEnvirnomentInfo",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_17",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_17",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/{id}": {
      "get": {
        "tags": [
          "threshold",
          "threshold"
        ],
        "summary": "Get threshold",
        "description": "Get a single threshold",
        "operationId": "getThreshold",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_18",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/byLocationAndDataProduct": {
      "get": {
        "summary": "Get threshold(s) by given locationId, sensorTypeId, term and dpLevel.",
        "description": "",
        "operationId": "getThresholdsByTermAndLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpRev",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "includeParentLocation",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/getUniqueThreshold": {
      "get": {
        "summary": "Get threshold by given locationId, dpNum, termNum, dpLevel, dpRev, startDay and stopDay.",
        "description": "",
        "operationId": "getUniqueThreshold",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpRev",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/bySiteAndTermList": {
      "get": {
        "summary": "Get threshold by given site, termList, startDay and stopDay.",
        "description": "",
        "operationId": "GetThresholdBySiteAndDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termList",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/bySiteAndProductNumList": {
      "get": {
        "summary": "Get threshold by given site, productNum, startDay and stopDay.",
        "description": "",
        "operationId": "getThresholdBySiteAndProductNumList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "productNumList",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds": {
      "post": {
        "summary": "Creates a single threshold",
        "description": "",
        "operationId": "createThreshold",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "put": {
        "tags": [
          "threshold",
          "threshold"
        ],
        "summary": "Put threshold",
        "description": "Put a single threshold",
        "operationId": "updateThreshold",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_18",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/upload": {
      "post": {
        "operationId": "uploadThresholdData",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/transition/transitionList": {
      "get": {
        "tags": [
          "transition",
          "transitions"
        ],
        "summary": "Get a single transition",
        "description": "Get a single transition",
        "operationId": "getTransitionList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "version",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "release",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition/versionList": {
      "get": {
        "tags": [
          "transition",
          "transitions",
          "neon-transition"
        ],
        "summary": "Get a list of neon-transition jar release versions",
        "description": "Get a list of neon-transition jar release versions",
        "operationId": "getJarVersionList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "release",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_19",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_19",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitionjobs": {
      "get": {
        "tags": [
          "transitions"
        ],
        "summary": "GET transition cron data from Moab server.",
        "description": "",
        "operationId": "getCronJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "server",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK."
          },
          "500": {
            "description": "Internal server error."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "post": {
        "tags": [
          "transitions"
        ],
        "summary": "Update transition cron data from Moab server.",
        "description": "",
        "operationId": "setCronJobs",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionCronJobsData"
            }
          },
          {
            "name": "server",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content."
          },
          "500": {
            "description": "Internal server error."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_20",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitionjobs/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_20",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitions/{id}": {
      "get": {
        "tags": [
          "TransitionJobs",
          "TransitionJob"
        ],
        "summary": "Get TransitionJob",
        "description": "Get a TransitionJob with the given id",
        "operationId": "getTransitionJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Put TransitionJob",
        "description": "Put a datatype with the given id",
        "operationId": "updateTransitionJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "datatype",
          "unit"
        ],
        "summary": "Delete datatype",
        "description": "Delete a single datatype",
        "operationId": "deleteTransitionJob",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_21",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitions": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get TransitionJobs",
        "description": "Get TransitionJobs",
        "operationId": "getAllTransitionJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post a Unit",
        "description": "Post a unit",
        "operationId": "createTransitionJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_21",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/units/{id}": {
      "get": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Get Unit",
        "description": "Get a unit with the given id",
        "operationId": "getUnit",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Put a Unit",
        "description": "Put a unit with the given id",
        "operationId": "updateUnit",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete unit",
        "description": "Delete a single unit",
        "operationId": "deleteUnit",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_22",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/units": {
      "get": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Get All Units",
        "description": "Get all unit",
        "operationId": "getUnits",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post Units",
        "description": "Post a unit",
        "operationId": "createUnits",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_22",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/utility/timezones": {
      "get": {
        "tags": [
          "utility"
        ],
        "operationId": "getTimeZoneList",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/utility": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_23",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/utility/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_23",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    }
  },
  "definitions": {
    "CalibrationDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "calibrationId": {
          "type": "integer",
          "format": "int64"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "assetUid": {
          "type": "integer",
          "format": "int32"
        },
        "validStartTime": {
          "type": "string",
          "format": "date-time"
        },
        "validEndTime": {
          "type": "string",
          "format": "date-time"
        },
        "filename": {
          "type": "string"
        },
        "metadataList": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/CalibrationMetadataDTO"
          }
        }
      }
    },
    "CalibrationMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "calibrationMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "calibrationId": {
          "type": "integer",
          "format": "int64"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "DataTypeDTO": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "dataTypeName": {
          "type": "string"
        },
        "unitsName": {
          "type": "string"
        },
        "javaType": {
          "type": "string"
        },
        "tableName": {
          "type": "string"
        },
        "parameterType": {
          "type": "string"
        },
        "processingLevel": {
          "type": "string"
        },
        "system": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "LocationDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationId": {
          "type": "integer",
          "format": "int64"
        },
        "parentId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "parentName": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "horizontal": {
          "type": "integer",
          "format": "int32"
        },
        "vertical": {
          "type": "integer",
          "format": "int32"
        },
        "tmi": {
          "type": "integer",
          "format": "int32"
        },
        "locType": {
          "type": "string"
        },
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "pdrName": {
          "type": "string"
        },
        "subSystem": {
          "type": "string"
        },
        "locationKey": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/LocationDTO"
          }
        }
      }
    },
    "DataProductDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataProductId": {
          "type": "integer",
          "format": "int64"
        },
        "dpLevel": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "revision": {
          "type": "string"
        },
        "termNum": {
          "type": "string"
        },
        "term": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "status": {
          "type": "string"
        }
      }
    },
    "SimpleObject": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "Attribute": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "storageTypeId": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "requiresListOfValuesCheck": {
          "type": "boolean"
        },
        "requiresRangeCheck": {
          "type": "boolean"
        },
        "rangeMinValue": {
          "type": "number"
        },
        "rangeMaxValue": {
          "type": "number"
        },
        "precision": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "rangeUnitName": {
          "type": "string"
        },
        "defaultValue": {
          "$ref": "#/definitions/DefaultValue"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "attribute"
      }
    },
    "Attributes": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "xml": {
            "name": "attribute"
          },
          "items": {
            "xml": {
              "name": "attribute"
            },
            "$ref": "#/definitions/Attribute"
          }
        }
      }
    },
    "Base64": {
      "type": "object",
      "required": [
        "fileNid",
        "value"
      ],
      "properties": {
        "fileNid": {
          "type": "string"
        },
        "value": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "byte"
          }
        },
        "mimeType": {
          "type": "string"
        }
      },
      "xml": {
        "name": "base64"
      }
    },
    "ChildHistories": {
      "type": "object",
      "properties": {
        "childHistories": {
          "type": "array",
          "xml": {
            "name": "childHistory"
          },
          "items": {
            "xml": {
              "name": "childHistory"
            },
            "$ref": "#/definitions/ChildHistory"
          }
        }
      }
    },
    "ChildHistory": {
      "type": "object",
      "required": [
        "child",
        "endDate",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "child": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "Children": {
      "type": "object",
      "properties": {
        "getchildren": {
          "type": "array",
          "xml": {
            "name": "child"
          },
          "items": {
            "xml": {
              "name": "child"
            },
            "$ref": "#/definitions/NamedLocation"
          }
        }
      }
    },
    "Coordinates": {
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "utmCoordinates": {
          "$ref": "#/definitions/UtmCoordinates"
        }
      },
      "xml": {
        "name": "coordinates"
      }
    },
    "Data": {
      "type": "object",
      "properties": {
        "characterValue": {
          "type": "object"
        },
        "indexValue": {
          "type": "number"
        },
        "uriValue": {
          "type": "string"
        },
        "fileValue": {
          "$ref": "#/definitions/FileValue"
        },
        "dateTimeValue": {
          "type": "string",
          "format": "date-time"
        },
        "binaryValue": {
          "$ref": "#/definitions/Base64"
        },
        "textValue": {
          "type": "string"
        },
        "numberValue": {
          "$ref": "#/definitions/NumberValue"
        }
      },
      "xml": {
        "name": "data"
      }
    },
    "DefaultValue": {
      "type": "object",
      "required": [
        "value"
      ],
      "properties": {
        "value": {
          "$ref": "#/definitions/Value"
        },
        "unitName": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "Elements": {
      "type": "object",
      "properties": {
        "lovElements": {
          "type": "array",
          "xml": {
            "name": "lovElement"
          },
          "items": {
            "xml": {
              "name": "lovElement"
            },
            "$ref": "#/definitions/ListOfValuesElement"
          }
        }
      }
    },
    "Event": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "parent": {
          "$ref": "#/definitions/Event"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "event"
      }
    },
    "EventHistories": {
      "type": "object",
      "properties": {
        "histories": {
          "type": "array",
          "xml": {
            "name": "history"
          },
          "items": {
            "xml": {
              "name": "history"
            },
            "$ref": "#/definitions/Event"
          }
        }
      }
    },
    "FileValue": {
      "type": "object",
      "required": [
        "filename",
        "mimeType"
      ],
      "properties": {
        "filename": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        }
      }
    },
    "Geometry": {
      "type": "object",
      "properties": {
        "polygon": {
          "$ref": "#/definitions/Polygon"
        },
        "point": {
          "$ref": "#/definitions/Point"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "geometry"
      }
    },
    "IngestAction": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string"
        },
        "metadata": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "dataProducts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MeasurementStream"
          }
        }
      }
    },
    "ListOfValues": {
      "type": "object",
      "properties": {
        "type": {
          "$ref": "#/definitions/Type"
        },
        "elements": {
          "$ref": "#/definitions/Elements"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "listOfValues"
      }
    },
    "ListOfValuesElement": {
      "type": "object",
      "required": [
        "code",
        "description",
        "endDate",
        "listOfValues",
        "name",
        "publicationCode",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "rank": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "publicationCode": {
          "type": "string"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        }
      }
    },
    "Location": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationId": {
          "type": "integer",
          "format": "int64"
        },
        "parentId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "parentName": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "horizontal": {
          "type": "integer",
          "format": "int32"
        },
        "vertical": {
          "type": "integer",
          "format": "int32"
        },
        "tmi": {
          "type": "integer",
          "format": "int32"
        },
        "locType": {
          "type": "string"
        },
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "pdrName": {
          "type": "string"
        },
        "subSystem": {
          "type": "string"
        },
        "locationKey": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/LocationDTO"
          }
        },
        "parentEntity": {
          "$ref": "#/definitions/Location"
        },
        "sensorEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Sensor"
          }
        },
        "childEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Location"
          }
        }
      }
    },
    "LocationHistories": {
      "type": "object",
      "properties": {
        "locationHistories": {
          "type": "array",
          "xml": {
            "name": "locationHistory"
          },
          "items": {
            "xml": {
              "name": "locationHistory"
            },
            "$ref": "#/definitions/LocationHistory"
          }
        }
      }
    },
    "LocationHistory": {
      "type": "object",
      "required": [
        "endDate",
        "namedLocation",
        "startDate",
        "type"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "namedLocation": {
          "$ref": "#/definitions/NamedLocation"
        }
      }
    },
    "MeasurementStream": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "levelName": {
          "type": "string"
        },
        "observerHistories": {
          "$ref": "#/definitions/ObserverHistories"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "dataProductType": {
          "$ref": "#/definitions/Type"
        },
        "valueType": {
          "$ref": "#/definitions/Type"
        },
        "attributeType": {
          "$ref": "#/definitions/Type"
        },
        "readoutType": {
          "$ref": "#/definitions/Type"
        },
        "namedLocation": {
          "$ref": "#/definitions/NamedLocation"
        },
        "site": {
          "$ref": "#/definitions/NamedLocation"
        },
        "domain": {
          "$ref": "#/definitions/NamedLocation"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "measurementStream"
      }
    },
    "NamedLocation": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "parent": {
          "$ref": "#/definitions/NamedLocation"
        },
        "site": {
          "$ref": "#/definitions/NamedLocation"
        },
        "domain": {
          "$ref": "#/definitions/NamedLocation"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "locationHistories": {
          "$ref": "#/definitions/LocationHistories"
        },
        "eventHistories": {
          "$ref": "#/definitions/EventHistories"
        },
        "propertyValues": {
          "$ref": "#/definitions/PropertyValues"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "namedLocation"
      }
    },
    "NumberValue": {
      "type": "object",
      "required": [
        "accuracy",
        "value"
      ],
      "properties": {
        "value": {
          "type": "number"
        },
        "accuracy": {
          "type": "number"
        }
      }
    },
    "Observer": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "assetUID": {
          "type": "string"
        },
        "dataStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "parent": {
          "$ref": "#/definitions/Observer"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "locationHistories": {
          "$ref": "#/definitions/LocationHistories"
        },
        "parentHistories": {
          "$ref": "#/definitions/ParentHistories"
        },
        "childHistories": {
          "$ref": "#/definitions/ChildHistories"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "observer"
      }
    },
    "ObserverHistories": {
      "type": "object",
      "properties": {
        "observerHistories": {
          "type": "array",
          "xml": {
            "name": "observerHistory"
          },
          "items": {
            "xml": {
              "name": "observerHistory"
            },
            "$ref": "#/definitions/ObserverHistory"
          }
        }
      }
    },
    "ObserverHistory": {
      "type": "object",
      "required": [
        "endDate",
        "observer",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "observer": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "ParentHistories": {
      "type": "object",
      "properties": {
        "parentHistories": {
          "type": "array",
          "xml": {
            "name": "parentHistory"
          },
          "items": {
            "xml": {
              "name": "parentHistory"
            },
            "$ref": "#/definitions/ParentHistory"
          }
        }
      }
    },
    "ParentHistory": {
      "type": "object",
      "required": [
        "endDate",
        "parent",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "parent": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "Point": {
      "type": "object",
      "required": [
        "coordinates"
      ],
      "properties": {
        "coordinates": {
          "$ref": "#/definitions/Coordinates"
        }
      },
      "xml": {
        "name": "point"
      }
    },
    "Polygon": {
      "type": "object",
      "required": [
        "coordinates"
      ],
      "properties": {
        "coordinates": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Coordinates"
          }
        }
      },
      "xml": {
        "name": "polygon"
      }
    },
    "Properties": {
      "type": "object",
      "properties": {
        "propertyValues": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PropertyValue"
          }
        }
      }
    },
    "PropertyValue": {
      "type": "object",
      "properties": {
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "propertyId": {
          "type": "integer",
          "format": "int64"
        },
        "propertyDefinition": {
          "$ref": "#/definitions/Attribute"
        },
        "value": {
          "$ref": "#/definitions/Data"
        },
        "unitName": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "propertyValue"
      }
    },
    "PropertyValues": {
      "type": "object",
      "properties": {
        "propertyValues": {
          "type": "array",
          "xml": {
            "name": "propertyValue"
          },
          "items": {
            "xml": {
              "name": "propertyValue"
            },
            "$ref": "#/definitions/PropertyValue"
          }
        }
      }
    },
    "Type": {
      "type": "object",
      "properties": {
        "typeType": {
          "$ref": "#/definitions/TypeType"
        },
        "parentType": {
          "$ref": "#/definitions/Type"
        },
        "attributes": {
          "$ref": "#/definitions/Attributes"
        },
        "values": {
          "$ref": "#/definitions/Values"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "type"
      }
    },
    "TypeType": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "typeType"
      }
    },
    "UtmCoordinates": {
      "type": "object",
      "required": [
        "hemisphere"
      ],
      "properties": {
        "utmZone": {
          "type": "integer",
          "format": "int32"
        },
        "easting": {
          "type": "number",
          "format": "double"
        },
        "northing": {
          "type": "number",
          "format": "double"
        },
        "hemisphere": {
          "type": "string"
        }
      },
      "xml": {
        "name": "utmCoordinates"
      }
    },
    "Value": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "storageTypeId": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "isListOfValues": {
          "type": "boolean"
        },
        "precision": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "requiresRangeCheck": {
          "type": "boolean"
        },
        "rangeMin": {
          "type": "number"
        },
        "rangeMax": {
          "type": "number"
        },
        "defaultUnitName": {
          "type": "string"
        },
        "isIndex": {
          "type": "boolean"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "valueIndex": {
          "$ref": "#/definitions/ValueIndex"
        },
        "uriConstraints": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "value"
      }
    },
    "ValueIndex": {
      "type": "object",
      "required": [
        "description",
        "name"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "Values": {
      "type": "object",
      "properties": {
        "values": {
          "type": "array",
          "xml": {
            "name": "value"
          },
          "items": {
            "xml": {
              "name": "value"
            },
            "$ref": "#/definitions/Value"
          }
        }
      }
    },
    "LocationMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "SimpleMetadataDTO": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "description": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "DataType": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "dataTypeName": {
          "type": "string"
        },
        "unitsName": {
          "type": "string"
        },
        "javaType": {
          "type": "string"
        },
        "tableName": {
          "type": "string"
        },
        "parameterType": {
          "type": "string"
        },
        "processingLevel": {
          "type": "string"
        },
        "system": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "Sensor": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorId": {
          "type": "integer",
          "format": "int64"
        },
        "pdrObserverId": {
          "type": "integer",
          "format": "int64"
        },
        "assetUid": {
          "type": "integer",
          "format": "int64"
        },
        "maximoAsset": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "sensorType": {
          "$ref": "#/definitions/SensorTypeDTO"
        },
        "macAddress": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorDTO"
          }
        },
        "locationEntity": {
          "$ref": "#/definitions/Location"
        },
        "sensorTypeEntity": {
          "$ref": "#/definitions/SensorType"
        },
        "childEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Sensor"
          }
        }
      }
    },
    "SensorDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorId": {
          "type": "integer",
          "format": "int64"
        },
        "pdrObserverId": {
          "type": "integer",
          "format": "int64"
        },
        "assetUid": {
          "type": "integer",
          "format": "int64"
        },
        "maximoAsset": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "sensorType": {
          "$ref": "#/definitions/SensorTypeDTO"
        },
        "macAddress": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorDTO"
          }
        }
      }
    },
    "SensorStream": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "streamNumber": {
          "type": "integer",
          "format": "int64"
        },
        "dataRate": {
          "type": "string"
        },
        "calibrationFlag": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "sensorTypeEntity": {
          "$ref": "#/definitions/SensorType"
        },
        "dataTypeEntity": {
          "$ref": "#/definitions/DataType"
        }
      }
    },
    "SensorStreamDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "streamNumber": {
          "type": "integer",
          "format": "int64"
        },
        "dataRate": {
          "type": "string"
        },
        "calibrationFlag": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        }
      }
    },
    "SensorType": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreams": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStreamDTO"
          }
        },
        "sensorStreamEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStream"
          }
        }
      }
    },
    "SensorTypeDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreams": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStreamDTO"
          }
        }
      }
    },
    "LocationFrameworkDTO": {
      "type": "object",
      "properties": {
        "site": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "defaultLevels": {
          "type": "integer",
          "format": "int32"
        },
        "boomsPerLevel": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "MeasTransitionedDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "measurementStreamName": {
          "type": "string"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "versionStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "versionEndDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataCount": {
          "type": "integer",
          "format": "int64"
        },
        "numericValue": {
          "type": "number"
        },
        "textValue": {
          "type": "string"
        },
        "filename": {
          "type": "string"
        },
        "measurementReadoutId": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "Blob": {
      "type": "object",
      "properties": {
        "binaryStream": {
          "$ref": "#/definitions/InputStream"
        }
      }
    },
    "InputStream": {
      "type": "object"
    },
    "PdrMessageDTO": {
      "type": "object",
      "properties": {
        "msgId": {
          "type": "integer",
          "format": "int64"
        },
        "jmsMsgId": {
          "type": "string"
        },
        "msgBody": {
          "$ref": "#/definitions/Blob"
        },
        "msgProcFlag": {
          "type": "string"
        }
      }
    },
    "MoabJobDTO": {
      "type": "object",
      "properties": {
        "moabJobName": {
          "type": "string"
        },
        "classname": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "dataStartTimeStr": {
          "type": "string"
        },
        "dataEndTimeStr": {
          "type": "string"
        },
        "jobSubmitTimeStr": {
          "type": "string"
        },
        "jobStartTimeStr": {
          "type": "string"
        },
        "jobCompleteTimeStr": {
          "type": "string"
        }
      }
    },
    "ReadoutStreamDTO": {
      "type": "object",
      "properties": {
        "readoutStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "readoutStreamUri": {
          "type": "string"
        },
        "streamName": {
          "type": "string"
        },
        "startTime": {
          "type": "string",
          "format": "date-time"
        },
        "endTime": {
          "type": "string",
          "format": "date-time"
        },
        "javaType": {
          "type": "string"
        },
        "version": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "SensorMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "sensor": {
          "$ref": "#/definitions/SensorDTO"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "ThresholdDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "thresholdId": {
          "type": "integer",
          "format": "int64"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "dataProduct": {
          "$ref": "#/definitions/DataProductDTO"
        },
        "startDay": {
          "type": "integer",
          "format": "int32"
        },
        "stopDay": {
          "type": "integer",
          "format": "int32"
        },
        "stepDiff": {
          "type": "number",
          "format": "double"
        },
        "rangeMax": {
          "type": "number",
          "format": "double"
        },
        "rangeMin": {
          "type": "number",
          "format": "double"
        },
        "persistInterval": {
          "type": "number",
          "format": "double"
        },
        "persistThreshold": {
          "type": "number",
          "format": "double"
        }
      }
    },
    "TransitionDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "name": {
          "type": "string"
        },
        "inputDataProducts": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "outputDataProducts": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "TransitionCronJob": {
      "type": "object",
      "properties": {
        "minute": {
          "type": "string"
        },
        "hour": {
          "type": "string"
        },
        "dayInMonth": {
          "type": "string"
        },
        "month": {
          "type": "string"
        },
        "dayOfWeek": {
          "type": "string"
        },
        "jobScript": {
          "type": "string"
        },
        "jobConfig": {
          "type": "string"
        },
        "enabled": {
          "type": "boolean"
        },
        "hardDisabled": {
          "type": "boolean"
        },
        "jobType": {
          "type": "string"
        }
      }
    },
    "TransitionCronJobsData": {
      "type": "object",
      "properties": {
        "notes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "firstComments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "secondComments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "jobList": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TransitionCronJob"
          }
        }
      }
    },
    "TransitionJobDTO": {
      "type": "object",
      "properties": {
        "transitionJobId": {
          "type": "integer",
          "format": "int64"
        },
        "moabJobName": {
          "type": "string"
        },
        "classname": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "dataStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataEndDate": {
          "type": "string",
          "format": "date-time"
        },
        "jobStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "jobEndDate": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "UnitsDTO": {
      "type": "object",
      "properties": {
        "unitsId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "measure": {
          "type": "string"
        },
        "abbreviation": {
          "type": "string"
        },
        "siParent": {
          "type": "string"
        },
        "siMultiplier": {
          "type": "string"
        },
        "scale": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    }
  }
}
{
  "swagger": "2.0",
  "info": {
    "version": "1.1",
    "title": "Metadata Tool API Specifications"
  },
  "host": "localhost:9090/neon-ods",
  "basePath": "/api",
  "tags": [
    {
      "name": "calibration"
    },
    {
      "name": "header"
    },
    {
      "name": "dataProduct"
    },
    {
      "name": "dataProducts"
    },
    {
      "name": "datatype"
    },
    {
      "name": "unit"
    },
    {
      "name": "download"
    },
    {
      "name": "lhdd"
    },
    {
      "name": "Upload"
    },
    {
      "name": "file"
    },
    {
      "name": "metadata"
    },
    {
      "name": "locationmetadata"
    },
    {
      "name": "location"
    },
    {
      "name": "locations"
    },
    {
      "name": "locationframework"
    },
    {
      "name": "message"
    },
    {
      "name": "messages"
    },
    {
      "name": "moab"
    },
    {
      "name": "moabjobs"
    },
    {
      "name": "moabjob"
    },
    {
      "name": "readout"
    },
    {
      "name": "readouts"
    },
    {
      "name": "sensormetadata"
    },
    {
      "name": "sensor"
    },
    {
      "name": "sensors"
    },
    {
      "name": "sensorstream"
    },
    {
      "name": "sensorstreams"
    },
    {
      "name": "type"
    },
    {
      "name": "types"
    },
    {
      "name": "manufacturers"
    },
    {
      "name": "model"
    },
    {
      "name": "ping"
    },
    {
      "name": "info"
    },
    {
      "name": "ecs"
    },
    {
      "name": "S3"
    },
    {
      "name": "env"
    },
    {
      "name": "environment"
    },
    {
      "name": "threshold"
    },
    {
      "name": "transition"
    },
    {
      "name": "transitions"
    },
    {
      "name": "neon-transition"
    },
    {
      "name": "TransitionJobs"
    },
    {
      "name": "TransitionJob"
    },
    {
      "name": "utility"
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    "/calibrations/{id}": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get a calibration with the given id",
        "operationId": "getCalibration",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Put Calibration",
        "description": "Put a calibration with the given id",
        "operationId": "updateCalibration",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations/all": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get calibrations",
        "operationId": "getAllCalibrations",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations/query": {
      "get": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Get Calibration",
        "description": "Get calibrations",
        "operationId": "getStreamCalibrations",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "msName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/calibrations": {
      "post": {
        "tags": [
          "calibration",
          "calibration"
        ],
        "summary": "Post Calibration",
        "description": "Post a calibration with the given id",
        "operationId": "createCalibration",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/CalibrationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/dataproducts/byDataProductNumber": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by dpLevel and term",
        "description": "Find dataProduct by dpLevel and term",
        "operationId": "getDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dataProductNumber",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/{id}": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get a single dataProduct",
        "description": "Get a single dataProduct",
        "operationId": "getDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Updates a single dataProduct",
        "description": "Updates a single dataProduct.",
        "operationId": "updateDataProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "400": {
            "description": "If theres an issue with the dataProduct data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "delete": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Deletes a single dataProduct.",
        "description": "Deletes a single dataProduct.  If children dataProducts exist, they should be deleted first or this call will fail.",
        "operationId": "deleteDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_1",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/dataproducts/bySite": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by site",
        "description": "Find dataProduct by site",
        "operationId": "getDataProductBySite",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/termNames": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get term names",
        "description": "Get term names",
        "operationId": "getTermNames",
        "produces": [
          "text/plain"
        ],
        "parameters": [
          {
            "name": "productNum",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "List all dataProducts by dpLevel",
        "description": "List all dataProducts by dpLevel",
        "operationId": "getDataProductsByLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byProductAndLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Get dataProducts by productNum and dplevel",
        "description": "Get dataProducts by productNum and dplevel",
        "operationId": "getDataProductsByProductAndLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byProductTermLevel": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by dpLevel and term",
        "description": "Find dataProduct by dpLevel and term",
        "operationId": "getDataProductByProductTermLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "productNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "revision",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "001"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/byLocationId": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Find dataProduct by location",
        "description": "Find dataProduct by location",
        "operationId": "getDataProductByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts/all": {
      "get": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "List all dataProducts",
        "description": "List all dataProducts",
        "operationId": "getAllDataProducts",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/dataproducts": {
      "post": {
        "tags": [
          "dataProduct",
          "dataProducts"
        ],
        "summary": "Creates a single dataProduct",
        "description": "Creates a single dataProduct.  The dataProduct id is ignored.",
        "operationId": "createDataProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataProductDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the dataProduct data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_1",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/datatypes": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get DataTypes",
        "description": "Get DataTypes",
        "operationId": "getAllDataTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post a Unit",
        "description": "Post a unit",
        "operationId": "createDataType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_2",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/datatypes/{id}": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get DataType",
        "description": "Get a datatype with the given id",
        "operationId": "getDataType",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Put DataType",
        "description": "Put a datatype with the given id",
        "operationId": "updateDataType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/DataTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "datatype",
          "unit"
        ],
        "summary": "Delete datatype",
        "description": "Delete a single datatype",
        "operationId": "deleteDataType",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_2",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/download/lhdd": {
      "get": {
        "tags": [
          "download",
          "lhdd"
        ],
        "summary": "Download an XML file",
        "description": "Download an XML file",
        "operationId": "getFile",
        "produces": [
          "application/json",
          "application/xml"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          },
          "404": {
            "description": "Item not found."
          }
        }
      }
    },
    "/download": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_3",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/download/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_3",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/file/upload": {
      "post": {
        "tags": [
          "Upload",
          "file"
        ],
        "summary": "Upload an XML file",
        "description": "Upload an XML file",
        "operationId": "uploadFile",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "dest-path",
            "in": "formData",
            "required": true,
            "type": "string"
          },
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "file"
            }
          },
          "204": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          }
        }
      }
    },
    "/file": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_4",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/file/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_4",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhdd/downloadlhdd": {
      "post": {
        "tags": [
          "download",
          "lhdd"
        ],
        "summary": "Download an XML file",
        "description": "Download an XML file",
        "operationId": "getLHDDFile",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json",
          "application/xml"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SimpleObject"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request from client."
          },
          "404": {
            "description": "Item not found."
          }
        }
      }
    },
    "/lhdd/{id}/ingest": {
      "post": {
        "operationId": "postIngestAction",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/IngestAction"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhdd/{id}/ingestexisting": {
      "post": {
        "operationId": "postIngestActionWithExistingFile",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/IngestAction"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhdd": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_5",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhdd/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_5",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhddxmlinjest/upload": {
      "post": {
        "operationId": "uploadThresholdData",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/lhddxmlinjest": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_6",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/lhddxmlinjest/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_6",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata/{id}": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET locationMetadata for the given locationmetadata id.",
        "description": "",
        "operationId": "getLocationMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id of metadata need to be updated",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          },
          "500": {
            "description": "Internal server error."
          },
          "405": {
            "description": "Location ID required."
          },
          "404": {
            "description": "Not found for the given location ID."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "put": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Put locationmetadata",
        "description": "put a single locationmetadata",
        "operationId": "updateLocationMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      },
      "delete": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Delete locationmetadata",
        "description": "Delete a single locationmetadata",
        "operationId": "deleteLocationMetadata",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_7",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET locationMetadata for the given location id.",
        "description": "",
        "operationId": "getLocationMetadataByLocationId",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "locationid",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      },
      "post": {
        "tags": [
          "locationmetadata",
          "locationmetadata"
        ],
        "summary": "Post locationmetadata",
        "description": "Post a single locationmetadata",
        "operationId": "createLocationMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationMetadataDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_7",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locationmetadata/query": {
      "get": {
        "tags": [
          "metadata"
        ],
        "summary": "GET all locationMetadata for the given site",
        "description": "",
        "operationId": "getSiteMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          }
        }
      }
    },
    "/locations/{id}/status/{status}": {
      "put": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "updateStatus",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/siteNames": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get site names",
        "description": "Get site names",
        "operationId": "getSiteNames",
        "produces": [
          "text/plain"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/query": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get locations by name",
        "description": "Get locations by names",
        "operationId": "getLocationsByQueryParams",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/all": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "List all locations",
        "description": "List all locations",
        "operationId": "getAllLocations",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "verbose",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/{id}": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get a single location",
        "description": "Get a single location",
        "operationId": "getLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "verbose",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Updates a single location",
        "description": "Updates a single location.  Parent and children locations are not updated.",
        "operationId": "updateLocation",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "400": {
            "description": "If theres an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "delete": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Deletes a single location.",
        "description": "Deletes a single location.  If children locations exist, they should be deleted first or this call will fail.",
        "operationId": "deleteLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_8",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locations": {
      "post": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Creates a single location",
        "description": "Creates a single location.  The location id is ignored.  Parent and children locations are not created.",
        "operationId": "createLocation",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_8",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/locations/{id}/sensors": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Gets all locations and attached sensors.",
        "description": "Gets all locations and attached sensors.",
        "operationId": "getSensorsByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/{id}/dataProducts": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Get attached data products at given location.",
        "description": "Get attached data products at given location.",
        "operationId": "getDataProductsByLocation",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/locations/siteinfo": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "getLocationIdAndNames",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/loctypes": {
      "get": {
        "tags": [
          "location",
          "locations"
        ],
        "operationId": "getLocationTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/locations/locationframework": {
      "post": {
        "tags": [
          "location",
          "locationframework"
        ],
        "summary": "Creates a skeleton site.",
        "description": "Creates a skeleton site based on the booms per level and default levels.",
        "operationId": "createLocationFramework",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/LocationFrameworkDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Location"
            }
          },
          "400": {
            "description": "If theres an issue with the location data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/meastransitioned": {
      "post": {
        "operationId": "postMeasTransitioned",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/MeasTransitionedDTO"
            }
          }
        ],
        "responses": {
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location ID."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_9",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/meastransitioned/bySiteAndDate": {
      "get": {
        "operationId": "getMeasTransitionedURIBySiteAndDate",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "starttime",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "versionStarttime",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "500": {
            "description": "Internal server error."
          },
          "404": {
            "description": "Not found for the given location."
          },
          "400": {
            "description": "Bad request."
          }
        }
      }
    },
    "/meastransitioned/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_9",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages/byStatusAndInterval": {
      "get": {
        "tags": [
          "message",
          "message"
        ],
        "summary": "list of messages",
        "description": "Gets a list of messages matching the given status and date range",
        "operationId": "getMessagesByStatusAndInterval",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "startTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "endTime",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/PdrMessageDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages/{id}": {
      "get": {
        "tags": [
          "message",
          "messages"
        ],
        "summary": "Get a single message",
        "description": "Get a single message",
        "operationId": "getMessage",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/PdrMessageDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_10",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/messages": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_10",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/moabjobs/{id}": {
      "get": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Get a single moab job",
        "description": "Get a single moab job",
        "operationId": "getMoabJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Deletes a single Moab job.",
        "description": "Deletes a single Moab job.",
        "operationId": "deleteMoabJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_11",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/moabjobs/all": {
      "get": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "List all Moab jobs",
        "description": "List all Moab jobs",
        "operationId": "getAllMoabJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/moabjobs": {
      "post": {
        "tags": [
          "moabjob",
          "moabjobs"
        ],
        "summary": "Submits a job to the Moab cluster",
        "description": "Not a generic Moab job submission endpoint.  Only creates EC pipeline transition jobs.",
        "operationId": "createMoabJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/MoabJobDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the job that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_11",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/{id}": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "Get a single readout stream",
        "description": "Get a single readout stream",
        "operationId": "getReadoutStream",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "readout",
          "readouts"
        ],
        "operationId": "updateReadoutStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_12",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/byNameAndInterval": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "list of readout streams",
        "description": "Gets a list of readout streams matching the given name and date range",
        "operationId": "getReadoutStreamsByNameAndInterval",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "startTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "endTime",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "getMessages",
            "in": "query",
            "required": false,
            "type": "string",
            "default": "no"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/bySubName": {
      "get": {
        "tags": [
          "readout",
          "readouts"
        ],
        "summary": "list of measurement streams",
        "description": "Gets a list of measurement streams containing the given data product name",
        "operationId": "getMeasurementStreamsBySubName",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "subName",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts": {
      "post": {
        "tags": [
          "location",
          "locations"
        ],
        "summary": "Creates a single readout stream record",
        "description": "Creates a single readout stream record.  The readoutStreamId is ignored.",
        "operationId": "createReadoutStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ReadoutStreamDTO"
            }
          },
          "400": {
            "description": "If there's an issue with the readoutStream data that was passed in."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_12",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/readouts/values": {
      "post": {
        "tags": [
          "readout",
          "readouts"
        ],
        "operationId": "getReadoutValues",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/sensormetadata/{id}": {
      "get": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Get sensormetadata",
        "description": "Get a single sensormetadatum",
        "operationId": "getSensorMetadata",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not Found."
          }
        }
      },
      "put": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Put sensormetadata",
        "description": "Update a single sensormetadatum",
        "operationId": "updateSensorMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorMetadataDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "404": {
            "description": "Not Found."
          }
        }
      },
      "delete": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Delete sensormetadata",
        "description": "Delete a single sensormetadata",
        "operationId": "deleteSensorMetadata",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_13",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensormetadata": {
      "get": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Get sensormetadata",
        "description": "Get sensormetadata of a sensor",
        "operationId": "getSensorMetadataBySensorId",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "sensorid",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "sensormetadata",
          "sensormetadata"
        ],
        "summary": "Post sensormetadata",
        "description": "Post a single sensormetadata",
        "operationId": "createSensorMetadata",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorMetadataDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_13",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/{id}/status/{status}": {
      "put": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "operationId": "updateStatus",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/sensors/{id}": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get a single sensor",
        "description": "Get a single sensor",
        "operationId": "getSensor",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Update a sensor",
        "description": "Update a sensor.  Parent and children sensors are ignored.",
        "operationId": "updateSensor",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete sensor",
        "description": "Delete a single sensor",
        "operationId": "deleteSensor",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_14",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/{id}/sensorStreams": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Gets all sensor streams attached to given sensor.",
        "description": "Gets all sensor streams attached to given sensor.",
        "operationId": "getStreamsBySensor",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/all": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get all sensors",
        "description": "Get all sensors.  Note that this call is VERY expensive.",
        "operationId": "getAllSensors",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors/bySiteAndDpNum": {
      "get": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Get all sensors matching the given site and DpNum",
        "description": "Get all sensors matching the given site and DpNum",
        "operationId": "getSensorsBySiteAndDpNum",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensors": {
      "post": {
        "tags": [
          "sensor",
          "sensors"
        ],
        "summary": "Create a sensor",
        "description": "Create a sensor.  Parent and children sensors are ignored.Location and Sensor type IDs will be attached, but those should already exist.This call will not create them.",
        "operationId": "createSensor",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Sensor"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_14",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensorstreams/{id}": {
      "get": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Get a single sensor stream",
        "description": "Get a single sensor stream",
        "operationId": "getSensorStream",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_15",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensorstreams": {
      "post": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Create a single sensor stream",
        "description": "Create a single sensor stream.  Use sensorTypeId to attach this sensor stream to a sensor type.",
        "operationId": "createSensorStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensorstream",
          "sensorstreams"
        ],
        "summary": "Update a single sensor stream",
        "description": "Update a single sensor stream.  Parent and children sensor streams are ignored.",
        "operationId": "updateSensorStream",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorStreamDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_15",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/{id}": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Get a sensor tempate",
        "description": "Get a sensor tempate",
        "operationId": "getSensorType",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Update a sensor type",
        "description": "Update a sensor type.  Children objects are not updated.",
        "operationId": "updateSensorType",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete sensor type",
        "description": "Delete a single sensor type",
        "operationId": "deleteSensorType",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_16",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/all": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Get all sensor tempate",
        "description": "Get all sensor tempate.  Note that this can be a heavy call.",
        "operationId": "getAllSensorTypes",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes": {
      "post": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "summary": "Creates a sensor type",
        "description": "Creates a sensor type.  Included sensor streams are created.",
        "operationId": "createSensorType",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/SensorTypeDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_16",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/manufacturers": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types",
          "manufacturers"
        ],
        "summary": "Get a unique list of manufacturers.",
        "description": "Get a unique list of manufacturers.",
        "operationId": "getUniqueManufacturers",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/models": {
      "get": {
        "tags": [
          "sensor",
          "type",
          "types",
          "manufacturers",
          "model"
        ],
        "summary": "Get a unique list of models based on the manufacturer.",
        "description": "Get a unique list of models based on the manufacturer.",
        "operationId": "getModels",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "manufacturer",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/sensortypes/{id}/status/{status}": {
      "put": {
        "tags": [
          "sensor",
          "type",
          "types"
        ],
        "operationId": "updateStatus",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/test/ping": {
      "get": {
        "tags": [
          "ping",
          "ping"
        ],
        "summary": "Get ping",
        "description": "Check if there is connection to service",
        "operationId": "doPing",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/maven": {
      "get": {
        "tags": [
          "info",
          "info"
        ],
        "summary": "Get version and dependencies information",
        "description": "Returns the version of the running code and all its dependencies",
        "operationId": "getMavenDependencies",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/ecs": {
      "get": {
        "tags": [
          "ecs",
          "S3"
        ],
        "summary": "Get aws client info and status",
        "description": "Returns information about the ECS datastore this service instance is pointed to",
        "operationId": "getEcsConnectionInfo",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/env": {
      "get": {
        "tags": [
          "env",
          "environment"
        ],
        "summary": "Get environment variables",
        "description": "Returns information about the environment of this service instance",
        "operationId": "getEnvirnomentInfo",
        "produces": [
          "*/html"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "string"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_17",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/test/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_17",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/{id}": {
      "get": {
        "tags": [
          "threshold",
          "threshold"
        ],
        "summary": "Get threshold",
        "description": "Get a single threshold",
        "operationId": "getThreshold",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_18",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/byLocationAndDataProduct": {
      "get": {
        "summary": "Get threshold(s) by given locationId, sensorTypeId, term and dpLevel.",
        "description": "",
        "operationId": "getThresholdsByTermAndLevel",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpRev",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "includeParentLocation",
            "in": "query",
            "required": false,
            "type": "boolean",
            "default": false
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/getUniqueThreshold": {
      "get": {
        "summary": "Get threshold by given locationId, dpNum, termNum, dpLevel, dpRev, startDay and stopDay.",
        "description": "",
        "operationId": "getUniqueThreshold",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "dpLevel",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "dpRev",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termNum",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "locationId",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/bySiteAndTermList": {
      "get": {
        "summary": "Get threshold by given site, termList, startDay and stopDay.",
        "description": "",
        "operationId": "GetThresholdBySiteAndDataProduct",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "termList",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds/bySiteAndProductNumList": {
      "get": {
        "summary": "Get threshold by given site, productNum, startDay and stopDay.",
        "description": "",
        "operationId": "getThresholdBySiteAndProductNumList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "productNumList",
            "in": "query",
            "required": true,
            "type": "string"
          },
          {
            "name": "startDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "stopDay",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "405": {
            "description": "Missing Parameter(s)."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    },
    "/thresholds": {
      "post": {
        "summary": "Creates a single threshold",
        "description": "",
        "operationId": "createThreshold",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          },
          "400": {
            "description": "Bad Request."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      },
      "put": {
        "tags": [
          "threshold",
          "threshold"
        ],
        "summary": "Put threshold",
        "description": "Put a single threshold",
        "operationId": "updateThreshold",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/ThresholdDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_18",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/thresholds/upload": {
      "post": {
        "operationId": "uploadThresholdData",
        "consumes": [
          "multipart/form-data"
        ],
        "parameters": [
          {
            "name": "file",
            "in": "formData",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/transition/transitionList": {
      "get": {
        "tags": [
          "transition",
          "transitions"
        ],
        "summary": "Get a single transition",
        "description": "Get a single transition",
        "operationId": "getTransitionList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "version",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "release",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition/versionList": {
      "get": {
        "tags": [
          "transition",
          "transitions",
          "neon-transition"
        ],
        "summary": "Get a list of neon-transition jar release versions",
        "description": "Get a list of neon-transition jar release versions",
        "operationId": "getJarVersionList",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "release",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "items": {
                "type": "object"
              }
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_19",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transition/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_19",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitionjobs": {
      "get": {
        "tags": [
          "transitions"
        ],
        "summary": "GET transition cron data from Moab server.",
        "description": "",
        "operationId": "getCronJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "server",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK."
          },
          "500": {
            "description": "Internal server error."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "post": {
        "tags": [
          "transitions"
        ],
        "summary": "Update transition cron data from Moab server.",
        "description": "",
        "operationId": "setCronJobs",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionCronJobsData"
            }
          },
          {
            "name": "server",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content."
          },
          "500": {
            "description": "Internal server error."
          },
          "400": {
            "description": "Bad request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_20",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitionjobs/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_20",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitions/{id}": {
      "get": {
        "tags": [
          "TransitionJobs",
          "TransitionJob"
        ],
        "summary": "Get TransitionJob",
        "description": "Get a TransitionJob with the given id",
        "operationId": "getTransitionJob",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Put TransitionJob",
        "description": "Put a datatype with the given id",
        "operationId": "updateTransitionJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "datatype",
          "unit"
        ],
        "summary": "Delete datatype",
        "description": "Delete a single datatype",
        "operationId": "deleteTransitionJob",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_21",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/transitions": {
      "get": {
        "tags": [
          "datatype",
          "datatype"
        ],
        "summary": "Get TransitionJobs",
        "description": "Get TransitionJobs",
        "operationId": "getAllTransitionJobs",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post a Unit",
        "description": "Post a unit",
        "operationId": "createTransitionJob",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/TransitionJobDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_21",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/units/{id}": {
      "get": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Get Unit",
        "description": "Get a unit with the given id",
        "operationId": "getUnit",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "put": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Put a Unit",
        "description": "Put a unit with the given id",
        "operationId": "updateUnit",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "delete": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Delete unit",
        "description": "Delete a single unit",
        "operationId": "deleteUnit",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful."
          },
          "500": {
            "description": "When something bad happens."
          },
          "400": {
            "description": "Bad Request."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_22",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/units": {
      "get": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Get All Units",
        "description": "Get all unit",
        "operationId": "getUnits",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "post": {
        "tags": [
          "unit",
          "unit"
        ],
        "summary": "Post Units",
        "description": "Post a unit",
        "operationId": "createUnits",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UnitsDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      },
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_22",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/utility/timezones": {
      "get": {
        "tags": [
          "utility"
        ],
        "operationId": "getTimeZoneList",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/utility": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandler_23",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    },
    "/utility/{id}": {
      "options": {
        "tags": [
          "header",
          "header"
        ],
        "summary": "Header options",
        "description": "Handle preflight for URI without ID",
        "operationId": "preflightHandlerWithId_23",
        "consumes": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/LocationDTO"
            }
          },
          "500": {
            "description": "When something bad happens."
          }
        }
      }
    }
  },
  "definitions": {
    "CalibrationDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "calibrationId": {
          "type": "integer",
          "format": "int64"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "assetUid": {
          "type": "integer",
          "format": "int32"
        },
        "validStartTime": {
          "type": "string",
          "format": "date-time"
        },
        "validEndTime": {
          "type": "string",
          "format": "date-time"
        },
        "filename": {
          "type": "string"
        },
        "metadataList": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/CalibrationMetadataDTO"
          }
        }
      }
    },
    "CalibrationMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "calibrationMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "calibrationId": {
          "type": "integer",
          "format": "int64"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "DataTypeDTO": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "dataTypeName": {
          "type": "string"
        },
        "unitsName": {
          "type": "string"
        },
        "javaType": {
          "type": "string"
        },
        "tableName": {
          "type": "string"
        },
        "parameterType": {
          "type": "string"
        },
        "processingLevel": {
          "type": "string"
        },
        "system": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "LocationDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationId": {
          "type": "integer",
          "format": "int64"
        },
        "parentId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "parentName": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "horizontal": {
          "type": "integer",
          "format": "int32"
        },
        "vertical": {
          "type": "integer",
          "format": "int32"
        },
        "tmi": {
          "type": "integer",
          "format": "int32"
        },
        "locType": {
          "type": "string"
        },
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "pdrName": {
          "type": "string"
        },
        "subSystem": {
          "type": "string"
        },
        "locationKey": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/LocationDTO"
          }
        }
      }
    },
    "DataProductDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataProductId": {
          "type": "integer",
          "format": "int64"
        },
        "dpLevel": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "revision": {
          "type": "string"
        },
        "termNum": {
          "type": "string"
        },
        "term": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "status": {
          "type": "string"
        }
      }
    },
    "SimpleObject": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "Attribute": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "storageTypeId": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "requiresListOfValuesCheck": {
          "type": "boolean"
        },
        "requiresRangeCheck": {
          "type": "boolean"
        },
        "rangeMinValue": {
          "type": "number"
        },
        "rangeMaxValue": {
          "type": "number"
        },
        "precision": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "rangeUnitName": {
          "type": "string"
        },
        "defaultValue": {
          "$ref": "#/definitions/DefaultValue"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "attribute"
      }
    },
    "Attributes": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "xml": {
            "name": "attribute"
          },
          "items": {
            "xml": {
              "name": "attribute"
            },
            "$ref": "#/definitions/Attribute"
          }
        }
      }
    },
    "Base64": {
      "type": "object",
      "required": [
        "fileNid",
        "value"
      ],
      "properties": {
        "fileNid": {
          "type": "string"
        },
        "value": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "byte"
          }
        },
        "mimeType": {
          "type": "string"
        }
      },
      "xml": {
        "name": "base64"
      }
    },
    "ChildHistories": {
      "type": "object",
      "properties": {
        "childHistories": {
          "type": "array",
          "xml": {
            "name": "childHistory"
          },
          "items": {
            "xml": {
              "name": "childHistory"
            },
            "$ref": "#/definitions/ChildHistory"
          }
        }
      }
    },
    "ChildHistory": {
      "type": "object",
      "required": [
        "child",
        "endDate",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "child": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "Children": {
      "type": "object",
      "properties": {
        "getchildren": {
          "type": "array",
          "xml": {
            "name": "child"
          },
          "items": {
            "xml": {
              "name": "child"
            },
            "$ref": "#/definitions/NamedLocation"
          }
        }
      }
    },
    "Coordinates": {
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "utmCoordinates": {
          "$ref": "#/definitions/UtmCoordinates"
        }
      },
      "xml": {
        "name": "coordinates"
      }
    },
    "Data": {
      "type": "object",
      "properties": {
        "characterValue": {
          "type": "object"
        },
        "indexValue": {
          "type": "number"
        },
        "uriValue": {
          "type": "string"
        },
        "fileValue": {
          "$ref": "#/definitions/FileValue"
        },
        "dateTimeValue": {
          "type": "string",
          "format": "date-time"
        },
        "binaryValue": {
          "$ref": "#/definitions/Base64"
        },
        "textValue": {
          "type": "string"
        },
        "numberValue": {
          "$ref": "#/definitions/NumberValue"
        }
      },
      "xml": {
        "name": "data"
      }
    },
    "DefaultValue": {
      "type": "object",
      "required": [
        "value"
      ],
      "properties": {
        "value": {
          "$ref": "#/definitions/Value"
        },
        "unitName": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "Elements": {
      "type": "object",
      "properties": {
        "lovElements": {
          "type": "array",
          "xml": {
            "name": "lovElement"
          },
          "items": {
            "xml": {
              "name": "lovElement"
            },
            "$ref": "#/definitions/ListOfValuesElement"
          }
        }
      }
    },
    "Event": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "parent": {
          "$ref": "#/definitions/Event"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "event"
      }
    },
    "EventHistories": {
      "type": "object",
      "properties": {
        "histories": {
          "type": "array",
          "xml": {
            "name": "history"
          },
          "items": {
            "xml": {
              "name": "history"
            },
            "$ref": "#/definitions/Event"
          }
        }
      }
    },
    "FileValue": {
      "type": "object",
      "required": [
        "filename",
        "mimeType"
      ],
      "properties": {
        "filename": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        }
      }
    },
    "Geometry": {
      "type": "object",
      "properties": {
        "polygon": {
          "$ref": "#/definitions/Polygon"
        },
        "point": {
          "$ref": "#/definitions/Point"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "geometry"
      }
    },
    "IngestAction": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string"
        },
        "metadata": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "dataProducts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MeasurementStream"
          }
        }
      }
    },
    "ListOfValues": {
      "type": "object",
      "properties": {
        "type": {
          "$ref": "#/definitions/Type"
        },
        "elements": {
          "$ref": "#/definitions/Elements"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "listOfValues"
      }
    },
    "ListOfValuesElement": {
      "type": "object",
      "required": [
        "code",
        "description",
        "endDate",
        "listOfValues",
        "name",
        "publicationCode",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "rank": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "publicationCode": {
          "type": "string"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        }
      }
    },
    "Location": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationId": {
          "type": "integer",
          "format": "int64"
        },
        "parentId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "parentName": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "horizontal": {
          "type": "integer",
          "format": "int32"
        },
        "vertical": {
          "type": "integer",
          "format": "int32"
        },
        "tmi": {
          "type": "integer",
          "format": "int32"
        },
        "locType": {
          "type": "string"
        },
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "elevation": {
          "type": "number",
          "format": "double"
        },
        "pdrName": {
          "type": "string"
        },
        "subSystem": {
          "type": "string"
        },
        "locationKey": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/LocationDTO"
          }
        },
        "parentEntity": {
          "$ref": "#/definitions/Location"
        },
        "sensorEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Sensor"
          }
        },
        "childEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Location"
          }
        }
      }
    },
    "LocationHistories": {
      "type": "object",
      "properties": {
        "locationHistories": {
          "type": "array",
          "xml": {
            "name": "locationHistory"
          },
          "items": {
            "xml": {
              "name": "locationHistory"
            },
            "$ref": "#/definitions/LocationHistory"
          }
        }
      }
    },
    "LocationHistory": {
      "type": "object",
      "required": [
        "endDate",
        "namedLocation",
        "startDate",
        "type"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "namedLocation": {
          "$ref": "#/definitions/NamedLocation"
        }
      }
    },
    "MeasurementStream": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "levelName": {
          "type": "string"
        },
        "observerHistories": {
          "$ref": "#/definitions/ObserverHistories"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "dataProductType": {
          "$ref": "#/definitions/Type"
        },
        "valueType": {
          "$ref": "#/definitions/Type"
        },
        "attributeType": {
          "$ref": "#/definitions/Type"
        },
        "readoutType": {
          "$ref": "#/definitions/Type"
        },
        "namedLocation": {
          "$ref": "#/definitions/NamedLocation"
        },
        "site": {
          "$ref": "#/definitions/NamedLocation"
        },
        "domain": {
          "$ref": "#/definitions/NamedLocation"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "measurementStream"
      }
    },
    "NamedLocation": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "parent": {
          "$ref": "#/definitions/NamedLocation"
        },
        "site": {
          "$ref": "#/definitions/NamedLocation"
        },
        "domain": {
          "$ref": "#/definitions/NamedLocation"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "locationHistories": {
          "$ref": "#/definitions/LocationHistories"
        },
        "eventHistories": {
          "$ref": "#/definitions/EventHistories"
        },
        "propertyValues": {
          "$ref": "#/definitions/PropertyValues"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "namedLocation"
      }
    },
    "NumberValue": {
      "type": "object",
      "required": [
        "accuracy",
        "value"
      ],
      "properties": {
        "value": {
          "type": "number"
        },
        "accuracy": {
          "type": "number"
        }
      }
    },
    "Observer": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "assetUID": {
          "type": "string"
        },
        "dataStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "parent": {
          "$ref": "#/definitions/Observer"
        },
        "children": {
          "$ref": "#/definitions/Children"
        },
        "type": {
          "$ref": "#/definitions/Type"
        },
        "properties": {
          "$ref": "#/definitions/Properties"
        },
        "locationHistories": {
          "$ref": "#/definitions/LocationHistories"
        },
        "parentHistories": {
          "$ref": "#/definitions/ParentHistories"
        },
        "childHistories": {
          "$ref": "#/definitions/ChildHistories"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "observer"
      }
    },
    "ObserverHistories": {
      "type": "object",
      "properties": {
        "observerHistories": {
          "type": "array",
          "xml": {
            "name": "observerHistory"
          },
          "items": {
            "xml": {
              "name": "observerHistory"
            },
            "$ref": "#/definitions/ObserverHistory"
          }
        }
      }
    },
    "ObserverHistory": {
      "type": "object",
      "required": [
        "endDate",
        "observer",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "observer": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "ParentHistories": {
      "type": "object",
      "properties": {
        "parentHistories": {
          "type": "array",
          "xml": {
            "name": "parentHistory"
          },
          "items": {
            "xml": {
              "name": "parentHistory"
            },
            "$ref": "#/definitions/ParentHistory"
          }
        }
      }
    },
    "ParentHistory": {
      "type": "object",
      "required": [
        "endDate",
        "parent",
        "startDate",
        "transactionDate"
      ],
      "properties": {
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "parent": {
          "$ref": "#/definitions/Observer"
        }
      }
    },
    "Point": {
      "type": "object",
      "required": [
        "coordinates"
      ],
      "properties": {
        "coordinates": {
          "$ref": "#/definitions/Coordinates"
        }
      },
      "xml": {
        "name": "point"
      }
    },
    "Polygon": {
      "type": "object",
      "required": [
        "coordinates"
      ],
      "properties": {
        "coordinates": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Coordinates"
          }
        }
      },
      "xml": {
        "name": "polygon"
      }
    },
    "Properties": {
      "type": "object",
      "properties": {
        "propertyValues": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PropertyValue"
          }
        }
      }
    },
    "PropertyValue": {
      "type": "object",
      "properties": {
        "transactionDate": {
          "type": "string",
          "format": "date-time"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "propertyId": {
          "type": "integer",
          "format": "int64"
        },
        "propertyDefinition": {
          "$ref": "#/definitions/Attribute"
        },
        "value": {
          "$ref": "#/definitions/Data"
        },
        "unitName": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "propertyValue"
      }
    },
    "PropertyValues": {
      "type": "object",
      "properties": {
        "propertyValues": {
          "type": "array",
          "xml": {
            "name": "propertyValue"
          },
          "items": {
            "xml": {
              "name": "propertyValue"
            },
            "$ref": "#/definitions/PropertyValue"
          }
        }
      }
    },
    "Type": {
      "type": "object",
      "properties": {
        "typeType": {
          "$ref": "#/definitions/TypeType"
        },
        "parentType": {
          "$ref": "#/definitions/Type"
        },
        "attributes": {
          "$ref": "#/definitions/Attributes"
        },
        "values": {
          "$ref": "#/definitions/Values"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "type"
      }
    },
    "TypeType": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "typeType"
      }
    },
    "UtmCoordinates": {
      "type": "object",
      "required": [
        "hemisphere"
      ],
      "properties": {
        "utmZone": {
          "type": "integer",
          "format": "int32"
        },
        "easting": {
          "type": "number",
          "format": "double"
        },
        "northing": {
          "type": "number",
          "format": "double"
        },
        "hemisphere": {
          "type": "string"
        }
      },
      "xml": {
        "name": "utmCoordinates"
      }
    },
    "Value": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "storageTypeId": {
          "type": "string"
        },
        "isRequired": {
          "type": "boolean"
        },
        "isListOfValues": {
          "type": "boolean"
        },
        "precision": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "requiresRangeCheck": {
          "type": "boolean"
        },
        "rangeMin": {
          "type": "number"
        },
        "rangeMax": {
          "type": "number"
        },
        "defaultUnitName": {
          "type": "string"
        },
        "isIndex": {
          "type": "boolean"
        },
        "listOfValues": {
          "$ref": "#/definitions/ListOfValues"
        },
        "valueIndex": {
          "$ref": "#/definitions/ValueIndex"
        },
        "uriConstraints": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "location": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "nameId": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "value"
      }
    },
    "ValueIndex": {
      "type": "object",
      "required": [
        "description",
        "name"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "Values": {
      "type": "object",
      "properties": {
        "values": {
          "type": "array",
          "xml": {
            "name": "value"
          },
          "items": {
            "xml": {
              "name": "value"
            },
            "$ref": "#/definitions/Value"
          }
        }
      }
    },
    "LocationMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "locationMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "SimpleMetadataDTO": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "description": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "DataType": {
      "type": "object",
      "properties": {
        "dataTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "dataTypeName": {
          "type": "string"
        },
        "unitsName": {
          "type": "string"
        },
        "javaType": {
          "type": "string"
        },
        "tableName": {
          "type": "string"
        },
        "parameterType": {
          "type": "string"
        },
        "processingLevel": {
          "type": "string"
        },
        "system": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    },
    "Sensor": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorId": {
          "type": "integer",
          "format": "int64"
        },
        "pdrObserverId": {
          "type": "integer",
          "format": "int64"
        },
        "assetUid": {
          "type": "integer",
          "format": "int64"
        },
        "maximoAsset": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "sensorType": {
          "$ref": "#/definitions/SensorTypeDTO"
        },
        "macAddress": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorDTO"
          }
        },
        "locationEntity": {
          "$ref": "#/definitions/Location"
        },
        "sensorTypeEntity": {
          "$ref": "#/definitions/SensorType"
        },
        "childEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/Sensor"
          }
        }
      }
    },
    "SensorDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorId": {
          "type": "integer",
          "format": "int64"
        },
        "pdrObserverId": {
          "type": "integer",
          "format": "int64"
        },
        "assetUid": {
          "type": "integer",
          "format": "int64"
        },
        "maximoAsset": {
          "type": "string"
        },
        "productNum": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "sensorType": {
          "$ref": "#/definitions/SensorTypeDTO"
        },
        "macAddress": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorDTO"
          }
        }
      }
    },
    "SensorStream": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "streamNumber": {
          "type": "integer",
          "format": "int64"
        },
        "dataRate": {
          "type": "string"
        },
        "calibrationFlag": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "sensorTypeEntity": {
          "$ref": "#/definitions/SensorType"
        },
        "dataTypeEntity": {
          "$ref": "#/definitions/DataType"
        }
      }
    },
    "SensorStreamDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "streamNumber": {
          "type": "integer",
          "format": "int64"
        },
        "dataRate": {
          "type": "string"
        },
        "calibrationFlag": {
          "type": "string"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        }
      }
    },
    "SensorType": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreams": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStreamDTO"
          }
        },
        "sensorStreamEntities": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStream"
          }
        }
      }
    },
    "SensorTypeDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorTypeId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "validDate": {
          "type": "string",
          "format": "date-time"
        },
        "installDate": {
          "type": "string",
          "format": "date-time"
        },
        "removeDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorStreams": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/SensorStreamDTO"
          }
        }
      }
    },
    "LocationFrameworkDTO": {
      "type": "object",
      "properties": {
        "site": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "domain": {
          "type": "string"
        },
        "defaultLevels": {
          "type": "integer",
          "format": "int32"
        },
        "boomsPerLevel": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "MeasTransitionedDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "measurementStreamName": {
          "type": "string"
        },
        "startDate": {
          "type": "string",
          "format": "date-time"
        },
        "versionStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "endDate": {
          "type": "string",
          "format": "date-time"
        },
        "versionEndDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataCount": {
          "type": "integer",
          "format": "int64"
        },
        "numericValue": {
          "type": "number"
        },
        "textValue": {
          "type": "string"
        },
        "filename": {
          "type": "string"
        },
        "measurementReadoutId": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "Blob": {
      "type": "object",
      "properties": {
        "binaryStream": {
          "$ref": "#/definitions/InputStream"
        }
      }
    },
    "InputStream": {
      "type": "object"
    },
    "PdrMessageDTO": {
      "type": "object",
      "properties": {
        "msgId": {
          "type": "integer",
          "format": "int64"
        },
        "jmsMsgId": {
          "type": "string"
        },
        "msgBody": {
          "$ref": "#/definitions/Blob"
        },
        "msgProcFlag": {
          "type": "string"
        }
      }
    },
    "MoabJobDTO": {
      "type": "object",
      "properties": {
        "moabJobName": {
          "type": "string"
        },
        "classname": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "dataStartTimeStr": {
          "type": "string"
        },
        "dataEndTimeStr": {
          "type": "string"
        },
        "jobSubmitTimeStr": {
          "type": "string"
        },
        "jobStartTimeStr": {
          "type": "string"
        },
        "jobCompleteTimeStr": {
          "type": "string"
        }
      }
    },
    "ReadoutStreamDTO": {
      "type": "object",
      "properties": {
        "readoutStreamId": {
          "type": "integer",
          "format": "int64"
        },
        "readoutStreamUri": {
          "type": "string"
        },
        "streamName": {
          "type": "string"
        },
        "startTime": {
          "type": "string",
          "format": "date-time"
        },
        "endTime": {
          "type": "string",
          "format": "date-time"
        },
        "javaType": {
          "type": "string"
        },
        "version": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "SensorMetadataDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "sensorMetadataId": {
          "type": "integer",
          "format": "int64"
        },
        "sensor": {
          "$ref": "#/definitions/SensorDTO"
        },
        "dataType": {
          "$ref": "#/definitions/DataTypeDTO"
        },
        "data": {
          "type": "string"
        }
      }
    },
    "ThresholdDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "thresholdId": {
          "type": "integer",
          "format": "int64"
        },
        "location": {
          "$ref": "#/definitions/LocationDTO"
        },
        "dataProduct": {
          "$ref": "#/definitions/DataProductDTO"
        },
        "startDay": {
          "type": "integer",
          "format": "int32"
        },
        "stopDay": {
          "type": "integer",
          "format": "int32"
        },
        "stepDiff": {
          "type": "number",
          "format": "double"
        },
        "rangeMax": {
          "type": "number",
          "format": "double"
        },
        "rangeMin": {
          "type": "number",
          "format": "double"
        },
        "persistInterval": {
          "type": "number",
          "format": "double"
        },
        "persistThreshold": {
          "type": "number",
          "format": "double"
        }
      }
    },
    "TransitionDTO": {
      "type": "object",
      "properties": {
        "changedBy": {
          "type": "string"
        },
        "changedDate": {
          "type": "string",
          "format": "date-time"
        },
        "name": {
          "type": "string"
        },
        "inputDataProducts": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "outputDataProducts": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "TransitionCronJob": {
      "type": "object",
      "properties": {
        "minute": {
          "type": "string"
        },
        "hour": {
          "type": "string"
        },
        "dayInMonth": {
          "type": "string"
        },
        "month": {
          "type": "string"
        },
        "dayOfWeek": {
          "type": "string"
        },
        "jobScript": {
          "type": "string"
        },
        "jobConfig": {
          "type": "string"
        },
        "enabled": {
          "type": "boolean"
        },
        "hardDisabled": {
          "type": "boolean"
        },
        "jobType": {
          "type": "string"
        }
      }
    },
    "TransitionCronJobsData": {
      "type": "object",
      "properties": {
        "notes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "firstComments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "secondComments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "jobList": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TransitionCronJob"
          }
        }
      }
    },
    "TransitionJobDTO": {
      "type": "object",
      "properties": {
        "transitionJobId": {
          "type": "integer",
          "format": "int64"
        },
        "moabJobName": {
          "type": "string"
        },
        "classname": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "site": {
          "type": "string"
        },
        "dataStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "dataEndDate": {
          "type": "string",
          "format": "date-time"
        },
        "jobStartDate": {
          "type": "string",
          "format": "date-time"
        },
        "jobEndDate": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "UnitsDTO": {
      "type": "object",
      "properties": {
        "unitsId": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "measure": {
          "type": "string"
        },
        "abbreviation": {
          "type": "string"
        },
        "siParent": {
          "type": "string"
        },
        "siMultiplier": {
          "type": "string"
        },
        "scale": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    }
  }
}
