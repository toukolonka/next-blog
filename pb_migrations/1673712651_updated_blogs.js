migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "luuyxpl8",
    "name": "author",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  // remove
  collection.schema.removeField("luuyxpl8")

  return dao.saveCollection(collection)
})
