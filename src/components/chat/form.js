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
  "name": {
    "title": "PersonName",
    "properties": {
      "name": {
        "type": "string",
        "format": "string",
        "default": "John Smith"
      }
    }
  }
}

export const schemaKeys = ["name"]

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
