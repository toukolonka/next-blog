migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
