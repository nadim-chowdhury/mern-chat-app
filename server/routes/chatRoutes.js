const express = require("express");
const { accessChats } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChats);
router.route("/").get(protect, fetchChats);

router.route("/group").get(protect, createGroupChat);
router.route("/rename").get(protect, renameGroup);

router.route("/groupremove").get(protect, removeFromGroup);
router.route("/groupadd").get(protect, addToGroup);

module.exports = router;
