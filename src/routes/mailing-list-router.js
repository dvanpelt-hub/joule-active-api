const path = require("path");
const express = require("express");
const xss = require("xss");
const MailingListService = require("./mailing-list-service");

const mailingListRouter = express.Router();
const jsonParser = express.json();

const sanitizeEntry = (entry) => ({
  ...entry,
  name: xss(entry.user_id),
});

mailingListRouter
  .route("/mailingList")
  .get((req, res, next) => {
    MailingListService.getAllUsers(req.app.get("db"))
      .then((user) => {
        res.json(user.map(sanitizeEntry));
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { first_name, last_name, email } = req.body;
    for (const [key, value] of Object.entries(first_name, last_name, email)) {
      if (value === null) {
        return res.status(400).json({
          error: { message: `Missing ${key} in request body` },
        });
      }
    }
    MailingListService.insertUserDetails(
      req.app.get("db"),
      first_name,
      last_name,
      email
    )
      .then((user) => {
        res.status(201);
        // .location(path.posix.join(req.originalUrl, `/${user.user_id}`));
        res.json(sanitizeEntry(user));
      })
      .catch(next);
  });

module.exports = mailingListRouter;
