const express = require("express");
const router = express.Router();
const serviceRecordController = require("../controllers/serviceRecordController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, serviceRecordController.createServiceRecord);
router.get("/", auth, serviceRecordController.getServiceRecords);
router.put("/:id", auth, serviceRecordController.updateServiceRecord);
router.delete("/:id", auth, serviceRecordController.deleteServiceRecord);

module.exports = router;