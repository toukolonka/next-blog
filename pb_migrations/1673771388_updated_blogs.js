migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2sb95qrm",
    "name": "previewText",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // remove
  collection.schema.removeField("2sb95qrm")

  return dao.saveCollection(collection)
})
