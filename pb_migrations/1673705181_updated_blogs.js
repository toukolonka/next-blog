migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
