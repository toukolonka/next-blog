migrate((db) => {
  const collection = new Collection({
    "id": "a3xv04undd1p4tm",
    "created": "2023-01-14 13:37:44.977Z",
    "updated": "2023-01-14 13:37:44.977Z",
    "name": "blogs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wqlaiua3",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a3xv04undd1p4tm");

  return dao.deleteCollection(collection);
})
