migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmjh8rft",
    "name": "previewText",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 10,
      "max": 150,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // remove
  collection.schema.removeField("zmjh8rft")

  return dao.saveCollection(collection)
})
