const form = {
  "type": "object",
  "title": "PersonName",
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
    },
    "name": {
      "type": "string",
      "format": "string",
      "default": "John Smith"
    }
  }
}

const getSchema = (chatId) => {
  let formChanged = {...form}
  formChanged.properties.from.default = chatId
  return formChanged
}

export default getSchema
