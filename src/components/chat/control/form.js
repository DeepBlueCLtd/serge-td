const form = {
  "type": "object",
  "required": [
    "from",
    "to",
    "title",
  ],
  "properties": {
    "from": {
      "type": "string",
      "enum": [
        "red",
        "blue"
      ]
    },
    "to": {
      "type": "string",
      "enum": [
        "red",
        "blue"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title for this message"
    }
  }
}

const properties = {
  "height": {
    "title": "PersonHeight",
    "properties": {
      "height": {
        "type": "integer",
        "default": 12
      }
    }
  },
  "weight": {
    "title": "PersonWeight",
    "properties": {
      "weight": {
        "type": "integer",
        "default": 12
      }
    }
  },
  "color": {
    "title": "PersonColor",
    "properties": {
      "color": {
        "type": "string",
        "format": "color"
      }
    }
  }
}

export const schemaKeys = ["height", "weight", "color"]

const getSchema = (schemaKey) => {
  if(schemaKeys.includes(schemaKey)) {
    return {
      ...form,
      title: properties[schemaKey].title,
      properties: {
        ...form.properties,
        ...properties[schemaKey].properties
      },
      required: [
        ...form.required,
        schemaKey
      ]
    }
  }

  return form
}

export default getSchema
