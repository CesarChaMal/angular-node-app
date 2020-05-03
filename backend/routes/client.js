const express = require("express");
const Client = require("../models/client");
const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  console.log(JSON.stringify(req.body, null, 2));
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send("Bad Request");
  }

  const client = new Client({
    client: req.body.client,
    product: req.body.product,
    address: req.body.address,
    phone: req.body.phone,
    extras: req.body.extras
  });
  console.log('Router client request');
  console.log(client);
  client.save().then(createdClient => {
    console.log('Router client');
    console.log(createdClient);
    res.status(201).json({
      message: "Client added successfully",
      client: {
        id: createdClient._id,
        client: createdClient.client,
        product: createdClient.product,
        address: createdClient.address,
        phone: createdClient.phone,
        extras: createdClient.extras
      }
      // post: {
      //   ...createdPost,
      //   id: createdPost._id
      // }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

router.put("/:id", (req, res, next) => {
  const client = new Client({
    _id: req.body.id,
    client: req.body.client,
    product: req.body.product,
    address: req.body.address,
    phone: req.body.phone,
    extras: req.body.extras
  });
  console.log('client: ' + client.client);
  console.log('Router put');
  console.log(client);
  Client.updateOne({ _id: req.params.id}, client).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!"});
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  console.log(req.query)
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const clientQuery = Client.find();
  let fetchedClients;
  if (pageSize && currentPage) {
    clientQuery
    .skip(pageSize * (currentPage - 1))
    .limit(pageSize);
  }
  clientQuery.then(documents => {
    console.log('Router get');
    console.log(documents);
    fetchedClients = documents;
    return Client.count();
  })
  .then(count => {
    res.status(200).json({
      message: "Clients fetched successfully!",
      clients: fetchedClients,
      maxClients: count
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("/:id", (req, res, next) => {
  Client.findById(req.params.id).then(client => {
    console.log('Router get id');
    console.log(client);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: "Client not found!" });
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.delete("/:id", (req, res, next) => {
  Client.deleteOne({ _id: req.params.id }).then(result => {
    console.log('Router delete');
    console.log(result);
    res.status(200).json({ message: "Client deleted!" });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
